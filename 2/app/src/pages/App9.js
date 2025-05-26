import React, { use, useState, useEffect, useRef, useMemo, useCallback } from "react";
import axios from "axios";
function App9() {
  //  Счётчик с кнопками
  //  Создать простой счётчик, который увеличивается или уменьшается при нажатии на кнопки "Увеличить" и "Уменьшить".
  //  Использовать: useState

  // const [value,setValue] = useState(0);
  // const plus = ()=>setValue(value+1);
  // const minus = ()=>setValue(value-1);

  // return (
  //     <div>
  //         <h1>{value}</h1>
  //         <button onClick={plus}>Увеличить</button>
  //         <button onClick={minus}>Уменьшить</button>
  //     </div>
  // )

  // Поле ввода с отображением текста
  //  Создать поле ввода (input). Под ним отображать текущий введённый текст в реальном времени.
  //  Использовать: useState

  // const [value,setValue] = useState('');
  // const change =(e)=> setValue(e.target.value)

  // return (
  //     <div>
  //         <input type="text" onChange={change}/>
  //         <h1>{value}</h1>
  //     </div>
  // )

  // Переключатель "Вкл/Выкл"
  //  Создать переключатель (toggle), который меняет состояние между "Вкл" и "Выкл". В зависимости от состояния показывать или скрывать заголовок на странице.
  //  Использовать: useState

  // const [view,setView] = useState(false);
  // const h = useRef();
  // const toggle =()=>{
  //     if(view){
  //         setView(false);
  //         h.current.style.display ='block';
  //     }
  //     else{
  //         setView(true);
  //         h.current.style.display ='none';
  //     }
  // }

  // return (
  //     <div>
  //         <h1 ref={h}>hello</h1>
  //         <button onClick={toggle}>{view? 'Вкл':'Выкл' }</button>
  //     </div>
  // )

  // Список задач с добавлением
  //  Сделать список дел, в который можно добавлять новые задачи через текстовое поле и кнопку "Добавить". При добавлении задача появляется в списке.
  //  Использовать: useState

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

  // Форма для сложения двух чисел
  //  Создать форму с двумя полями для ввода чисел и кнопкой. После ввода чисел выводить их сумму под формой.
  //  Использовать: useState

  // const [sum,setSum] = useState(0);
  // const [inp1,setInp1] = useState();
  // const [inp2,setInp2] = useState();
  // const change1 = (e)=>setInp1(e.target.value);
  // const change2 = (e)=>setInp2(e.target.value);
  // const plus = ()=> {
  //     const s = +inp1+ +inp2;
  //     setSum(s);
  // }

  // return (
  //     <div>
  //         <input type="number" onChange={change1}/>
  //         <input type="number" onChange={change2} />
  //         <button onClick={plus}>+</button>
  //         <h1>{sum}</h1>
  //     </div>
  // )

  // Список с возможностью удаления
  //  Создать список элементов, каждый из которых можно удалить нажатием кнопки рядом с ним.
  //  Использовать: useState

  //   const [value, setValue] = useState("");
  //   const [arr, setArr] = useState([]);
  //   const change = (e) => {
  //     setValue(e.target.value);
  //   };
  //   const add = () => {
  //     setArr([...arr, value]);
  //   };
  //   const del = (e) => {
  //     setArr(arr.filter((el) => e.target.id !== el));
  //   };

  //   return (
  //     <div>
  //       <input type="text" onChange={change} />
  //       <button onClick={add}>Добавить</button>
  //       {arr.map((el) => (
  //         <p>
  //           {el}
  //           <button id={el} onClick={del}>
  //             Удалить
  //           </button>
  //         </p>
  //       ))}
  //     </div>
  //   );

  // Очистка поля после отправки
  //  Сделать поле ввода и кнопку "Отправить". После нажатия кнопки поле должно очищаться.
  //  Использовать: useState

  // const [val,setValue] = useState('')
  // const change = (e)=>setValue(e.target.value)
  // const send = ()=>{
  //     setValue('');
  // }

  //   return (
  //     <div>
  //         <input type="text" value = {val} onChange={change}/>
  //         <button onClick={send}>Отправить</button>
  //     </div>
  //   )

  // Фильтрация списка по тексту
  //  Создать список элементов и поле ввода для фильтрации. По мере ввода текста отображать только те элементы, которые содержат этот текст.
  //  Использовать: useState
  // const [value, setValue] = useState('');
  // const [arr] = useState(['aaa', 'hh', 'wwssa', 'ttech', 'hwhw']);

  // const change = (e) => {
  //   setValue(e.target.value);
  // };

  // return (
  //   <div>
  //     <input type="text" onChange={change} />
  //     <div>
  //       {arr
  //         .filter((el) => el.includes(value))
  //         .map((el, index) => (
  //           <p key={index}>{el}</p> 
  //         ))}
  //     </div>
  //   </div>
  // );

  // Переключение между вкладками
  //  Сделать несколько вкладок (например, "Вкладка 1", "Вкладка 2" и т.д.). При клике по вкладке показывать соответствующий контент.
  //  Использовать: useState

  // const [value,setValue] = useState('')
  // const f1 = ()=>setValue('1')
  // const f2 = ()=>setValue('2')
  // const f3 = ()=>setValue('3')

  //   return (
  //     <div>
  //         <button onClick={f1}>Вкладка 1</button>
  //         <button onClick={f2}>Вкладка 2</button>
  //         <button onClick={f3}>Вкладка 3</button>
  //         <h1>{value}</h1>
  //     </div>
  //   )

  // Изменение цвета блока
  //  Создать блок с цветом. При нажатии на кнопку цвет блока должен меняться (например, циклично менять несколько цветов).
  //  Использовать: useState

  // const [color,setColor] = useState('#5555')
  // const ch = ()=>{
  //     const c = `#${Math.round(Math.random()*1000)}`;
  //     setColor(c);
  // }

  //   return (
  //     <div>
  //         <div style={{backgroundColor:color}}>dddd</div>
  //         <button onClick={ch}>Change</button>
  //     </div>
  //   )

  // Управление модальным окном
  //  Сделать кнопку, по нажатию на которую появляется модальное окно. В модальном окне должна быть кнопка закрытия, которая скрывает окно.
  //  Использовать: useState

  //  const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);

  // return (
  //   <div>
  //     <button onClick={openModal}>Show</button>

  //     {isOpen && (
  //       <div style={{
  //         position: 'fixed',
  //         top: '0',
  //         left: '0',
  //         right: '0',
  //         bottom: '0',
  //         backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}>
  //         <div style={{
  //           backgroundColor: 'white',
  //           padding: '20px',
  //           borderRadius: '5px',
  //         }}>
  //           <h1>hello</h1>
  //           <button onClick={closeModal}>close</button>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );

  // Лог при монтировании
  //  При загрузке (первом рендере) компонента вывести сообщение в консоль.
  //  Использовать: useEffect

  // useEffect(()=>console.log('hello'),[])

  // Лог при изменении счётчика
  //  Создать счётчик с кнопками. Каждый раз, когда значение счётчика меняется, выводить новое значение в консоль.
  //  Использовать: useEffect, useState

// const [value,setValue] = useState(0);
// const plus = ()=>setValue(value+1);
// const minus = ()=>setValue(value-1);
// useEffect(()=>console.log(value),[value])
//   return (
//     <div>
//       <p>{value}</p>
//       <button onClick={plus}>+1</button>
//       <button onClick={minus}>-1</button>
//     </div>
//   )

  // Таймер обратного отсчёта
  //  Сделать таймер, который каждую секунду уменьшает число на 1 и обновляет отображение. После достижения нуля таймер останавливается.
  //  Использовать: useEffect, useState, setInterval

  // const [value,setValue] = useState(10);
  // useEffect(()=>{
  //   const interval = setInterval(()=>setValue(value-1),1000);
  //   if(value===0) return clearInterval(interval);
  // },[value])
  // return (
  //   <div>
  //     <p>{value}</p>
  //   </div>
  // )

  // Загрузка данных при загрузке компонента (имитация)
  //  При монтировании компонента симулировать загрузку данных с сервера (например, через setTimeout), после чего вывести полученные данные в компонент.
  //  Использовать: useEffect, fetch или setTimeout

// const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       const fetchedData = "Данные успешно загружены!";
//       setData(fetchedData);
//       setLoading(false);
//     }, 2000);
//   }, []);

//   if (loading) {
//     return <h1>Загрузка...</h1>;
//   }

//   return (
//     <div>
//       <h1>{data}</h1>
//     </div>
//   );

  // Калькулятор факториала с кешем
  //  Создать поле ввода числа и выводить его факториал. Использовать useMemo, чтобы не пересчитывать факториал при каждом рендере, если число не меняется.
  //  Использовать: useMemo, useState
//   const [value,setValue] = useState(0);
//  const rez = useMemo(()=>{
//     let a = 1;
//     for(let i=1;i<=value;i++){
//         a = a*i;
//     }
//     return a;
// })
//   const change = (e)=>setValue(e.target.value);
//   return (
//     <div>
//       <input type="number" onChange={change}/>
//       <h1>{rez}</h1>
//     </div>
//   )

  // Оптимизированная фильтрация списка
  //  Сделать фильтр списка элементов по тексту с оптимизацией вычислений через useMemo, чтобы не пересчитывать фильтр при каждом рендере без изменений.
  //  Использовать: useMemo, useState

  // const [value, setValue] = useState('');
  // const [arr] = useState(['aaa', 'hh', 'wwssa', 'ttech', 'hwhw']);

  // const filteredList = useMemo(() => {
  //   return arr.filter((el) => el.includes(value));
  // }, [value, arr]); 

  // const change = (e) => {
  //   setValue(e.target.value);
  // };

  // return (
  //   <div>
  //     <input type="text" onChange={change} />
  //     <div>
  //       {filteredList.map((el, index) => (
  //         <p key={index}>{el}</p>
  //       ))}
  //     </div>
  //   </div>
  // );

  // Подсчёт суммы чисел с мемоизацией
  //  Ввести несколько чисел и вывести их сумму, используя useMemo для оптимизации вычислений.
  //  Использовать: useMemo, useState

// const [inp1,setInp1] = useState(0)
// const [inp2,setInp2] = useState(0)
// const i1 = (e)=>setInp1(e.target.value)
// const i2 = (e)=>setInp2(e.target.value)
// const sum = useMemo(()=>+inp1 + +inp2)
//   return (
//     <div>
//       <input type="number" onChange={i1}/>
//       <input type="number" onChange={i2} />
//       <h1>{sum}</h1>
//     </div>
//   )

  // Вычисление числа Фибоначчи
  //  Создать поле ввода для числа n и выводить n-е число Фибоначчи, используя useMemo для мемоизации результата.
  //  Использовать: useMemo, useState

  // const [n, setN] = useState(0);

  // const fibonacci = useMemo(() => {
  //   const fib = (num) => {
  //     if (num <= 1) return num;
  //     return fib(num - 1) + fib(num - 2);
  //   };
  //   return fib(n);
  // }, [n]); 

  // const handleChange = (e) => {
  //   const value = parseInt(e.target.value);
  //   if (!isNaN(value)) {
  //     setN(value);
  //   }
  // };

  // return (
  //   <div>
  //     <input type="number" onChange={handleChange} />
  //     <h1>n-е число Фибоначчи: {fibonacci}</h1>
  //   </div>
  // );

  // Подсчёт кликов с отображением в заголовке
  //  Создать кнопку. При каждом клике считать количество нажатий с помощью useRef и отображать это число в заголовке страницы (document.title).
  //  Использовать: useRef

// const clickCount = useRef(0);

//   const handleClick = () => {
//     clickCount.current += 1; 
//     document.title = `Клики: ${clickCount.current}`; 
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );

  // Форма с валидацией и мемоизированной проверкой
  //  Сделать форму с полями. Добавить функцию проверки правильности ввода, которая мемоизируется с помощью useCallback.
  //  Использовать: useState, useCallback
  
  // const [value, setValue] = useState('');

  // const handleChange = (e) => setValue(e.target.value);

  // const validateEmail = useCallback(() => {
  //   return /^[A-Za-z]+@[a-z]+\.[a-z]{1,3}$/.test(value);
  // }, [value]); 

  // return (
  //   <div>
  //     <input type="text" onChange={handleChange} />
  //     <p>{validateEmail() ? 'Valid email' : 'Invalid email'}</p>
  //   </div>
  // );

  // Список с фильтром и подсчётом
  //  Сделать список с фильтром и вывести количество отфильтрованных элементов. Оптимизировать вычисления с помощью useMemo и мемоизировать функции через useCallback.
  //  Использовать: useState, useMemo, useCallback

  // const [filter, setFilter] = useState('');
  // const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  // const handleChange = useCallback((e) => {
  //   setFilter(e.target.value);
  // }, []);

  // const filteredItems = useMemo(() => {
  //   return items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
  // }, [filter, items]); 

  // return (
  //   <div>
  //     <input type="text" placeholder="Filter items..." onChange={handleChange} />
  //     <ul>
  //       {filteredItems.map((item, index) => (
  //         <li key={index}>{item}</li>
  //       ))}
  //     </ul>
  //     <p>Count of filtered items: {filteredItems.length}</p>
  //   </div>
  // );

  // Фокус на input и обновление заголовка страницы
  //  Создать input, на который при загрузке компонента автоматически устанавливается фокус, и при изменении значения обновлять заголовок страницы.
  //  Использовать: useEffect, useRef

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  // const handleChange = (e) => {
  //   document.title = e.target.value; 
  // };

  // return (
  //   <div>
  //     <input 
  //       ref={inputRef} 
  //       type="text" 
  //       onChange={handleChange} 
  //       placeholder="Введите текст" 
  //     />
  //   </div>
  // );

  // Таймер с кнопками "Старт" и "Стоп"
  //  Сделать таймер обратного отсчёта с кнопками управления запуском и остановкой, используя useRef для хранения ID интервала.
  //  Использовать: useState, useRef, useEffect

  // const [time, setTime] = useState(10);
  // const intervalRef = useRef(null);

  // const start = () => {
  //   if (intervalRef.current) return; 
  //   intervalRef.current = setInterval(() => {
  //     setTime((prevTime) => {
  //       if (prevTime <= 1) {
  //         clearInterval(intervalRef.current);
  //         intervalRef.current = null;
  //         return 0; 
  //       }
  //       return prevTime - 1; 
  //     });
  //   }, 1000);
  // };

  // const stop = () => {
  //   clearInterval(intervalRef.current);
  //   intervalRef.current = null; 
  // };

  // useEffect(() => {
  //   return () => clearInterval(intervalRef.current);
  // }, []);

  // return (
  //   <div>
  //     <p>{time}</p>
  //     <button onClick={start}>Старт</button>
  //     <button onClick={stop}>Стоп</button>
  //   </div>
  // );

  // Управление формой с динамическими полями и мемоизацией функций
  //  Сделать форму, где можно динамически добавлять или удалять поля, а функции обработки событий мемоизировать с помощью useCallback.
  //  Использовать: useState, useCallback

  // const [inputs, setInputs] = useState([0]);

  // const addInput = useCallback(() => {
  //   setInputs((prevInputs) => [...prevInputs, prevInputs.length]);
  // }, []);

  // const removeInput = useCallback((index) => {
  //   setInputs((prevInputs) => prevInputs.filter((_, i) => i !== index));
  // }, []);

  // return (
  //   <div>
  //     <div>
  //       {inputs.map((_, index) => (
  //         <div key={index}>
  //           <input type="text" placeholder="text" />
  //           <button onClick={() => removeInput(index)}>Удалить</button>
  //         </div>
  //       ))}
  //     </div>
  //     <button onClick={addInput}>Добавить</button>
  //   </div>
  // );

  // Пользовательский хук для отслеживания окна браузера
  //  Написать кастомный хук, который следит за изменением размеров окна браузера и возвращает текущие размеры.
  //  Использовать: useState, useEffect

  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  //  return (
  //   <div>
  //     <h1>Текущие размеры окна:</h1>
  //     <p>Ширина: {windowSize.width}px</p>
  //     <p>Высота: {windowSize.height}px</p>
  //   </div>
  // );

  // Игра "Угадай число"
  //  Приложение случайным образом выбирает число в заданном диапазоне (например, от 1 до 100) при загрузке страницы или при старте игры. Пользователь вводит число в поле ввода и нажимает кнопку "Проверить".
  //  Приложение сравнивает введённое число с загаданным и выводит подсказку:

  // если введённое число меньше загаданного — показать сообщение "Загаданное число больше",

  // если больше — "Загаданное число меньше",

  // если совпадает — "Поздравляем! Вы угадали число!".
  //  После угадывания можно начать новую игру с новым случайным числом.
  //  Использовать: useState

  //  const [value, setValue] = useState(0);
  // const [message, setMessage] = useState('Угадайте число!');
  // const random = useRef(Math.round(Math.random() * 100)).current; 

  // const up = (e) => setValue(Number(e.target.value));

  // const check = useCallback(() => {
  //   if (random === value) {
  //     setMessage('Поздравляем! Вы угадали число!');
  //   } else if (random > value) {
  //     setMessage('Загаданное число больше');
  //   } else {
  //     setMessage('Загаданное число меньше');
  //   }
  // }, [value, random]);

  // return (
  //   <div>
  //     <input type="number" placeholder="Введите число" onChange={up} />
  //     <button onClick={check}>Проверить</button>
  //     <p>{message}</p>
  //   </div>
  // );

  // Сравнение предыдущего и текущего состояния
  //  Создать компонент, который запоминает предыдущее значение состояния и сравнивает его с текущим, используя useRef.
  //  Использовать: useRef, useEffect, useState

  // const [value, setValue] = useState('');
  // const [previousValue, setPreviousValue] = useState('');
  // const [message, setMessage] = useState('');

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const saveValue = () => {
  //   setPreviousValue(value); 
  //   setMessage('Значение сохранено!');
  // };

  // const check = () => {
  //   if (previousValue === value) {
  //     setMessage('Совпадает');
  //   } else {
  //     setMessage('Не совпадает');
  //   }
  // };

  // return (
  //   <div>
  //     <input type="text" value={value} onChange={handleChange} />
  //     <button onClick={saveValue}>Сохранить</button>
  //     <button onClick={check}>Проверить</button>
  //     <p>{message}</p>
  //   </div>
  // );

  // Динамическое добавление и удаление тегов
  //  Создать поле ввода, в которое можно вводить слова. При нажатии Enter слово добавляется в список тегов, отображаемый под полем. Каждый тег можно удалить по клику на крестик. Поле ввода очищается после добавления.
  //  Использовать: useState
  // const [val, setVal] = useState('');
  // const [arr, setArr] = useState([]);
  // const inp = useRef();

  // const up = (e) => {
  //   setVal(e.target.value);
  // };

  // const add = (e) => {
  //   if (e.key === 'Enter' && val) {
  //     setArr((prevInput) => [...prevInput, val]);
  //     setVal(''); 
  //   }
  // };

  // const removeTag = (index) => {
  //   setArr((prevInput) => prevInput.filter((_, i) => i !== index));
  // };

  // return (
  //   <div>
  //     <input
  //       ref={inp}
  //       type="text"
  //       value={val}
  //       onChange={up}
  //       onKeyDown={add} 
  //       placeholder="Введите слово и нажмите Enter"
  //     />
  //     <div>
  //       {arr.map((el, index) => (
  //         <div key={index} style={{ display: 'inline-block', margin: '5px', padding: '5px', border: '1px solid #ccc' }}>
  //           {el}
  //           <button onClick={() => removeTag(index)} style={{ marginLeft: '5px' }}>✖</button>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  // Измерение размера DOM-элемента с помощью useRef
  //  Создать блок с содержимым и вывести его текущие ширину и высоту под блоком. Размеры должны обновляться при изменении размера окна.
  //  Использовать: useRef, useState, useEffect

  //  const boxRef = useRef(null);
  // const [size, setSize] = useState({ width: 0, height: 0 });

  // const updateSize = () => {
  //   if (boxRef.current) {
  //     setSize({
  //       width: boxRef.current.offsetWidth,
  //       height: boxRef.current.offsetHeight,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   updateSize();
  //   window.addEventListener('resize', updateSize);
    
  //   return () => {
  //     window.removeEventListener('resize', updateSize);
  //   };
  // }, []);

  // return (
  //   <div>
  //     <div
  //       ref={boxRef}
  //       style={{
  //         width: '50%',
  //         height: '200px',
  //         backgroundColor: '#f0f0f0',
  //         border: '1px solid #ccc',
  //         display: 'flex',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //       }}
  //     >
  //       Содержимое блока
  //     </div>
  //     <p>Ширина: {size.width}px</p>
  //     <p>Высота: {size.height}px</p>
  //   </div>
  // );

  // Автоматический скролл к новому сообщению (чат)
  //  Создать чат с полем ввода и кнопкой отправки. При добавлении сообщения список автоматически прокручивается вниз, чтобы показать новое сообщение.
  //  Использовать: useState, useRef, useEffect

// const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const endOfMessagesRef = useRef(null);

//   const handleSend = () => {
//     if (input) {
//       setMessages((prevMessages) => [...prevMessages, input]);
//       setInput('');
//     }
//   };
//   useEffect(() => {
//     if (endOfMessagesRef.current) {
//       endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [messages]);

//   return (
//     <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//         <div ref={endOfMessagesRef} /> 
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Введите сообщение"
//       />
//       <button onClick={handleSend}>Отправить</button>
//     </div>
//   );

  // Тёмная/светлая тема с переключателем
  //  Сделать переключатель темы (тёмная/светлая). При смене темы менять стили страницы (например, фон и цвет текста).
  //  Использовать: useState

  //  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkTheme((prevTheme) => !prevTheme);
  // };

  // const themeStyles = {
  //   backgroundColor: isDarkTheme ? '#333' : '#FFF',
  //   color: isDarkTheme ? '#FFF' : '#000',
  //   padding: '20px',
  //   textAlign: 'center',
  //   transition: 'background-color 0.3s, color 0.3s',
  // };

  // return (
  //   <div style={themeStyles}>
  //     <h1>Переключение темы</h1>
  //     <button onClick={toggleTheme}>
  //       {isDarkTheme ? 'Светлая тема' : 'Тёмная тема'}
  //     </button>
  //   </div>
  // );
}
export default App9;
