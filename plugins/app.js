import constant from '@/config/constant'
export default ( context, inject ) => {

  const timezone = new Date().getTimezoneOffset()
  context.$axios.setHeader('timezone', '' + timezone)
  context.$axios.setHeader('locale', context.store.$i18n.locale)

  context.$axios.$get = async (url, config) => {
    try {
      const res = await context.$axios.get(url, config)
      return res.data
    } catch (e) {
      return false
    }
  }

  context.$apiUrl = process.env.API_URL

  context.$axios.$post = async (url, data, config) => {
    try {
      /* ---------- Remove clientDataURL in postData (when upload files) { ---------- */
      for (let k in data) {
        if (data.hasOwnProperty(k) && data[k] instanceof Array) {
          for(let item of data[k]) {

            if(item.clientDataURL) {
              delete item.clientDataURL
            }

            /* Deal with hasMany items (repeat one more time) { */
            for (let i in item) {
              if (item.hasOwnProperty(i) && item[i] instanceof Array) {
                for(let sub of item[i]) {
                  if(sub.clientDataURL) {
                    delete sub.clientDataURL
                  }
                }
              }
            }
            /* Deal with hasMany items } */
          }
        }
      }
      /* ---------- Remove clientDataURL in postData (when upload files) } ---------- */

      const res = await context.$axios.post(url, data, config)
      return res.data
    } catch (e) {
      return false
    }
  }

  context.$put = async (url, data, config) => {
    try {
      const res = context.$axios.$put(url, config)
      return res.data
    } catch (e) {
      return false
    }
  }

  context.$delete = async (url, config) => {
    try {
      return await context.$axios.$delete(url, config)
    } catch (e) {
      return false
    }
  }

  inject('c',constant)  // $c = constant
  inject('h',{          // $h = helper

    async getList(list, params) {
      let queryParams = {};
      for(let item in list) {
        queryParams[item] = list[item]
      }

      if (params !== undefined) {
        queryParams = {...queryParams,...params} // merge 2 params
      }

      return await context.$axios.$get('/common/list', { params: queryParams })
    },

    getImg(imgSrc, thumb = false) {
      if (imgSrc) {
        return (thumb ? context.app.$c.FILE_MEDIA_THUMB : context.app.$c.FILE_MEDIA_BASE) + imgSrc.substring(2, imgSrc.length - 2)
      } else {
        return '/img/default.png'
      }
    },

    /**
     * Show the toast
     * @param type (success | warning | error | info)
     * @param message message to display
     */
    toast(type,message) {
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": 300,
        "hideDuration": 100,
        "timeOut": 5000,
        "extendedTimeOut": 1000,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

      toastr[type](context.store.$i18n.t(message))
    },

    /**
     * Show the confirm delete alert box
     * @param callback the function callback execute when click 'Confirm'
     */
    confirmDelete(callback) {
      initApp.playSound('media/sound', 'messagebox')

      bootbox.confirm({
        title: "<i class='" + myapp_config.appIconPrefix +  " fa-exclamation-triangle text-warning mr-2'></i> Are you sure?",
        message: "<span><strong>Warning:</strong> This action is not reversable.</span>",
        centerVertical: true,
        swapButtonOrder: true,
        buttons: {
          confirm: {
            label: 'Confirm',
            className: 'btn-primary shadow-0'
          },
          cancel: {
            label: 'Cancel',
            className: 'btn-secondary'
          }
        },
        className: "modal-alert",
        closeButton: false,
        callback: function (result) {
          if (result === true) {
            callback()
          }
        }
      })
    },

    getDate(date, format) {
      date = '' + date
      return context.$moment(date).isValid() ? (format ? context.$moment(date).format(format) : context.$moment(date)) : ''
    },

    formatNumber(number = 0, letter = ' ') {
      if (number !== null) {
        return number.toString().split(/(?=(?:\d{3})+(?:.|$))/g).join(letter)
      } else {
        return null
      }
    },

    vt(value, lang = null) {
      // if (value) value = value.replace(/&quot;/g,'"')
      let json = this.isJsonString(value)
      if (json) {
        json = JSON.parse(value)
        if (lang) return json[lang]
        else return json[context.store.$i18n.locale] || json[context.store.$i18n.defaultLocale] || json[Object.keys(json)[0]]
      }
      return lang ? '' : value
    },

    isJsonString(text) {
      if(!isNaN(text)) return false
      return !!(text && /^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, '')))
    },

    nl2br(text) {
      return text ? text.replace(/(?:\\r\\n|\\r|\\n)/g, '<br />') : ''
    },

    getSlug(str, lang ='') {
      if(this.isJsonString(str)){
        str = JSON.parse(str);
        for(let key in str){
          str[key] = lang ? this.slug(str[lang]) : this.slug(str[key])
        }
        return JSON.stringify(str)
      }
      return JSON.stringify(this.slug(str));
    },

    slug(str) {
      let slug = str.toLowerCase()
      slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
      slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
      slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
      slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
      slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
      slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
      slug = slug.replace(/đ/gi, 'd')
      slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '')
      slug = slug.replace(/ /gi, '-')
      slug = slug.replace(/\-\-\-\-\-/gi, '-')
      slug = slug.replace(/\-\-\-\-/gi, '-')
      slug = slug.replace(/\-\-\-/gi, '-')
      slug = slug.replace(/\-\-/gi, '-')
      slug = '@' + slug + '@'
      slug = slug.replace(/\@\-|\-\@|\@/gi, '')
      return slug
    },

    convertLevelLesson(level) {
      const item = context.app.$c.Lesson.Level.filter(item => item.id == level)
      return item.length > 0 ? item[0].name : ''
    },

    showRating(rat) {
      let text = ''
      for (let i = 0; i < rat; i++) {
        text += "<span><img src=\"/images/svg/star.svg\" alt=\"\"></span>"
      }
      if (rat < 5) {
        for (let i = 0; i < ( 5 - rat); i++) {
          text += "<span><img src=\"/images/svg/star_dis.svg\" alt=\"\"></span>"
        }
      }
      return text
    },

    convertTimePost(time) {
      // Tháng 6, 2021
      return context.app.$moment(time).format(context.app.$c.FORMAT_MONTH) + ', ' + context.app.$moment(time).format(context.app.$c.FORMAT_YEAR)
    },

    chumkConvert(array, limit) {
      const data = array.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index/limit)

        if(!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])
      return data
    }
  })

  context.$axios.onError((error) => {
    switch (error.response.status) {
      case 422:
        if (typeof error.response.data.error !== 'undefined') {
          context.$h.toast('error',context.store.$i18n.t(error.response.data.error))
        } else {
          context.$h.toast('error',context.store.$i18n.t('please_check_your_input_data'))
        }

        handleValidateErrors(error.response.data)
        break
      case 404:
        if (typeof error.response.data.error !== 'undefined') {
          context.$h.toast('error',context.store.$i18n.t(error.response.data.error))
        } else {
          context.$h.toast('error',context.store.$i18n.t('data_not_found'))
        }

        // window.location.href = '/'
        break
      default:
        break
    }
  })

  context.$axios.onResponse((res) => {
    if(res.status === 200 && res.data.success) {
      context.$h.toast('success',res.data.success)
    }
  })

  const handleValidateErrors = (errors) => {
    $.each(errors, async (key, mess) => {
      await $('.invalid-feedback').remove()
      await $('.is-invalid').removeClass('is-invalid')

      const str = Array.isArray(mess) ? mess[0] : mess
      const trans = context.store.$i18n.t(str)
      const divErrorMessage = `<div class="invalid-feedback">${trans}</div>`

      let input = null

      if (key.includes('.')) {
        const splitKey = key.split('.')
        // has many form
        if (splitKey.length === 3) {
          let [group, number, fieldName] = splitKey
          input = $(`[data-group=${group}] [data-name=${fieldName}]`).not('has(>input)').eq(number)
            .add($(`[data-group=${group}] select[data-name=${fieldName}]`).not('has(>input)').eq(number).next())
        }
        // has one form
        if (splitKey.length === 2) {
          let [group, fieldName] = splitKey
          input = $(`[data-group=${group}] [data-name=${fieldName}])`)
            .add($(`[data-group=${group}] select[data-name=${fieldName}])`).next())
        }
        if (input) {
          input.addClass('is-invalid')
          input.parent().append(divErrorMessage)
        }
      }
      // simple form
      else {
        input = $(`input[name=${key}], textarea[name=${key}], select[name=${key}], div[name=${key}] .cke_2`)
          .add($(`select[name=${key}]`).next())

        input.addClass('is-invalid')

        if (input.parent('.input-group').length === 1) {
          input.parent().append(divErrorMessage)
        }
        else {
          input.parent().append(divErrorMessage)
        }
      }
      if (input) {
        input.on('input change DOMSubtreeModified', () => {
          hideErrorWhenFirstFocus(input)
        })
      }
    })
  }

  const hideErrorWhenFirstFocus = (ele) => {
    ele.removeClass('is-invalid')
    ele.closest('.invalid-feedback').remove()
    if (!ele.hasClass('select2')) {
      ele.off('input change')
    }
  }
}
