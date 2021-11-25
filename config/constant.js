export default ( context, inject ) => {
  const i18n = context.store.$i18n
  const c = { // Constant
    // General
    FORMAT_DATE: 'YYYY-MM-DD',
    FORMAT_MONTH: 'YYYY-MM',
    FORMAT_DATETIME: 'YYYY-MM-DD HH:mm',
    FORMAT_DAY: 'D',
    // FORMAT_MONTH: 'M',
    FORMAT_YEAR: 'YYYY',
    FORMAT_HOUR: 'HH',
    FORMAT_MINUTE: 'mm',

    // Menu type
    MENU_TYPE_NONE : 0,
    MENU_TYPE_INTERNAL: 1,
    MENU_TYPE_EXTERNAL : 2,

    // Menu Internal type
    MENU_TYPE_INTERNAL_CATEGORY: 1,
    MENU_TYPE_INTERNAL_POST: 2,

    Menu : {
      type : [
        // Special => Using the id of that table
        {'id': 0, 'name': 'None'},
        {'id': 1, 'name': 'Internal'},
        {'id': 2, 'name': 'External url'}
      ],
      type_internal : [
        // Special => Using the id of that table
        {'id': 1, 'name': 'Category'},
        {'id': 2, 'name': 'Post'},

        // General => Using the link
        {'id': 11, 'name': 'Contact', 'link': '/contact'},
        {'id': 12, 'name': 'FAQ', 'link': '/faq'}
      ],
      bind_post : { // Bind the post of category to this menu
        0: 'No',
        1: 'Yes'
      }
    },
    Lesson: {
      Level : [
        { 'id' : 'all', 'name' : 'Tất cả', 'class' : 'one'},
        { 'id' :  1, 'name' : 'Cơ bản', 'class' : 'two'},
        { 'id' :  2, 'name' : 'Trung cấp', 'class' : 'three'},
        { 'id' :  3, 'name' : 'Cao cấp', 'class' : 'four'}
      ]
    },
    Role: {
      object: {
        1: 'Admin',
        2: 'Member',
      },
      array: [
        {'id': 1, 'name': 'Admin'},
        {'id': 2, 'name': 'Member'}
      ]
    },

    // List status
    STATUS_NEW: 1,
    STATUS_AWAITING_APPROVAL: 2,
    STATUS_REJECTED: 3,
    STATUS_APPROVED: 4,

    // List sample
    SAMPLE_TYPE_A: 1,
    SAMPLE_TYPE_B: 2,

    // List Roles
    ADMIN: 1,
    MEMBER: 2,

    // File responsive
    FILE_UPLOAD: context.$axios.defaults.baseURL + '/files/upload/',
    FILE_MEDIA_BASE: context.$axios.defaults.baseURL + '/files/media/base/',
    FILE_MEDIA_THUMB: context.$axios.defaults.baseURL + '/files/media/thumb/',
    BASE_API: context.$axios.defaults.baseURL + '/',
    MENU_HOME: context.$config.MENU_HOME,
    MENU_COURSE: context.$config.MENU_COURSE,
    MENU_KNOWLEDGE: context.$config.MENU_KNOWLEDGE,
    MENU_EVENT: context.$config.MENU_EVENT,
    MENU_PRODUCT: context.$config.MENU_PRODUCT,
    MENU_ABOUT_US: context.$config.MENU_ABOUT_US,
    // key recaptcha
    KEY_RECAPTCHA: context.$config.KEY_RECAPTCHA
  }

  const list = { // Constant in list
    'Common': {
      'status': {
        [c.STATUS_NEW]: i18n.t('status_new'),
        [c.STATUS_AWAITING_APPROVAL]: i18n.t('awaiting_approval'),
        [c.STATUS_REJECTED]: i18n.t('rejected'),
        [c.STATUS_APPROVED]: i18n.t('approved'),
      },

      'permissions': [
        {
          'name': i18n.t('Chức năng hệ thống'),
          'list': {
            // [c.PERMISSION_PERMISSION]: i18n.t('Chức năng'),
            [c.PERMISSION_GROUP]: i18n.t('Nhóm - Phòng ban'),
            [c.PERMISSION_USER]: i18n.t('Người dùng - Nhân sự'),
            [c.PERMISSION_ROLE]: i18n.t('Vai trò - Vị trí'),
            [c.PERMISSION_MASTER]: i18n.t('Master data'),
          }
        },
      ]
    },

    'Sample': {
      'type': {
        [c.SAMPLE_TYPE_A]: i18n.t('type_a'),
        [c.SAMPLE_TYPE_B]: i18n.t('type_b'),
      }
    },
  }

  inject('c',{...c,...list})  // $c = constant
}
