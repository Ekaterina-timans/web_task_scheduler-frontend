import Button from "../../ui/button/Button"
import Field from "../../ui/field/Field"
import { useAuthPage } from "./useAuthPage"
import styles from "./Auth.module.scss"
import { Heading } from "../../ui/Heading"

const Auth = () => {
    const { errors, handleSubmit, onSubmit, register, setType } = useAuthPage()

    return (
        <>
            <section className={styles.wrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
					<Heading title='Auth' className={styles.text}/>
                    <Field
                        error={errors?.email?.message}
						label='Email:'
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='email'
						placeholder='Enter email:'
                    />

                    <Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						type='password'
						label='Password: '
						placeholder='Enter password: '
					/>

                    <div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Login</Button>
						<Button clickHandler={() => setType('register')}>Register</Button>
					</div>
                </form>
            </section>
        </>
    )
}

export default Auth