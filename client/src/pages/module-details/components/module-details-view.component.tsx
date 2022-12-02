import {Divider, Typography} from 'antd';

const {Title, Text} = Typography;

interface IProps {
  title:string | undefined,
  content:string| undefined
}

function ModuleDetailsViewComponent({title,content}:IProps) {
  if(!title || !content)
    return null

  return (
    <div style={{width:"60%", margin:"auto"}}>
        <Title level={4}>{title}</Title>
        <Divider></Divider>
        <Text>
        {content.split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;
        })}
        </Text>
    </div>
  )
}

export default ModuleDetailsViewComponent