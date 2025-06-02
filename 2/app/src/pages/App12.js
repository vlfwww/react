// 3/ Отобразить список задач из контекста TasksContext. Передай в TasksContext массив ["task1", "task2"]. В компоненте TaskList — отобрази список.

// import React, { useContext } from 'react';
// import GlobalThis from '../context';

// function App12() {
//     const data = useContext(GlobalThis);

//     return (
//         <div>
//             <ul>
//                 {data.map((el, index) => (
//                     <li key={index}>{el}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App12;

// 4/ Создай CurrencyContext, который содержит текущую валюту (USD), курс (3.2).

// В компоненте Converter:
// пользователь вводит сумму в инпут,
// по нажатию на кнопку отображается результат конвертации.

// import React, { useContext, useState } from 'react';
// import { CurrencyContext } from '../context/CurrencyContext';

// const Converter = () => {
//     const { rate } = useContext(CurrencyContext);
//     const [amount, setAmount] = useState('');
//     const [result, setResult] = useState(null);

//     const handleConvert = () => {
//         const convertedAmount = amount * rate;
//         setResult(convertedAmount);
//     };

//     return (
//         <div>
//             <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 placeholder="Введите сумму в USD"
//             />
//             <button onClick={handleConvert}>Конвертировать</button>
//             {result !== null && (
//                 <p>Результат: {result} (по курсу {rate})</p>
//             )}
//         </div>
//     );
// };

// export default Converter;

// 5/ Дополнить задачу 4: Создай CurrencyContext, который содержит текущую валюту (USD) и курсы:
// USD: 3.2
// EUR: 3.5
// CNY: 0.45

// В компоненте Converter:
// пользователь вводит сумму в инпут,
// выбирает валюту (USD, EUR, CNY) с помощью кнопок,
// по нажатию на кнопку отображается результат конвертации по выбранному курсу.

// import React, { useContext, useState } from 'react';
// import { CurrencyContext } from '../context/CurrencyContext';

// const Converter = () => {
//     const { rate, setCurrency } = useContext(CurrencyContext);
//     const [amount, setAmount] = useState('');
//     const [result, setResult] = useState(null);

//     const handleConvert = () => {
//         const convertedAmount = amount * rate;
//         setResult(convertedAmount);
//     };

//     const handleCurrencyChange = (currency) => {
//         setCurrency(currency);
//         setResult(null); 
//     };

//     return (
//         <div>
//             <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 placeholder="Введите сумму для конвертирования"
//             />
//             <button onClick={() => handleCurrencyChange('USD')}>USD</button>
//             <button onClick={() => handleCurrencyChange('EUR')}>EUR</button>
//             <button onClick={() => handleCurrencyChange('CNY')}>CNY</button>
//             <br />
//             <button onClick={handleConvert}>Конвертировать</button>
//             {result !== null && (
//                 <p>Результат: {result} (по курсу {rate})</p>
//             )}
//         </div>
//     );
// };

// export default Converter;

// 6/ Создай CartContext, который содержит:
// массив товаров в корзине,
// функцию для добавления товара.

// В компоненте ProductList:
// отображай несколько товаров с кнопками "Добавить в корзину",
// при клике товар добавляется в корзину через контекст.

// В компоненте Cart:
// отображай список товаров из корзины и их количество.

import React, { useContext, useState } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';
import List from './CartComponents/List';
import Cart from './CartComponents/Cart';


const App12 = () => {

    return (
        <div>
           <List/>
           <Cart/>
        </div>
    );
};

export default App12;