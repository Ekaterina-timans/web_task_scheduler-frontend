import styles from "./Field.module.scss"
import cn from "clsx"

const BigField = ({ register, name, options, error, label, ...rest }) => {
    return (
        <div style={{ marginBottom: '16px', marginTop: '10px' }}>
            <label className={styles.label}>{label}</label>
            <textarea {...register(name, options)} {...rest} className={cn(styles.input, styles.textarea)} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
    )
}

export default BigField