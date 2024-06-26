import { Toaster } from "sonner"
import { useCheckToken } from "../../hooks/useCheckToken"
import styles from "./Layout.module.scss"
import Sidebar from "./sidebar/Sidebar"
import { Header } from "./header/Header"

const Layout = ({ children }) => {
    useCheckToken()

    return (
        <div className={styles.section}>
            <Sidebar />
            <main className={styles.container}>
                <Header />
                {children}
                <Toaster
                    position='bottom-right'
                    duration={1500}
                    style={{ padding: '6px', borderRadius: '5px' }}
				/>
            </main>
        </div>
    )
} 

export default Layout