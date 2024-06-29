import { FormProvider, useForm } from "react-hook-form"
import { useUsers } from "./useUsers"
import Layout from "../../../layout/Layout"
import { Heading } from "../../../ui/Heading"
import AdminTable from "../../../ui/admin-table/users/AdminTable"
import { BunForm } from "./BunForm"

const ListUsers = () => {
    const { isLoading, data } = useUsers()
    const methods = useForm()

    return (
        <Layout>
            <Heading title='Users' />
            <FormProvider {...methods}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '48px' }}>
                    <AdminTable 
                        tableItems={data || []}
                        headerItems={['Email', 'Date register']}
                        isLoading={isLoading}
                    />
                    <BunForm />
                </div>
            </FormProvider>
        </Layout>
    )
}
export default ListUsers