import React from 'react';
function App2(){ 
//     1. Создайте компонент с input. По изменению отображайте количество
//     символов вinputвконсоль.

    // return (
    //     <input type="text" onChange={(e)=>console.log(e.target.value.length)}/>
    // )

//     2. Реализуйте компонент, в котором пользователь вводит email. При потере фокуса (onBlur)
//     проверьте корректность email через RegExp и отобразите результат в консоль.

// return (
//         <input type="text" onBlur={(e)=>console.log((/^[A-Za-z]+@[a-z]+\.[a-z]{1,3}$/gm).test(e.target.value))}/>
//     )

//3. Пособытиюизмененияinput отображать вконсоль каждоевводимое значение

// return (
//     <input type="text" onChange={(e)=>console.log(e.target.value.length)}/>
// )

//     4. Создайте компонент с checkbox. При его активации в консоль выводится "Согласен", при
//     отключении —"Несогласен".

// const handleChange = (e)=>{
//     if(e.target.checked==true) console.log('Согласен');
//     else console.log('Не согласен');
    
// }
// return (
//     <div>
//         <input type="checkbox" onClick={handleChange} />
//     </div>
// );

//     5. Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет в
//     соответствии с массивом цветов ['red', 'white', 'blue']. Используйте рандомный выбор цвета из
//     массива прикаждомклике.

// const arr = ['red', 'white', 'blue'];
// const change = (event)=>{
//     const randomColor = arr[Math.floor(Math.random() * arr.length)];
//     event.target.style.backgroundColor = randomColor;
// }
// return (
//     <button onClick={change}>Click</button>
// )

//     6. Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку вычислите и
//     выведите сумму всех чисел измассива вконсоль.

// const arr = [1,2,3,4,5,6]
// return (
//     <button onClick={()=>{console.log(arr.reduce((el,sum)=>el+sum))}}>Click</button>
// )

//     7. Создайте компонент с массивом элементов и кнопкой. При каждом клике на кнопку
//     выбирайте случайный элемент измассива иотображайте еговконсоль.

// const arr = [1,2,3,4,5,6]
// return (
//     <button onClick={()=>{console.log(arr[Math.round(Math.random() * arr.length)])}}>Click</button>
// )

//    8. Реализуйте компонент, который по нажатию на кнопку отображает текущую дату и время в
//     консоль.


// return (
//     <button onClick={()=>{console.log(new Date())}}>Click</button>
// )

//     9. Создайте поле ввода. При вводе слова длиной > 10 символов выведите предупреждение в
//     консоль.
   
// const check =(e)=>{
//  if(e.target.value.length>10) console.log('WARNING');
// }
// return (
//     <div>
//         <input type="text" onChange={check} />
//     </div>
// );

}
    export default App2;