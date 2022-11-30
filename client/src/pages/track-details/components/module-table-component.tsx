import { Table } from 'antd';
import Title from 'antd/es/typography/Title';
import { IModule } from '../../../interface';
import { convertToMinutes } from '../../../utils';

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
      title: 'Duration in seconds',
      dataIndex: 'durationInSeconds',
      render:(duration:number) => convertToMinutes(duration)
    },
  ];

function ModuleTableComponent({modules}:IProps) {


  return (
    <div>
         <Title level={5}>Modules</Title>
         <Table dataSource={modules} columns={columns} pagination={false} rowKey={(record:IModule) => record.id} size="small"/>
    </div>
   
  )
}

export default ModuleTableComponent