import React, { use, useState } from 'react';
function App3(){ 

//  1. Создайте компонент с полем ввода и параграфом. При вводе данных в input отображать
//  вводимое значениевпараграфтекущей страницы

// const [inp, setInp] = useState('');

//     const handleChange = (event) => {
//         setInp(event.target.value);
//     };

//     return (
//         <div>
//             <input 
//                 type="text" 
//                 value={inp} 
//                 onChange={handleChange} 
//             />
//             <p>Введенное значение: {inp}</p>
//         </div>
//     );

//  2. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input 
// ипроверить вводимую строку напалиндром.Результат отображать вконсоль

// const [inp, setInp] = useState('');

// const handleChange = (event) => {
//     setInp(event.target.value);
// };

// const view = () => {
//     console.log(inp); 
// };

// return (
//     <div>
//         <input 
//             type="text" 
//             onChange={handleChange} 
//         />
//         <button onClick={view}>Click</button>
//     </div>
// );

//  3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input 
// ипроверить вводимую строку напочту. Результат отображать вконсоль

// const [inp, setInp] = useState('');

// const handleChange = (event) => {
//     setInp(event.target.value);
// };

// const view = () => {
//     console.log((/^[A-Za-z]+@[a-z]+\.[a-z]{1,3}$/gm).test(inp)); 
// };

// return (
//     <div>
//         <input 
//             type="text" 
//             onChange={handleChange} 
//         />
//         <button onClick={view}>Click</button>
//     </div>
// );

//  4. Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать данные из
//  двух input (2 разных state). Сравнить значения 2 input на равенство. Результат отображать в
//  консоль

// const [inp1, setInp1] = useState('');
// const [inp2, setInp2] = useState('');

// const handleChange1 = (event) => {
//     setInp1(event.target.value);
// };
// const handleChange2 = (event) => {
//     setInp2(event.target.value);
// };

// const view = () => {
//     (inp1===inp2) ? console.log('DA') :console.log('NET') ; 
// };

// return (
//     <div>
//         <input 
//             type="text" 
//             onChange={handleChange1} 
//         />
//         <input 
//             type="text" 
//             onChange={handleChange2} 
//         />
//         <button onClick={view}>Click</button>
//     </div>
// );

//  5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в поле и
//  нажатии на кнопку, компонент должен отображать приветственное сообщение с именем,
//  введеннымпользователем

// const [name, setName] = useState('');
// const handleChange = (event)=>{
//     setName(event.target.value)
// }
// const hello = ()=>{
//     alert(`Hello, ${name}`)
// }

// return (
//     <div>
//         <input type="text" onChange={handleChange}/>
//         <button onClick={hello}>Hello</button>
//     </div>
// );

//  6. Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку текст
//  долженпоявляться или исчезать

// const [isTextVisible, setTextVisible] = useState(false);

// const toggleText = () => {
//     setTextVisible(!isTextVisible);
// };

// return (
//     <div>
//         <button onClick={toggleText}>
//             {isTextVisible ? "Скрыть текст" : "Показать текст"}
//         </button>
//         {isTextVisible && <p>Это текст, который можно скрыть.</p>}
//     </div>
// );

// 7.
//  Создайте компонент с кнопкой и параграфом для отображения результата счетчика
//  (изначально счетчик равен 0). Ваша задача так реализовать функционал, чтобы при клике на
//  кнопку автоматически прибавлялась +1 к стейту счетчика

// let [n, change] = useState(0);
// const view = () =>{
//     change(n+=1);
// } 

// return (
//     <div>
//         <p>{n}</p>
//         <button onClick={view}>+1</button>
//     </div>
// );

//  8. Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом для
//  отображения результата счетчика (изначально счетчик равен 0). Ваша задача так
//  реализовать функционал, чтобы при клике на кнопку +1 автоматически прибавлялась +1 к
//  стейту счетчика, а при клике накнопку-1, происходило вычитание значения 1

// let [n, change] = useState(0);
// const plus = () =>{
//     change(n+=1);
// } 
// const minus = () =>{
//     change(n-=1);
// } 

// return (
//     <div>
//         <p>{n}</p>
//         <button onClick={plus}>+1</button>
//         <button onClick={minus}>-1</button>
//     </div>
// );

//  9. Дополните предыдущую задачу. Создайте компонент, который отображает счетчик и кнопку
//  "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в ноль. Используйте useState,
//  чтобы управлять значением счетчика.

// let [n, change] = useState(0);
// const plus = () =>{
//     change(n+=1);
// } 
// const minus = () =>{
//     change(n-=1);
// } 
// const nol = () =>{
//     change(0);
// } 

// return (
//     <div>
//         <p>{n}</p>
//         <button onClick={plus}>+1</button>
//         <button onClick={minus}>-1</button>
//         <button onClick={nol}>Сброс</button>
//     </div>
// );

// 10. Создайте кнопку с названием "Добавить цвет". При клике на эту кнопку цвет шрифта 
// заголовка H1 должен измениться. При следующем клике цвет должен вернуться в 
// первоначальное состояние. Текст кнопки также должен меняться с "Открыто" на "Закрыто" 
// при нажатии на саму кнопку.

// const [isColorRed, setColorRed] = useState(false);

//     const toggleColor = () => {
//         setColorRed(!isColorRed);
//     };

//     return (
//         <div>
//             <h1 style={{ color: isColorRed ? 'red' : 'black' }}>
//                 {isColorRed ? 'Закрыто' : 'Открыто'}
//             </h1>
//             <button onClick={toggleColor}>
//                 {isColorRed ? "Закрыто" : "Открыто"}
//             </button>
//         </div>
//     );

//  11. Напишите компонент, включающий в себя выезжающее меню из трех параграфов. По 
// нажатию на кнопку "Открыть" меню должно отображаться.

const [isOpen, setOpen] = useState(false);
const toggleOpen = () => {
    setOpen(!isOpen);
};
return (
    <div>
        <div style={{display: isOpen ? 'block' : 'none'}}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
        </div>
        <button onClick={toggleOpen}>{isOpen ? 'Открыть' : 'Закрыть'}</button>
    </div>
)

}
    export default App3;