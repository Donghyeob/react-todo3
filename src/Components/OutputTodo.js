import React, { useEffect, useState } from 'react';
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

const OutputTodo = ({ data, setTodoItem, checkedItem, setCheckedItem, DelTodo }) => {
  // console.log('OutputTodo Component');
  // console.log(data.length);
  // console.log(...data);

  const [selectedRowKeys, setSelectedRowKeys] = useState();

  const listUp = () => {
    if (checkedItem - 1 < 0) {
      console.log('첫번째 항목입니다.');
    } else {
      // console.log(todoItem);
      const targetItem = data.filter(todo => todo.id === checkedItem[0]);
      // console.log(targetItem); 
      const resultItem = data.filter(todo => todo.id !== checkedItem[0]);
      // console.log(resultItem);
      resultItem.splice(checkedItem - 1, 0, targetItem[0]);
      setTodoItem(resultItem);
      // console.log(todoItem);
      setCheckedItem([checkedItem - 1]);
      // console.log(checkedItem);
    }
  }

  const listDown = () => {
    if (checkedItem[0] + 1 >= data.length) {
      console.log('마지막 항목입니다.');
    } else {
      // console.log(todoItem);
      const targetItem = data.filter(todo => todo.id === checkedItem[0]);
      // console.log(targetItem);
      const resultItem = data.filter(todo => todo.id !== checkedItem[0]);
      // console.log(resultItem);
      resultItem.splice(checkedItem + 1, 0, targetItem[0]);
      setTodoItem(resultItem);
      // console.log(todoItem);
      setCheckedItem([checkedItem[0] + 1]);
      // console.log(checkedItem);
    }
  }

  const onSelectChange = selectedRowKeys => {
    console.log(`selectedRowKey : ${selectedRowKeys}`);
    setSelectedRowKeys(selectedRowKeys);
    setCheckedItem(selectedRowKeys);
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  useEffect(() => {
    // console.log('Output useEffect');
    // console.log(checkedItem);
    // console.log(selectedRowKeys);
    setSelectedRowKeys(checkedItem);
  }, [checkedItem]);

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
      <Button
        type="primary"
        htmlType="button"
        style={{ margin: '20px 20px 20px 20px' }}
        onClick={listUp}
      >위</Button>
      <Button
        type="primary"
        htmlType="button"
        style={{ margin: '20px 20px 20px 20px' }}
        onClick={listDown}
      >아래</Button>
    </div>
  )
}

export default OutputTodo;