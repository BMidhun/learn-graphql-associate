import { Alert, Layout, Spin } from 'antd'
import { ReactNode } from 'react';

const { Content } = Layout;

interface IProps<T> {
    data: T,
    loading: boolean,
    error: string | undefined,
    children: ReactNode
}

function renderContent<T>(data: T, loading: boolean, error: string,children:ReactNode) {
    if (loading)
        <Spin size='large' />

    if (error)
        return <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
        />

    if (!data)
        <Alert
            message="Nothing To Display"
            description="No data was returned from the server"
            type="info"
            showIcon
        />

    if(data)
        return children;
}

function QueryResult<T>({ data, loading, error="", children }: IProps<T>) {


    return (
        <Content>
            {
                renderContent(data,loading,error,children)
            }
        </Content>
    )
}

export default QueryResult