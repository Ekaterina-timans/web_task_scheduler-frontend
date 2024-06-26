import { FaChartLine } from "react-icons/fa6"
import { FaTasks } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"

export const MENU = [
    {
        icon: FaChartLine,
        link: '/',
        name: 'Statistics'
    },
    {
        icon: FaTasks,
        link: '/tasks',
        name: 'Tasks'
    },
    {
        icon: IoMdSettings,
        link: '/settings',
        name: 'Settings'
    }
]

export const MenuAdmin = [
    {
        link: '/admin/users',
        name: 'Users',
        
    },
    {
        link: '/admin/users/banned',
        name: 'Banned users',
    }
]