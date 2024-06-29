import cn from "clsx"
import styles from "./AdminTable.module.scss"

const AdminTableHeader = ({ headerItems }) => {
	return (
		<div className={cn(styles.item, styles.itemHeader)}>
			{headerItems.map((value) => (
				<div key={value}>{value}</div>
			))}
			<div>Ban</div>
		</div>
	)
}

export default AdminTableHeader