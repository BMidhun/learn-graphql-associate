import { PlayCircleOutlined } from '@ant-design/icons';
import { Col, Divider, List, Row, Typography } from 'antd'
import { convertToMinutes } from '../../../../utils';
import style from "./style.module.css";

function ModuleListComponent() {
  return (
    <>
    <Typography.Title level={5} style={{color:"#eee"}}>Track Title</Typography.Title>
    <List
      bordered
      dataSource={[{
        title: "Module Title",
        durationInSeconds: 10
      },
    
      {
        title: "Module Title2",
        durationInSeconds: 10
      },
    
      {
        title: "Module Title3",
        durationInSeconds: 10
      },
      {
        title: "Module Title2",
        durationInSeconds: 10
      },
    
      {
        title: "Module Title3",
        durationInSeconds: 10
      },
      {
        title: "Module Title2",
        durationInSeconds: 10
      },
    
      {
        title: "Module Title3",
        durationInSeconds: 10
      },
      {
        title: "Module Title2",
        durationInSeconds: 10
      },
    
      {
        title: "Module Title3",
        durationInSeconds: 10
      }]}
      className={style.moduleList}
      renderItem={(item) => (
        <List.Item key={item.title} className={item.title === "Module Title" ? style.moduleListSelectedItem  : style.moduleListItem}>
          <div className={style.moduleListItemContainer}>
            <PlayCircleOutlined size={100} style={{cursor:"pointer"}}/>
            <Typography.Title level={5} style={{color:"#eee"}}>{item.title}</Typography.Title>
            <Typography.Text style={{color:"#eee"}}>{convertToMinutes(item.durationInSeconds)}</Typography.Text>
          </div>
        </List.Item>
      )}
    />
    </>
  )
}

export default ModuleListComponent