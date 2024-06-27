import { useForm } from "react-hook-form"
import Layout from "../../layout/Layout"
import { Heading } from "../../ui/Heading"
import { useInitialData } from "./useInitialData"
import { useUpdateData } from "./useUpdateData"
import Field from "../../ui/field/Field"
import Button from "../../ui/button/Button"
import { useThemeContext } from "../../../providers/ThemeContext"
import styles from "./Setting.module.scss"
import React from "react"
import { IoMoonOutline } from "react-icons/io5"
import { GoSun } from "react-icons/go"

const Settings = () => {
    const { register, handleSubmit, reset } = useForm({
		mode: 'onChange'
	})

    useInitialData(reset)

    const { isPending, mutate } = useUpdateData()

    const onSubmit = data => {
		const { password, ...rest } = data // если у нас есть пароль

		mutate({
			...rest,
			password: password || undefined // если пароль есть, мы его показываем, иначе нет
		})
	}

    const { theme, toggleTheme } = useThemeContext()
    const isDarkMode = theme === 'dark'

    return (
        <Layout>
            <Heading title='Settings' />
            <div className={styles.dark_mode}>
                <input
                    id="darkmode-toggle"
                    className={styles.dark_mode_input}
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleTheme}
                />
                <label className={styles.dark_mode_label} htmlFor="darkmode-toggle">
                    <IoMoonOutline className={styles.moon}/>
                    <GoSun className={styles.sun}/>
                </label>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div>
                            <Field
                                label='Email: '
                                name='email'
                                placeholder='Enter email: '
                                type='email'
                                register={register}
                                options={{
                                    required: 'Email is required'
                                }}
                            />

                            <Field
                                label='Password: '
                                name='password'
                                placeholder='Enter password: '
                                type='password'
                                register={register}
                            />  
                        </div>
                        <div>
                            <Field
                                label='Name: '
                                name='name'
                                placeholder='Enter name: '
                                register={register}
                            />
                        </div>
                    </div>

                    <Button type='submit' disable={isPending}>
                        Save
                    </Button>
                </form>
            </div>
        </Layout>
    )
}

export default Settings