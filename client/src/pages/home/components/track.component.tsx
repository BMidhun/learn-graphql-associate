import { Avatar, Card, Typography, Layout, Space, Divider } from 'antd'
import { ITrack } from '../../../interface';

const { Content } = Layout;
const { Text } = Typography;
const {Meta} = Card;

interface IProps {
    track: ITrack,
    onTrackSelect: (id:string) => void
}

function TrackComponent(props:IProps) {

    const {track:{author:{name:authorName,photo}, id,length,modulesCount,thumbnail,title},onTrackSelect} = props

    return (
        <Card style={{ width: 400 }} cover={<img src={thumbnail} alt="image not available" height={250}></img>} hoverable key={id} onClick={() => onTrackSelect(id)}>
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
        </Card>
    )
}

export default TrackComponent