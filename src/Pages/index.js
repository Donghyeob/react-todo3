import React, { useState } from 'react';
import InputTodo from '../Components/InputTodo';
import OutputTodo from '../Components/OutputTodo';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [inputText, setInputText] = useState({
    name: '',
    age: '',
    addr: ''
  });
  const [inputBool, setInputBool] = useState({
    name: true,
    age: true,
    addr: true,
  })
  const [todoItem, setTodoItem] = useState([]);
  const [checkedItem, setCheckedItem] = useState('');
  const locals = ['서울', '부산', '제주'];

  const AddTodo = () => {
    if (!inputText.name) {
      setInputBool({ name: false, age: true, addr: true })
    } else if (!inputText.age) {
      setInputBool({ name: true, age: false, addr: true })
    } else if (!inputText.addr) {
      setInputBool({ name: true, age: true, addr: false })
    } else if (todoItem.map((data) => (data.name)).includes(inputText.name)) {
      alert('중복된 이름 입니다.');
    } else {
      setTodoItem([
        ...todoItem,
        {
          id: uuidv4(),
          name: inputText.name,
          age: inputText.age,
          addr: inputText.addr
        }
      ]);
      setInputText({ name: '', age: '', addr: '' });
      setInputBool({ name: true, age: true, addr: true });
    }
    // console.log(todoItem.includes(inputText));
    // console.log(todoItem.map((data) => (data.name)).includes(inputText.name));
    // console.log(todoItem.map((data) => (data.name)));
    // console.log(!inputText.name);
  }

  const DelTodo = () => {
    console.log('DelTodo');
    console.log(checkedItem);
    setTodoItem(
      todoItem.filter(
        check => !checkedItem.includes(check.id)
      )
    );
    setCheckedItem('');
  }

  return (
    <>
      <InputTodo
        AddTodo={AddTodo}
        locals={locals}
        inputText={inputText}
        inputBool={inputBool}
        setInputText={setInputText}
      />
      <OutputTodo
        data={todoItem}
        setCheckedItem={setCheckedItem}
        DelTodo={DelTodo}
      />
    </>
  )
}

export default Home;

// 다음과제
// 1. input창 바로 밑에 알림 텍스트 띄우기 alert 말고
// 2. 나이, 주소 => select box로 변경
// 3. sorting 하기 - index로?
// 4. list up-down