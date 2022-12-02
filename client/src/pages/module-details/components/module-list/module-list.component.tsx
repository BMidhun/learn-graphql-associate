import { PlayCircleOutlined } from '@ant-design/icons';
import { Col, Divider, List, Row, Typography } from 'antd'
import { IModule } from '../../../../interface';
import { convertToMinutes } from '../../../../utils';
import style from "./style.module.css";

interface IProps{
  modules: IModule[] | undefined,
  currentModuleId: string | undefined,
  trackTitle: string | undefined,
  selectModule: (id:string) => void
}

function ModuleListComponent( {modules,currentModuleId, trackTitle,selectModule}: IProps) {
  if(!modules)
    return null

  return (
    <>
    <Typography.Title level={5} style={{color:"#eee", textAlign:"center"}}>{trackTitle}</Typography.Title>
    <List
      bordered
      dataSource={modules}
      className={style.moduleList}
      renderItem={(item) => (
        <List.Item key={item.id} className={item.id === currentModuleId ? style.moduleListSelectedItem  : style.moduleListItem}>
          <div className={style.moduleListItemContainer}>
            <PlayCircleOutlined size={100} style={{cursor:"pointer"}} onClick={() => selectModule(item.id)}/>
            <Typography.Title level={5} ellipsis={true} style={{color:"#eee"}}>{item.title}</Typography.Title>
            <Typography.Text style={{color:"#eee"}}>{convertToMinutes(item.durationInSeconds)}</Typography.Text>
          </div>
        </List.Item>
      )}
    />
    </>
  )
}

export default ModuleListComponent