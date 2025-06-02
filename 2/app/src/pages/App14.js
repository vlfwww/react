// 1. Счётчик с тремя кнопками
// Создайте компонент с заголовком, отображающим число, и тремя кнопками: «+», «−» и «Сброс». При нажатии на кнопки значение увеличивается, уменьшается или сбрасывается на 0.
// import React, { useReducer } from "react";

// function reducer(counter, action) {
//     switch (action) {
//         case 'plus':
//             return counter + 1;
//         case 'minus':
//             return counter - 1;
//         case 'zero':
//             return 0;
//         default:
//             return counter;
//     }
// }

// function App14() {
//     const [counter, dispatch] = useReducer(reducer, 0);

//     return (
//         <div>
//             <h1>{counter}</h1>
//             <button onClick={() => dispatch('plus')}>+</button>
//             <button onClick={() => dispatch('minus')}>-</button>
//             <button onClick={() => dispatch('zero')}>0</button>
//         </div>
//     );
// }

// export default App14;

// 2. Включатель/выключатель
// Сделайте кнопку, которая включает и выключает цвет заголовка. В заголовке отображается "Включить цвет" или "Выключить цвет" в зависимости от состояния.

// import React, { useReducer } from "react";

// function reducer(text, action) {
//     switch (action) {
//         case 'Включить цвет':
//             return 'Включить цвет';
//         case 'Выключить цвет':
//             return 'Выключить цвет';
//         default:
//             return text;
//     }
// }

// function App14() {
//     const [text, setText] = useReducer(reducer, 'Выключить цвет');
//     const st = {
//         color:'blue'
//     }

//     return (
//         <div>
//             <h1 style={text==='Включить цвет'?st:{color:"black"}}>{text}</h1>
//             <button onClick={() => {text==='Включить цвет'? setText('Выключить цвет'):setText('Включить цвет')}}>change</button>
//         </div>
//     );
// }

// export default App14;

// 3. Поле ввода с очисткой
// Создайте текстовое поле и кнопку «Очистить». При вводе текста он сохраняется в состоянии, а по нажатию на кнопку поле и состояние очищаются.

// import React, { useReducer } from "react";

// function reducer(text, action) {
//     switch (action.type) {
//         case 'change':
//             return action.value;
//         case 'reset':
//             return '';
//         default:
//             return text;
//     }
// }

// function App14() {
//     const [text, setText] = useReducer(reducer, '');

//     return (
//         <div>
//             <input 
//                 type="text" 
//                 onChange={(e) => setText({ type: 'change', value: e.target.value })} 
//                 value={text}
//             />
//             <button onClick={() => setText({ type: 'reset' })}>Reset</button>
//             <p>Текущий текст: {text}</p> 
//         </div>
//     );
// }

// export default App14;

// 4. Переключение темы (светлая/тёмная)
// Сделайте кнопку, которая по нажатию меняет тему между светлой и тёмной. В заголовке отображайте текущую тему.

// import React, { useReducer } from "react";

// const initialState = { isDarkTheme: false };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'TOGGLE_THEME':
//             return { ...state, isDarkTheme: !state.isDarkTheme };
//         default:
//             return state;
//     }
// }

// const App = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const styles = {
//         container: {
//             margin: 0,
//             fontFamily: 'Arial, sans-serif',
//             backgroundColor: state.isDarkTheme ? 'black' : 'white',
//             color: state.isDarkTheme ? 'white' : 'black',
//             height: '100vh',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         button: {
//             padding: '10px 20px',
//             marginTop: '20px',
//             cursor: 'pointer',
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <h1>Текущая тема: {state.isDarkTheme ? 'Тёмная' : 'Светлая'}</h1>
//             <button style={styles.button} onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
//                 Переключить на {state.isDarkTheme ? 'светлую' : 'тёмную'} тему
//             </button>
//         </div>
//     );
// };

// export default App;

// 5. Список дел (ToDo)
// Создайте поле для ввода задачи и кнопку «Добавить». Добавленные задачи отображаются списком, рядом с каждой — кнопка «Удалить».

// import React, { useReducer } from "react";

// const initialState = [];

// function reducer(state, action) {
//     switch (action.type) {
//         case 'ADD_TASK':
//             return [...state, { id: Date.now(), text: action.payload }];
//         case 'REMOVE_TASK':
//             return state.filter(task => task.id !== action.payload);
//         default:
//             return state;
//     }
// }

// const App = () => {
//     const [tasks, dispatch] = useReducer(reducer, initialState);
//     const [taskInput, setTaskInput] = React.useState('');

//     const addTask = () => {
//         if (taskInput.trim() === '') return; 
//         dispatch({ type: 'ADD_TASK', payload: taskInput });
//         setTaskInput('');
//     };

//     const removeTask = (id) => {
//         dispatch({ type: 'REMOVE_TASK', payload: id });
//     };

//     return (
//         <div style={{ padding: '20px' }}>
//             <h1>Список дел</h1>
//             <input 
//                 type="text" 
//                 value={taskInput} 
//                 onChange={(e) => setTaskInput(e.target.value)} 
//                 placeholder="Введите задачу" 
//             />
//             <button onClick={addTask}>Добавить</button>
//             <ul>
//                 {tasks.map(task => (
//                     <li key={task.id}>
//                         {task.text}
//                         <button onClick={() => removeTask(task.id)}>Удалить</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default App;

// 6. Форма логина с очисткой
// Создайте форму с двумя полями: логин и пароль, и кнопку «Очистить». Все введённые данные сохраняются в состоянии, при очистке поля сбрасываются.

// import React, { useReducer } from "react";

// const initialState = {
//     username: '',
//     password: ''
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'SET_USERNAME':
//             return { ...state, username: action.payload };
//         case 'SET_PASSWORD':
//             return { ...state, password: action.payload };
//         case 'CLEAR':
//             return initialState;
//         default:
//             return state;
//     }
// }

