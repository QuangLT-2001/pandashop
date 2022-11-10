import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faThLarge,faUser} from '@fortawesome/free-solid-svg-icons';
export  const listMenu = [
    {
        id: 1,
        name: 'trang chủ',
        status: false,
        path: "",
    },
    {
        id:2,
        name: 'giới thiệu',
        status: false,
        path: "gioi-thieu",
    },
    {
        id:10,
        name: 'dịch vụ',
        status: false,
        path: "dich-vu",
    },
    {
        id: 3,
        name: 'sản phẩm',
        status: false,
        path: 'san-pham',
        subMenu: [
            {
                id: 3,
                name: 'giày dép',
                status: false,
                path: "giay-dep"
            },
            {
                id: 4,
                name: 'quần áo',
                status: false,
                path: 'quan-ao'
            },
            {
              id: 5,
              name: 'phụ kiện khác',
              status: false,
              path: 'phu-kien-khac'
            },
        ]
    },
    {
        id: 6,
        name: 'tin tức',
        status: false,
        path: 'tin-tuc',

    },
    {
        id: 7,
        name: 'liên hệ',
        status: false,
        path: 'lien-he',

    },
]
export const listMenuFixed = [
    {
        id: 1,
        name: 'home',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome}/>
    },
    {
        id: 2,
        name: 'danh mục',
        path: 'san-pham',
        icon: <FontAwesomeIcon icon={faThLarge}/>
    },
    {
        id: 3,
        name: 'Tài khoản',
        path: 'tai-khoan',
        icon: <FontAwesomeIcon icon={faUser}/>
    }
]


export const headerTopBottoms = [
    {
        id: 1,
        name: 'quần áo',
        path: 'quan-ao'
    },
    {
        id: 2,
        name: 'giày dép',
        path: 'giay-dep'
    },
    {
        id: 3,
        name: 'phụ kiện khác',
        path: 'phu-kien-khac'
    },
]