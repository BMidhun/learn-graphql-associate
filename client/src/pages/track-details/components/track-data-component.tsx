import { Avatar, Button, Col, Row, Space, Typography } from 'antd'
import { EyeOutlined, BookOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { IAuthor } from '../../../interface';
import { convertToMinutes } from '../../../utils';
const { Paragraph } = Typography;

interface IProps {
    views: number,
    noOfModules: number,
    duration: number,
    author: IAuthor,
    onStartTrack: () => void
}

function TrackDataComponent({views,noOfModules,duration,author,onStartTrack}:IProps) {
    return (
        <Row gutter={[16, 16]} align="middle" justify={"space-between"}>
            <Col span={4}>
                <Paragraph><EyeOutlined />Views: {views} </Paragraph>
                <Paragraph><BookOutlined />Number of Modules: {noOfModules}</Paragraph>
                <Paragraph><ClockCircleOutlined />Total Duration: {convertToMinutes(duration)} </Paragraph>
            </Col>
            <Col span={4}>
                <Space direction="vertical">
                    <Avatar src={author.photo} size={60} />
                    <Paragraph>{author.name}</Paragraph>
                </Space>
            </Col>
            <Col span={4}>
                <Button type="primary" onClick={onStartTrack}>Start Track</Button>
            </Col>
        </Row>
    )
}

export default TrackDataComponent