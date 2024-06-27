import styles from "./Field.module.scss"

const Field = ({ register, name, options, error, label, ...rest }) => {
    return (
        <div style={{ marginBottom: '16px', marginTop: '10px' }}>
            <label className={styles.label}>{label}</label>
            <input {...register(name, options)} {...rest} className={styles.input} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
    )
}

export default Field