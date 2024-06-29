import { Controller, useFormContext } from "react-hook-form"
import Field from "../../../ui/field/Field"
import { useUsers } from "./useUsers"
import Button from "../../../ui/button/Button"
import { SingleDayCalendar } from "../../../ui/calendar/single/SingleDayCalendar"
import BigField from "../../../ui/field/BigField"

export function BunForm() {
    const { register, reset, control, watch, handleSubmit } = useFormContext()

    const existsId = watch('id')
    const { userBlocked } = useUsers(existsId)

    const onSubmit = data => {
        const { id, dataEnd, ...rest } = data

        const formattedDate = dataEnd.substring(0, 10)
        const dto = { ...rest, dataEnd: formattedDate }

        userBlocked({ id, data: dto })

        reset({
            id: undefined,
            email: '',
            reasonBan: ''
        })
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: '60%' }}>

            <Field
                label='Email:'
                name='email'
                register={register}
                options={{
                    required: true,
                    disabled: true
                }}
            />

            <div style={{marginTop: '20px', marginBottom: '25px'}}>
                <label style={{fontSize: '20px'}}>End date of the ban:</label>
                <Controller
                    control={control}
                    name='dataEnd'
                    render={({ field: {value, onChange}}) => (
                        <SingleDayCalendar
                            onChange={onChange}
                            value={value}
                        />
                    )}
                />
            </div>

            <BigField
                label='Reason:'
                name='reasonBan'
                register={register}
                options={{
                    required: true
                }}
                placeholder='Enter reason:'
            />

            <Button 
                type='submit'
                style={{ marginTop: '24px' }}
            >
                {'Block'}
            </Button>
        </form>
    )
}