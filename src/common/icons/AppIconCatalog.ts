import MatCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatDIcon from 'react-native-vector-icons/MaterialIcons';
import FA6Icon from 'react-native-vector-icons/FontAwesome6';

const AppIconCatalog = {
  utilities: {
    browser: {
      addressBar: {
        tab: {
          core: MatDIcon,
          name: 'web-stories',
        },
        home: {
          core: MatCIcon,
          name: 'home',
        },
        reload: {
          core: MatCIcon,
          name: 'reload',
        },
        menu: {
          core: FA6Icon,
          name: 'ellipsis-vertical',
        },
      },
      home: {
        shortcut: {
          core: MatCIcon,
          name: 'earth',
        },
      },
      navBar: {
        download: {
          core: MatCIcon,
          name: 'download',
        },
        history: {
          core: MatCIcon,
          name: 'web-clock',
        },
        bookmark: {
          core: MatCIcon,
          name: 'bookmark-multiple',
        },
      },
      tab: {
        add: {
          core: MatCIcon,
          name: 'plus-circle',
        },
      },
      bookmark: {
        default: {
          core: MatCIcon,
          name: 'bookmark',
        },
        add: {
          core: MatCIcon,
          name: 'bookmark-plus',
        },
        remove: {
          core: MatCIcon,
          name: 'bookmark-remove',
        },
        edit: {
          core: MatCIcon,
          name: 'book-edit-outline',
        },
        star: {
            core: MatCIcon,
            name: 'star',
        },
        starOutlined: {
            core: MatCIcon,
            name: 'star-outline',
        },
        folder: {
          default: {
            core: MatCIcon,
            name: 'folder',
          },
          add: {
            core: MatCIcon,
            name: 'folder-plus',
          },
          remove: {
            core: MatCIcon,
            name: 'folder-remove',
          },
          edit: {
            core: MatCIcon,
            name: 'folder-edit',
          },
        },
      },
      common: {
        close: {
          core: MatCIcon,
          name: 'close',
        },
        web: {
          core: MatCIcon,
          name: 'web',
        },
      },
    },
  },
};

export default AppIconCatalog;
