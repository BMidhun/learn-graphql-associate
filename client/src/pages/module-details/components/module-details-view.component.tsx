import {Divider, Typography} from 'antd';

const {Title, Text} = Typography;

function ModuleDetailsViewComponent() {
  return (
    <div style={{width:"70%", margin:"auto"}}>
        <Title level={4}>Module Title</Title>
        <Divider></Divider>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iure ut tempora. Reiciendis quae at hic mollitia illum velit eveniet fuga beatae assumenda, a minima ipsum esse ipsa. Culpa, harum!
        </Text>
    </div>
  )
}

export default ModuleDetailsViewComponent