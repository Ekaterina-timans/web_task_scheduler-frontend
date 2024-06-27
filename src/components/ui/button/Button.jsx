import styles from "./Button.module.scss"

const Button = ({ children, clickHandler = null }) => {
	return (
		<div className={styles.wrapper}>
			<button
				className={styles.button}
				onClick={clickHandler}
			>
				{children}
			</button>
		</div>
	)
}

export default Button