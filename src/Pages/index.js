import React, { useEffect, useState } from 'react';
import InputTodo from '../Components/InputTodo';
import OutputTodo from '../Components/OutputTodo';

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
  });
  const [todoItem, setTodoItem] = useState([]);
  const [checkedItem, setCheckedItem] = useState('');
  const locals = ['서울', '부산', '제주'];

  const AddTodo = () => {
    if (!inputText.name) {
      setInputBool({ name: false, age: true, addr: true });
    } else if (!inputText.age) {
      setInputBool({ name: true, age: false, addr: true });
    } else if (!inputText.addr) {
      setInputBool({ name: true, age: true, addr: false });
    } else if (todoItem.map((data) => (data.name)).includes(inputText.name)) {
      alert('중복된 이름 입니다.');
    } else {
      setTodoItem([
        ...todoItem,
        {
          id: todoItem.length,
          name: inputText.name,
          age: inputText.age,
          addr: inputText.addr
        }
      ]);
      // setListSort(...listSort, todoItem.length);
      setInputText({ name: '', age: '', addr: '' });
      setInputBool({ name: true, age: true, addr: true });
    }
    // console.log(todoItem.includes(inputText));
    // console.log(todoItem.map((data) => (data.name)).includes(inputText.name));
    // console.log(todoItem.map((data) => (data.name)));
    // console.log(!inputText.name);
    console.log(todoItem);
  }

  const DelTodo = () => {
    // console.log('DelTodo');
    // console.log(checkedItem);
    setTodoItem(
      todoItem.filter(
        check => !checkedItem.includes(check.id)
      )
    );
    setCheckedItem('');
  }

  useEffect(() => {
    // console.log('index useEffect');
    // console.log(todoItem);
    todoItem.map((todo, i) => (
      todo.id = i
    ));
    console.log(checkedItem);
  }, [todoItem, checkedItem]);

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
        checkedItem={checkedItem}
        setTodoItem={setTodoItem}
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