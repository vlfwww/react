import React, { use, useState } from 'react';
function App4(){ 

// Переключение отображения текста. Кнопка переключает состояние отображения текста (показать/скрыть).
// По умолчанию текст скрыт
// Клик по кнопке — текст отображается
// Повторный клик — текст снова скрыт

// const [show,setShow]=useState(false);
// const display =()=>show?setShow(false):setShow(true)
// return (
//     <div>
//         <p>{show?'Text':null}</p>
//         <button onClick={display} >{show?'Hide':'Show'}</button>
//     </div>
// )

// Поле ввода сохраняет введённый текст и отображает его ниже в h1.
// Ввод "hello" — отображается в h1 "hello"
// Ввод "12345" — отображается в h1 "12345"

// const [text,setText]=useState('');
// const f =(e)=>setText(e.target.value)
// return (
//     <div>
//         <input type="text" onChange={f}/>
//         <h1>{text}</h1>
//     </div>
// )

// Пользователь вводит текст задачи и нажимает кнопку "Добавить". Задача добавляется в список.
// Ввод "Сходить в магазин" → клик → список содержит 1 элемент
// Ввод "Позвонить маме" → клик → список содержит 2 элемента

// const [tasks, setTasks] = useState([]); 
// const [task, setTask] = useState('');

// const save = (e) => {
//   setTask(e.target.value);
// };

// const push = () => {
//   if (task.trim()) {
//     setTasks((prevTasks) => [...prevTasks, task]); 
//     setTask('');
//   }
// };

// return (
//   <div>
//     <input type="text" value={task} onChange={save} />
//     <button onClick={push}>Добавить</button>
//     <div>
//       {tasks.map((el, index) => (
//         <p key={index}>{el}</p> 
//       ))}
//     </div>
//   </div>
// );

// Кнопка переключает тип поля ввода между password и text.
// По умолчанию — пароль скрыт
// Клик — пароль отображается
// Второй клик — снова скрыт

// const [inp,setInp] = useState(false);

// const change = () => inp?setInp(false):setInp(true);

// return (
//     <div>
//         <input type={inp?'text':'password'} onClick={change} />
//     </div>
// )

// Кнопка с иконкой "лайк" увеличивает счётчик лайков.
// Начальное значение — 0
// Один клик — 1
// Три клика — 3
// const [like,setLike] = useState(0);
// const f = () =>setLike(like+1);
// return (
//     <div>
//         <button onClick={f}>Лайк</button>
//         <p>{like} лайк(ов/a)</p>
//     </div>
// )

// После заполнения инпута и клика на кнопку отображается "Отправлено: [значение]".
// Ввод "email@example.com" → клик → отображается "Отправлено: email@example.com"
// Очистить и ввести "hello@world.com" → клик → "Отправлено: hello@world.com"
// const [email,setEmail] = useState('');
// const [view,setView] = useState(false);
// const change = (e)=>setEmail(e.target.value);
// const send =()=>setView(true);
// return (
//     <div>
//         <input type="text" onChange={change}/>
//         <button onClick={send}>Send</button>
//         <h1>{view?`Отправлено:${email}`:null}</h1>
//     </div>
// )

}
    export default App4;