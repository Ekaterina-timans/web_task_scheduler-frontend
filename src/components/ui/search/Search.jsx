import { useState } from "react"
import { SearchField } from "../search-field/SearchField"
import styles from "./Search.module.scss"

export const Search = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (e) => {
		const value = e.target.value
        setSearchTerm(value)
        handleSearch(value)
	}

    return (
        <div className={styles.wrapper}>
            <SearchField searchTerm={searchTerm} handleSearch={handleChange} />
        </div>
	)
}