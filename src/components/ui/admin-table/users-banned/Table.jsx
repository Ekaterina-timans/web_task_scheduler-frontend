import TableHeader from "./TableHeader"
import TableItem from "./TableItem"
import styles from "./Table.module.scss"
import Dots from "../../loader/Dots"

const Table = ({ tableItems, headerItems, isLoading }) => {

    return (
        <div>
            <TableHeader headerItems={headerItems} />
            { isLoading ? (
                <div className={styles.loader}><Dots /></div>
            ) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<TableItem
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

export default Table