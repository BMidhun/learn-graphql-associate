import { Table } from 'antd';
import Title from 'antd/es/typography/Title';
import { IModule } from '../../../interface';

interface IProps {
  modules: IModule[]
}
  
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Length',
      dataIndex: 'length',
      key: 'length',
    },
  ];

function ModuleTableComponent({modules}:IProps) {

  console.log(modules);

  return (
    <div>
         <Title level={5}>Modules</Title>
         <Table dataSource={modules} columns={columns} pagination={false} rowKey={(record:IModule) => record.id} size="small"/>
    </div>
   
  )
}

export default ModuleTableComponent