// const LoginForm = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Логин:', state.username);
//         console.log('Пароль:', state.password);
//     };

//     return (
//         <div style={{ padding: '20px' }}>
//             <h1>Форма логина</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>
//                         Логин:
//                         <input 
//                             type="text" 
//                             value={state.username} 
//                             onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })} 
//                             placeholder="Введите логин" 
//                         />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Пароль:
//                         <input 
//                             type="password" 
//                             value={state.password} 
//                             onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })} 
//                             placeholder="Введите пароль" 
//                         />
//                     </label>
//                 </div>
//                 <button type="submit">Войти</button>
//                 <button type="button" onClick={() => dispatch({ type: 'CLEAR' })}>Очистить</button>
//             </form>
//         </div>
//     );
// };

// export default LoginForm;

// 7. Сделайте две кнопки: «За» и «Против», и отображение количества голосов по каждой опции. По нажатию счётчики увеличиваются.

// import React, { useReducer } from "react";

// const initialState = {
//     votesFor: 0,
//     votesAgainst: 0,
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'VOTE_FOR':
//             return { ...state, votesFor: state.votesFor + 1 };
//         case 'VOTE_AGAINST':
//             return { ...state, votesAgainst: state.votesAgainst + 1 };
//         default:
//             return state;
//     }
// }

// const VotingApp = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <div style={{ padding: '20px' }}>
//             <h1>Голосование</h1>
//             <div>
//                 <button onClick={() => dispatch({ type: 'VOTE_FOR' })}>
//                     За
//                 </button>
//                 <span> {state.votesFor} голосов</span>
//             </div>
//             <div>
//                 <button onClick={() => dispatch({ type: 'VOTE_AGAINST' })}>
//                     Против
//                 </button>
//                 <span> {state.votesAgainst} голосов</span>
//             </div>
//         </div>
//     );
// };

// export default VotingApp;

// 8. Создайте кнопку «Открыть» и модальное окно с кнопкой «Закрыть». Модальное окно появляется и скрывается при соответствующих действиях.

// import React, { useReducer } from "react";

// const initialState = {
//     isModalOpen: false,
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'OPEN_MODAL':
//             return { ...state, isModalOpen: true };
//         case 'CLOSE_MODAL':
//             return { ...state, isModalOpen: false };
//         default:
//             return state;
//     }
// }

// const Modal = ({ onClose }) => {
//     return (
//         <div style={styles.modal}>
//             <div style={styles.modalContent}>
//                 <h2>Модальное Окно</h2>
//                 <button onClick={onClose}>Закрыть</button>
//             </div>
//         </div>
//     );
// };

// const App = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <div style={{ padding: '20px' }}>
//             <button onClick={() => dispatch({ type: 'OPEN_MODAL' })}>Открыть</button>
//             {state.isModalOpen && 
//                 <Modal onClose={() => dispatch({ type: 'CLOSE_MODAL' })} />
//             }
//         </div>
//     );
// };

// const styles = {
//     modal: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     modalContent: {
//         backgroundColor: 'white',
//         padding: '20px',
//         borderRadius: '5px',
//         boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//     },
// };

// export default App;

// 9. Создайте поле ввода и список элементов (например, имена людей). При вводе текста в поле снизу отображаются только те элементы, которые соответствуют введённой строке. Поиск должен быть чувствительным к символам и работать в реальном времени.

// import React, { useState } from "react";

// const names = ["Dasha", "Nastya", "Nika", "Taya", "Vika", "Ksusha"];
// const initialState = {
//     searchTerm: "",
//     filteredNames: names,
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'SET_SEARCH_TERM':
//             return {
//                 ...state,
//                 searchTerm: action.payload,
//                 filteredNames: names.filter(name =>
//                     name.toLowerCase().includes(action.payload.toLowerCase())
//                 ),
//             };
//         default:
//             return state;
//     }
// }

// const NameFilter = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <div style={{ padding: '20px' }}>
//             <h1>Поиск имен</h1>
//             <input
//                 type="text"
//                 value={state.searchTerm}
//                 onChange={(e) => dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value })}
//                 placeholder="Введите имя"
//             />
//             <ul>
//                 {state.filteredNames.map((name, index) => (
//                     <li key={index}>{name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default NameFilter;

// 10. Сделайте простую форму из трёх шагов. Кнопки «Далее» и «Назад» переключают текущий шаг, отображая соответствующий заголовок.

// import React, { useReducer } from "react";

// const initialState = {
//     currentStep: 0,
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'NEXT_STEP':
//             return { ...state, currentStep: state.currentStep + 1 };
//         case 'PREV_STEP':
//             return { ...state, currentStep: state.currentStep - 1 };
//         default:
//             return state;
//     }
// }

// const steps = [
//     { title: "Шаг 1: Ввод имени", content: <input type="text" placeholder="Введите ваше имя" /> },
//     { title: "Шаг 2: Ввод возраста", content: <input type="number" placeholder="Введите ваш возраст" /> },
//     { title: "Шаг 3: Проверка данных", content: <p>Проверьте введенные данные</p> },
// ];

// const MultiStepForm = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <div style={{ padding: '20px' }}>
//             <h1>{steps[state.currentStep].title}</h1>
//             {steps[state.currentStep].content}
//             <div>
//                 <button onClick={() => dispatch({ type: 'PREV_STEP' })} disabled={state.currentStep === 0}>Назад</button>
//                 <button onClick={() => dispatch({ type: 'NEXT_STEP' })} disabled={state.currentStep === steps.length - 1}>Далее</button>
//             </div>
//         </div>
//     );
// };

// export default MultiStepForm;