import React from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: '이름',
    dataIndex: 'name',
    width: '30%',
    align: 'center',
  },
  {
    title: '나이',
    dataIndex: 'age',
    width: '30%',
    align: 'center',
  },
  {
    title: '주소',
    dataIndex: 'addr',
    width: '30%',
    align: 'center',
  }
]

const OutputTodo = ({ data, setCheckedItem, DelTodo }) => {
  console.log('OutputTodo Component');
  console.log(data.length);

  // antd code
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setCheckedItem(selectedRowKeys);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div style={{ border: "1px solid skyblue", margin: '30px 20px 20px 20px' }}>
      <Table
        rowKey={data => data.id}
        rowSelection={{ type: "radio", ...rowSelection }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Button
        type="primary"
        htmlType="button"
        style={{ margin: '20px 20px 20px 20px' }}
        onClick={DelTodo}
      >삭제</Button>
    </div>
  )
}

export default OutputTodo;