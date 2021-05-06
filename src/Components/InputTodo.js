import React from 'react';
import { Form, Input, Select, Button } from 'antd';

const InputTodo = ({ inputText, inputBool, locals, setInputText, AddTodo }) => {
  // console.log(inputBool);
  // console.log(locals);
  const { Option } = Select;

  // 데이터가 복잡할경우 문제가 될 수 있음
  const onChangeText = (e) => {
    const { value, name } = e.target;
    setInputText({ ...inputText, [name]: value });
  }

  const onChangeAddr = (value) => {
    setInputText({ ...inputText, addr: value });
  }

  const onChangeAge = (value) => {
    // console.log(value);
    const age = 2021 - value + 1;
    setInputText({ ...inputText, age: age })
  }

  return (
    <Form onFinish={AddTodo} style={{ padding: '20px 20px 0px 20px', border: '1px solid skyblue', margin: '20px' }}>
      <Form.Item label="이름">
        <Input
          name="name"
          onChange={onChangeText}
          value={inputText.name}
        // required
        />
        {!inputBool.name ? <div style={{ color: 'tomato' }}>이름을 입력하세요.</div> : ''}
      </Form.Item>
      <Form.Item label="나이">
        <Select
          name='age'
          onChange={onChangeAge}
          value={inputText.age}
        >
          {[...Array(2021 - 1920 + 1)].map((e, i) => (
            <Option key={i + 1920}>{i + 1920}년</Option>
          ))}
        </Select>
        {!inputBool.age ? <div style={{ color: 'tomato' }}>나이를 선택하세요.</div> : ''}
      </Form.Item>
      <Form.Item label="주소">
        <Select
          name='addr'
          onChange={onChangeAddr}
          value={inputText.addr}
        >
          {locals.map((local) => (
            <Option key={local} value={local}>{local}</Option>
          ))}
        </Select>
        {!inputBool.addr ? <div style={{ color: 'tomato' }}>주소를 선택하세요.</div> : ''}
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>추가</Button>
      </Form.Item>
    </Form>
  )
}

export default InputTodo;