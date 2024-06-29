import AdminTableHeader from "./AdminTableHeader"
import AdminTableItem from "./AdminTableItem"
import styles from "./AdminTable.module.scss"
import Dots from "../../loader/Dots"

const AdminTable = ({ tableItems, headerItems, isLoading }) => {

    return (
        <div>
            <AdminTableHeader headerItems={headerItems} />
            { isLoading ? (
                <div className={styles.loader}><Dots /></div>
            ) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<AdminTableItem
						key={tableItem._id}
						tableItem={tableItem}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
            )}
        </div>
    )
}

export default AdminTable