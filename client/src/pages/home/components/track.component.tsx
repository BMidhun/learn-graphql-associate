import { Avatar, Card, Typography, Layout, Space, Divider } from 'antd'
import { ITrack } from '../../../interface';

const { Content } = Layout;
const { Title, Text } = Typography;
const {Meta} = Card;

interface IProps {
    track: ITrack
}

function TrackComponent(props:IProps) {

    const {track:{author:{name:authorName,photo}, id,length,modulesCount,thumbnail,title}} = props

    return (
        <Card style={{ width: 400 }} cover={<img src={thumbnail} alt="image not available" height={250}></img>} hoverable key={id}>
            <Meta title={title} description={
                <Content>
                <Space align='start'>
                <Avatar src={photo} size={50} />
                    <Space direction="vertical">
                        <Text strong>{authorName}</Text>
                        <Space >
                        <Text type='secondary'>{modulesCount} modules</Text>
                        <Text type='secondary'>{length} mins</Text>
                        </Space>
    
                    </Space>
                </Space>
          
                </Content> 
            }/>
            {/* <Title level={4}>Astro Kitty</Title>
            <Divider></Divider>
            <Content>
            <Space align='start'>
            <Avatar src="https://joeschmoe.io/api/v1/random" size={50} />
                <Space direction="vertical">
                    <Text strong>Midhun Baby</Text>
                    <Space >
                    <Text type='secondary'>6 modules</Text>
                    <Text type='secondary'>11 min</Text>
                    </Space>

                </Space>
            </Space>
      
            </Content> */}
        </Card>
    )
}

export default TrackComponent