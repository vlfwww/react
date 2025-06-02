// useReducer:
//  1.
//  Создайте компонент счетчика, который может увеличивать, уменьшать,
// сбрасыватьзначение принажатиинасоответствующиекнопки.
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

// function App13() {
//     const [counter, dispatch] = useReducer(reducer, 0);

//     return (
//         <div>
//             <h1>{counter}</h1>
//             <button onClick={() => dispatch('plus')}>+1</button>
//             <button onClick={() => dispatch('minus')}>-1</button>
//             <button onClick={() => dispatch('zero')}>0</button>
//         </div>
//     );
// }

// export default App13;

//  2. Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off».
//  Покликунакнопкутекстменяетсянапротивоположный

// import React, { useReducer } from "react";

// function reducer(text, action) {
//     switch (action) {
//         case 'on':
//             return 'on';
//         case 'off':
//             return 'off';
//         default:
//             return text;
//     }
// }

// function App13() {
//     const [text, setText] = useReducer(reducer, 'on');

//     return (
//         <div>
//             <h1>{text}</h1>
//             <button onClick={() => {text==='on'? setText('off'):setText('on')}}>change</button>
//         </div>
//     );
// }

// export default App13;

//  3. Создайте компонент отслеживающий вводимое значение в input. Результат
//  отображать в h1

// import React, { useReducer } from "react";

// function reducer(text, obj) {
//     switch (obj.action) {
//         case 'change':
//             return obj.value;
//         default:
//             return text;
//     }
// }

// function App13() {
//     const [text, setText] = useReducer(reducer, '');

//     return (
//         <div>
//             <h1>{text}</h1>
//             <input type="text" onChange={(e)=>setText({action:'change',value:e.target.value})}/>
//         </div>
//     );
// }

// export default App13;

//  4. Вам предоставлен массив цветов, таких как red, blue, purple, pink. При клике на
//  кнопку ваша задача изменить цвет заголовка на цвет, соответствующий нажатой
//  кнопке.

// import React, { useReducer } from "react";

// function reducer(col, action) {
//     switch (action) {
//         case 'red':
//             return 'red';
//         case 'blue':
//             return 'blue';
//         case 'purple':
//             return 'purple';
//         case 'pink':
//             return 'pink';
//         default:
//             return col;
//     }
// }

// function App13() {
//     const colors=['red', 'blue', 'purple','pink'];
//     const [col, setCol] = useReducer(reducer, '');

//     return (
//         <div>
//             <h1 style={{color:col}}>hello</h1>
//             {colors.map((el)=><button onClick={()=>setCol(el)}>{el}</button>)}
//         </div>
//     );
// }

// export default App13;

//  5. Создайте компонент отслеживающий вводимое значение 2 input. Посчитать
//  сумму2input. Покликунакнопкуотображать результатвконсоль

import React, { useReducer } from "react";

function reducer1(state, action) {
    switch (action.type) {
        case 'change':
            return action.value;
        default:
            return state;
    }
}

function reducer2(state, action) {
    switch (action.type) {
        case 'change':
            return action.value;
        default:
            return state;
    }
}

function App13() {
    const [text1, setText1] = useReducer(reducer1, '');
    const [text2, setText2] = useReducer(reducer2, '');

    const handleSum = () => {
        const sum = Number(text1) + Number(text2);
        console.log('Сумма:', sum);
    };

    return (
        <div>
            <h1>{text1} + {text2}</h1>
            <input 
                type="number" 
                onChange={(e) => setText1({ type: 'change', value: e.target.value })} 
            />
            <input 
                type="number" 
                onChange={(e) => setText2({ type: 'change', value: e.target.value })} 
            />
            <button onClick={handleSum}>Сложить</button>
        </div>
    );
}

export default App13;