import { FormProvider, useForm } from "react-hook-form"
import Layout from "../../layout/Layout"
import { Heading } from "../../ui/Heading"
import { TaskList } from "./TaskList"
import { TaskForm } from "./TaskForm"

const Tasks = () => {

    const methods = useForm()

    return (
        <Layout>
            <Heading title='Tasks' />
            <FormProvider {...methods}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '48px' }}>
                    <TaskList />
                    <TaskForm />
                </div>
            </FormProvider>
        </Layout>
    )
}

export default Tasks