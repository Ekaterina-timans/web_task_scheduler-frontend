import ListUsers from "../components/screens/admin/all-users/ListUsers.jsx"
import BannedUsers from "../components/screens/admin/blocked-users/BannedUsers.jsx"
import Auth from "../components/screens/auth/Auth.jsx"
import Settings from "../components/screens/settings/Settings.jsx"
import Statistics from "../components/screens/statistics/Statistics.jsx"
import Tasks from "../components/screens/tasks/Tasks.jsx"

export const routes = [
    {
        path: '/auth',
		component: Auth,
		isAuth: false
    },
    {
		path: '/',
		component: Statistics,
		isAuth: true
	},
	{
		path: '/tasks',
		component: Tasks,
		isAuth: true
	},
	{
		path: '/settings',
		component: Settings,
		isAuth: true
	},
	{
		path: '/admin/users',
		component: ListUsers,
		isAuth: true,
		userRole: 'admin'
	},
	{
		path: '/admin/users/banned',
		component: BannedUsers,
		isAuth: true,
		userRole: 'admin'
	}
]