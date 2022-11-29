import {Divider, Typography} from "antd";

const {Title, Text} = Typography

function TrackDescriptionComponent() {
  return (
    <div>
        <Title level={5}>Track Description</Title>
        <Divider />
        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus dolore quod officia perspiciatis dolorum adipisci cum sapiente optio ducimus ad esse illum temporibus molestias est, molestiae quia ipsam quaerat unde!</Text>
    </div>
  )
}

export default TrackDescriptionComponent