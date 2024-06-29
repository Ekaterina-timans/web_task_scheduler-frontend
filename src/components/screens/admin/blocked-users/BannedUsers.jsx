import { FormProvider, useForm } from "react-hook-form"
import Layout from "../../../layout/Layout"
import { Heading } from "../../../ui/Heading"
import Table from "../../../ui/admin-table/users-banned/Table"
import { FormBlocking } from "./FormBlocking"
import { useUsersBanned } from "./hooks/useUsersBanned"

const BannedUsers = () => {
    const { isLoading, data } = useUsersBanned()
    const methods = useForm()

    return (
        <Layout>
            <Heading title='Banned users' />
            <FormProvider {...methods}>
                <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '48px' }}>
                    <Table 
                        tableItems={data || []}
                        headerItems={['Email', 'Start date of the ban', 'End date of the ban']}
                        isLoading={isLoading}
                    />
                    <FormBlocking />
                </div>
            </FormProvider>
        </Layout>
    )
}
export default BannedUsers