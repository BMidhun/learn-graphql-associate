import { Table } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';

const dataSource = [
    {
      key: '1',
      title: 'Module - 1',
      length: 32,
    },
    {
      key: '2',
      title: 'Module - 2',
      length: 42,
    },
  ];
  
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

function ModuleTableComponent() {
  return (
    <div>
         <Title level={5}>Modules</Title>
         <Table dataSource={dataSource} columns={columns} pagination={false}/>
    </div>
   
  )
}

export default ModuleTableComponent