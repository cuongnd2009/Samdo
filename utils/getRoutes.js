const axios = require('axios')

module.exports = async function getAppRoutes() {

  // const
  const MENU_TYPE_INTERNAL = 1
  const LANG = ['vn', 'en']
  const DEFAULT_LANG = 'vn'
  const routes = []

  LANG.forEach(k => {
    routes.push({
      lastmod: new Date(),
      url: '/' + (k !== DEFAULT_LANG ? k : ''),
      changefreq: 'hourly',
      title: 'HOME',
      priority: 1
    })
  })

  let pushRoute = ((rawTitle, rawSlug, sub) => {
    try {
      const title = JSON.parse(rawTitle)
      const slug = JSON.parse(rawSlug)

      Object.keys(slug).forEach(k => {
        if (LANG.includes(k)) {
          routes.push({
            lastmod: new Date(),
            url: `/${k !== DEFAULT_LANG ? k : ''}/${sub}/${slug[k]}`,
            changefreq: 'hourly',
            title: title[k]
          })
        }
      })
    } catch (e) {}
  })

  // Initiate axios
  const instance = axios.create({
    baseURL: process.env.API_URL
  })

  const staticData = await instance.get('common/data', { params: { active: 1 } }).then(res => {
    return res.data.data
  })

  // Common Data
  // staticData Menu
  let getMenuLink = (menus => {
    menus.forEach(menu => {
      if (menu.type === MENU_TYPE_INTERNAL) {
        // category
        if (menu.cate_slug) {
          pushRoute(menu.name, menu.cate_slug, 'c')
        }
        // post
        else if(menu.post_slug) {
          pushRoute(menu.name, menu.post_slug, 'p')
        }
        // static page, eg: contact, faq, about, ...
        else if(menu.link) {
          try {
            const title = JSON.parse(menu.name)
            LANG.forEach(k => {
              routes.push({
                lastmod: new Date(),
                url: `/${k !== DEFAULT_LANG ? k : ''}/${menu.link}`,
                changefreq: 'hourly',
                title: title[k]
              })
            })
          } catch (e) {}
        }
      }
      if (menu.children && menu.children.length) {
        getMenuLink(menu.children)
      }
    })
  })
  getMenuLink(staticData.menu)

  // staticData category
  Object.keys(staticData.list).forEach(cateId => {
    const cate = staticData.list[cateId].category
    pushRoute(cate.name, cate.slug, 'c')

    const posts = staticData.list[cateId].posts
    posts.forEach(post => {
      pushRoute(post.title, post.slug, 'p')
    })
  })

  // staticData post
  Object.keys(staticData.post).forEach(postId => {
    const post = staticData.post[postId]
    pushRoute(post.title, post.slug, 'p')
  })

  // All Category
  const categories = await instance.get('category/dynamic', { params: { active: 1, sort: 'order' } }).then(res => {
    return res.data.data
  })

  categories.forEach(cate => {
    pushRoute(cate.name, cate.slug, 'c')
  })

  // All Post
  const posts = await instance.get('post/dynamic', { params: { active: 1, sort: 'order', limit: 200 } }).then(res => {
    return res.data.data
  })

  posts.forEach(post => {
    pushRoute(post.title, post.slug, 'c')
  })

  // ADD CUSTOM ROUTE HERE

  // Return all available routes
  return routes
}
