import { Controller, useFormContext } from "react-hook-form"
import { useUpdateTask } from "./hooks/useUpdateTask"
import { useCreateTask } from "./hooks/useCreateTask"
import Field from "../../ui/field/Field"
import Button from "../../ui/button/Button"
import { Selected } from "../../ui/selected/Selected"
import { SingleDayCalendar } from "../../ui/calendar/single/SingleDayCalendar"
import { useState } from "react"
import BigField from "../../ui/field/BigField"

export function TaskForm() {
    const { register, watch, control, reset, handleSubmit } = useFormContext()
    const { createTask, isPending } = useCreateTask()
    const [formSubmitted, setFormSubmitted] = useState(false)

    const existsId = watch('id')
    const { updateTask } = useUpdateTask(existsId)

    const onSubmit = data => {
        const { id, ...rest } = data
        const dto = {...rest}

        setFormSubmitted(true)
        if(formSubmitted) {
            if (id) {
                updateTask({
                    id,
                    data: dto
                })
            } else {
                createTask(dto)
            }
        
            reset({
                id: undefined,
                title: '',
                description: '',
                priority: null,
                dataEnd: null
            })
            setFormSubmitted(false)
        }
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: '60%' }}>
            
            <Field
                label='Title:'
                name='title'
                register={register}
                options={{
                    required: true
                }}
                placeholder='Enter title:'
            />

            <div style={{marginTop: '20px', marginBottom: '30px'}}>
                <label style={{fontSize: '20px'}}>Priority:</label>
                <Controller 
                    control={control}
                    name='priority'
                    render={({ field: { value, onChange }}) => (
                        <Selected 
                            data={['high', 'medium', 'low'].map(item => ({
                                value: item,
                                label: item
                            }))}
                            onChange={onChange}
							value={value || ''}
                        />
                    )}
                />
            </div>

            <div style={{marginTop: '20px', marginBottom: '25px'}}>
                <label style={{fontSize: '20px'}}>End date of the task:</label>
                <Controller
                    control={control}
                    name='dataEnd'
                    render={({ field: {value, onChange}}) => (
                        <SingleDayCalendar
                            onChange={onChange}
                            value={value || ''}
                        />
                    )}
                />
            </div>

            <BigField
                label='Description:'
                name='description'
                register={register}
                options={{
                    required: true
                }}
                placeholder='Enter description:'
            /> 
            
            <Button 
                type='submit'
                disabled={isPending}
                style={{ marginTop: '24px' }}
            >
                {existsId ? 'Update' : 'Create'}
            </Button>
        </form>
    )
}