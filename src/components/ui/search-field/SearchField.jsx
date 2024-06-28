import { IoSearch } from "react-icons/io5"
import styles from "./SearchField.module.scss"

export const SearchField = ({ handleSearch, searchTerm }) => {
	return (
		<div className={styles.search}>
			<IoSearch size={25} style={{margin: '0 15px 0 5px'}} />
			<input placeholder="Search by title" value={searchTerm} onChange={handleSearch} />
		</div>
	)
}