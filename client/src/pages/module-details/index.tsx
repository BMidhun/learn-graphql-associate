import { Col, Divider, Row, Space } from 'antd'
import ModuleDetailsViewComponent from './components/module-details-view.component';
import ModuleListComponent from './components/module-list/module-list.component';
import ModulePlayerComponent from './components/module-player.component';


function ModuleDetails() {

  
  return (
    <Space direction='vertical' size={"middle"} style={{width:"100%"}}>
        <Row gutter={16} style={{background:"black", padding:"40px"}}>
            <Col span={18}>
                <ModulePlayerComponent />
            </Col>
            <Col span={6}>
                <ModuleListComponent />
            </Col>
        </Row>
        <Divider></Divider>
        <ModuleDetailsViewComponent />
    </Space>
  )
}

export default ModuleDetails