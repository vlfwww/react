import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  useMemo,
  useCallback,
} from "react";

// 1. Сделайте счётчик от 1 до 5. Блокируйте кнопку, если предел достигнут. Пределы: 10, -10
// function App15() {
//     // const [count, setCount] = useState(0);
//     // const [able1, setAble1] = useState(false);
//     // const [able2, setAble2] = useState(false);
//     // const buttonRef = useRef(null);

//     // useEffect(() => {
//     //     if (count >= 5) {
//     //         setAble1(true);
//     //     }
//     //     else if (count <= -5){
//     //         setAble2(true)
//     //     }
//     //      else {
//     //         setAble1(false);
//     //         setAble2(false);
//     //     }
//     // }, [count]);

//     // return (
//     //     <div>
//     //         <h1>{count}</h1>
//     //         <button
//     //             ref={buttonRef}
//     //             onClick={() => setCount(count + 1)}
//     //             disabled={able1}
//     //         >
//     //             +
//     //         </button>
//     //         <button
//     //             ref={buttonRef}
//     //             onClick={() => setCount(count - 1)}
//     //             disabled={able2}
//     //         >
//     //             -
//     //         </button>
//     //     </div>
//     // );

// }

// export default App15;

//  2. При вводе в поле снизу отображаются подходящие имена из массива. useReducer

// function reducer(int,obj){
//     switch(obj.act){
//         case 'change': {
//             return obj.value;
//         }
//         default: return int;
//     }
// }

// function App15() {
//     const arr = ['nika','anya','ilya','vika'];
//     const [inp,setInp] = useReducer(reducer,'');
//     return (
//         <div>
//             <input type="text" onChange={(e)=>setInp({act:'change',value:e.target.value})}/>
//             {arr.filter((el)=>el.startsWith(inp)).map((el)=><p>{el}</p>)}
//         </div>
//     )

// }

// export default App15;

//  3. При отображении страницы запускается расчёт факториал по вводимому
//  значениювполедляввода.Используйтемемоизацию.

// function reducer(int,obj){
//     switch(obj.act){
//         case 'change': {
//             return obj.value;
//         }
//         default: return int;
//     }
// }

// function App15() {
//     const [inp,setInp] = useReducer(reducer,0);
//     const fact = useMemo(()=>{
//         let rez = 1;
//         for(let i=1;i<=+inp;i++){
//             rez*=i;
//         }
//         return rez
//     })
//     return (
//         <div>
//             <input type="number" onChange={(e)=>setInp({act:'change',value:e.target.value})}/>
//             <h1>{fact}</h1>
//         </div>
//     )

// }

// export default App15;

//  4. Создайте простейший калькулятор с кнопками операций. Мемоизируйте
//  обработчики. useState, useCallback

// function App15() {
//    const [inp1,setInp1] = useState(0);
//    const [inp2,setInp2] = useState(0);
//    const [rez,setRez] = useState(0);
//    const plus = useCallback(()=>setRez(+inp1 + +inp2));
//    const min = useCallback(()=>setRez(+inp1 - +inp2));
//    const mult =  useCallback(()=>setRez(+inp1 * +inp2));
//    const div =  useCallback(()=>setRez(+inp1 / +inp2));
//     return (
//         <div>
//            <input type="number" onChange={(e)=>setInp1(e.target.value)} />
//            <input type="number" onChange={(e)=>setInp2(e.target.value)} />
//            <button onClick={plus}>+</button>
//            <button onClick={min}>-</button>
//            <button onClick={mult}>*</button>
//            <button onClick={div}>/</button>
//            <h1>{rez}</h1>
//         </div>
//     )

// }

// export default App15;

//  5. Форма добавления заметки. У каждой — кнопка «Редактировать» и «Сохранить».
//  Заметки хранитьвмассивеобъектов

// function App15() {
//     const [tasks, setTasks] = useState([]);
//     const [input, setInput] = useState('');
//     const [editInput, setEditInput] = useState('');
//     const [editIndex, setEditIndex] = useState(null);

//     const addTask = () => {
//         if (input.trim() === '') return;
//         setTasks(prev => [...prev,
//             { key: tasks.length + 1, text: input }
//         ]);
//         setInput('');
//     };

//     const startEdit = (index) => {
//         setEditIndex(index);
//         setEditInput(tasks[index].text);
//     };

//     const saveEdit = () => {
//         if (editIndex === null) return;
//         setTasks(prev =>
//             prev.map((task, index) =>
//                 index === editIndex ? { ...task, text: editInput } : task
//             )
//         );
//         setEditIndex(null);
//         setEditInput('');
//     };

