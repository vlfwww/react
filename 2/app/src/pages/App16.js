// Условие: Реализуй кнопку + и кнопку -. При нажатии на них увеличивай или уменьшай счётчик на 1.

// import { useReducer } from "react";
// function reducer(num,operation){
//     switch (operation){
//         case 'plus': return num+1;
//         case 'minus': return num-1;
//     }
// }
// function App16(){
//     const [num,setNum] = useReducer(reducer,0);
//     return (
//         <div>
//             <h1>{num}</h1>
//             <button onClick={()=>setNum('plus')}>+</button>
//             <button onClick={()=>setNum('minus')}>-</button>
//         </div>
//     );
// }
// export default App16;

// Условие: Добавь в задачу 1 кнопку Сброс, которая вернёт значение счётчика к 0.

// import { useReducer } from "react";
// function reducer(num,operation){
//     switch (operation){
//         case 'plus': return num+1;
//         case 'minus': return num-1;
//         case 'reset': return 0;
//     }
// }
// function App16(){
//     const [num,setNum] = useReducer(reducer,0);
//     return (
//         <div>
//             <h1>{num}</h1>
//             <button onClick={()=>setNum('plus')}>+</button>
//             <button onClick={()=>setNum('minus')}>-</button>
//             <button onClick={()=>setNum('reset')}>reset</button>
//         </div>
//     );
// }
// export default App16;

// Условие: Добавь в задачу 1 кнопку *2, которая умножит значение счетчика на 2.

// import { useReducer } from "react";
// function reducer(num,operation){
//     switch (operation){
//         case 'plus': return num+1;
//         case 'minus': return num-1;
//         case 'reset': return 0;
//         case '*2': return num*2;
//     }
// }
// function App16(){
//     const [num,setNum] = useReducer(reducer,0);
//     return (
//         <div>
//             <h1>{num}</h1>
//             <button onClick={()=>setNum('plus')}>+</button>
//             <button onClick={()=>setNum('minus')}>-</button>
//             <button onClick={()=>setNum('*2')}>*2</button>
//             <button onClick={()=>setNum('reset')}>reset</button>
//         </div>
//     );
// }
// export default App16;

// Условие: Добавь  в задачу 1 инпут и кнопку "Установить". Введённое число устанавливается как значение счётчика.
import { useReducer, useState } from "react";

function reducer(num, obj) {
    switch (obj.operation) {
        case 'plus': return num + 1;
        case 'minus': return num - 1;
        case 'reset': return 0;
        case '*2': return num * 2;
        case 'set': return obj.value; 
        default: return num; 
    }
}

function App16() {
    const [num, setNum] = useReducer(reducer, 0);
    const [value, setVal] = useState(0);

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => setNum({ operation: 'plus' })}>+</button>
            <button onClick={() => setNum({ operation: 'minus' })}>-</button>
            <button onClick={() => setNum({ operation: '*2' })}>*2</button>
            <button onClick={() => setNum({ operation: 'reset' })}>reset</button>
            <input 
                type="number" 
                onChange={(e) => setVal(Number(e.target.value))}
            />
            <button onClick={() => setNum({ operation: 'set', value })}>Set value</button>
        </div>
    );
}

export default App16;