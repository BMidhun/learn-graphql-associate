import { Avatar, Button, Col, Row, Space, Typography } from 'antd'
import { EyeOutlined, BookOutlined, ClockCircleOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;

function TrackDataComponent() {
    return (
        <Row gutter={[16, 16]} align="middle" justify={"space-between"}>
            <Col span={4}>
                <Paragraph><EyeOutlined /> Number of Views</Paragraph>
                <Paragraph><BookOutlined /> Modules Length</Paragraph>
                <Paragraph><ClockCircleOutlined /> Duration</Paragraph>
            </Col>
            <Col span={4}>
                <Space direction="vertical">
                    <Avatar src="https://joeschmoe.io/api/v1/cat" size={40} />
                    <Paragraph>Author Name</Paragraph>
                </Space>
            </Col>
            <Col span={4}>
                <Button type="primary">Start Track</Button>
            </Col>
        </Row>
    )
}

export default TrackDataComponent