//     return (
//         <div>
//             <h1>Заметки</h1>
//             {tasks.map((task, index) => (
//                 <div key={task.key}>
//                     <p>{task.key} - {task.text}</p>
//                     <input
//                         type="text"
//                         value={editIndex === index ? editInput : ''}
//                         onChange={(e) => setEditInput(e.target.value)}
//                         disabled={editIndex !== index}
//                     />
//                     <button onClick={() => startEdit(index)}>Редактировать</button>
//                     <button onClick={saveEdit} disabled={editIndex !== index}>Сохранить</button>
//                 </div>
//             ))}
//             <br />
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />
//             <button onClick={addTask}>Добавить</button>
//         </div>
//     );
// }

// export default App15;

//  6. Сделайте заголовок с числом и кнопки: «Старт», «Стоп», «Сброс». Управляйте
//  числомкаксекундомером.

// function reducer(state, action) {
//     switch (action.type) {
//         case 'START':
//             return { ...state, isRunning: true };
//         case 'STOP':
//             return { ...state, isRunning: false };
//         case 'RESET':
//             return { count: 0, isRunning: false };
//         case 'INCREMENT':
//             return { ...state, count: state.count + 1 };
//         default:
//             return state;
//     }
// }

// const App15 = () => {
//     const [state, dispatch] = useReducer(reducer, { count: 0, isRunning: false });

//     useEffect(() => {
//         let interval = null;
//         if (state.isRunning) {
//             interval = setInterval(() => {
//                 dispatch({ type: 'INCREMENT' });
//             }, 1000);
//         } else if (!state.isRunning && state.count !== 0) {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [state.isRunning, state.count]);

//     return (
//         <div>
//             <h1>{state.count}</h1>
//             <button onClick={() => dispatch({ type: 'START' })}>Старт</button>
//             <button onClick={() => dispatch({ type: 'STOP' })}>Стоп</button>
//             <button onClick={() => dispatch({ type: 'RESET' })}>Сброс</button>
//         </div>
//     );
// };

// export default App15;

//  7. Отобразите список из 50 элементов по 10 на страницу. Массив из 50 элементов
//  хранится в items 10 элементов. Добавьте пагигацию на страницу. Где для каждойкнопки свои
//  Массив: const items = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `Элемент ${i + 1}`,
// description: `Описание элемента ${i + 1}` }));

// const App15 = () => {
//   const items = Array.from({ length: 50 }, (_, i) => ({
//     id: i + 1,
//     name: `Элемент ${i + 1}`,
//     description: `Описание элемента ${i + 1}`,
//   }));

//   const [filteredItems, setFilteredItems] = useState(
//     items.filter((el) => el.id <= 10)
//   );

//   const f1 = () => setFilteredItems(items.filter((el) => el.id <= 10));
//   const f2 = () =>
//     setFilteredItems(items.filter((el) => el.id > 10 && el.id <= 20));
//   const f3 = () =>
//     setFilteredItems(items.filter((el) => el.id > 20 && el.id <= 30));
//   const f4 = () =>
//     setFilteredItems(items.filter((el) => el.id > 30 && el.id <= 40));
//   const f5 = () =>
//     setFilteredItems(items.filter((el) => el.id > 40 && el.id <= 50));

//   return (
//     <div>
//       {filteredItems.map((el) => (
//         <p key={el.id}>
//           {el.id} - {el.name} - {el.description}
//         </p>
//       ))}
//       <button onClick={f1}>1-10</button>
//       <button onClick={f2}>10-20</button>
//       <button onClick={f3}>20-30</button>
//       <button onClick={f4}>30-40</button>
//       <button onClick={f5}>40-50</button>
//     </div>
//   );
// };

// export default App15;

// 1. Создайте слайдер с кнопками «Вперёд» и «Назад», отображающий одно изображение за раз.
// Хуки: useState, useCallback, useMemo
import img1 from '../1.jpg';
import img2 from '../2.jpg';
import img3 from '../3.jpg';

const App15 = () => {
  const arr = [img1,img2,img3];
  let ind = 0;
  const [img,setImg] = useState(arr[0]);
  const plus = useCallback(()=>{
    for(let i=0;i<arr.length;i++){
      if(arr[i]===img) ind = i;
    }
    setImg(arr[ind+1])
  })
  return (
    <div>
      <div>{img}</div>
     <button onClick={plus}>Вперед</button>
     <button>Назад</button>
    </div>
  );
};

export default App15;

// 2. Постепенно выводите текст <"Hello, world!" - это классическое приветствие, которое используется в программировании для обозначения начала новой программы или проекта> по одной букве, как печатная машинка.
// Хуки: useState, useEffect