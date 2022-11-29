import {Divider, Typography} from "antd";

const {Title, Text} = Typography

interface IProps {
  description: string
}

function TrackDescriptionComponent({description}:IProps) {
  return (
    <div>
        <Title level={5}>Track Description</Title>
        <Divider />
        <Text>
          {description}
        </Text>
    </div>
  )
}

export default TrackDescriptionComponent