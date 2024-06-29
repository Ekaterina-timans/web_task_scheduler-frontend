import styles from "./Table.module.scss"

const TableHeader = ({ headerItems }) => {
	return (
		<div className={styles.itemHeader}>
			{headerItems.map((value) => (
				<div key={value}>{value}</div>
			))}
			<div>Actions</div>
		</div>
	)
}

export default TableHeader