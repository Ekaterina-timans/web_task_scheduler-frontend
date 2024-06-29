import { FaBan } from "react-icons/fa"
import styles from "./AdminTable.module.scss"
import { useFormContext } from "react-hook-form"

const AdminTableItem = ({ tableItem }) => {
	const { reset } = useFormContext()
	const isBanned = tableItem.items[2] == 1

	return (
		<div className={styles.item}>
			{tableItem.items.slice(0, 2).map((value) => (
				<div key={value}>{value}</div>
			))}
            <button className={styles.btn}
				disabled={isBanned} 
				onClick={() => {
                    reset({
                        id: tableItem._id,
      					email: tableItem.items[0]
                    })
                }}
			>
                <FaBan size={25}/>
            </button>
		</div>
	)
}

export default AdminTableItem