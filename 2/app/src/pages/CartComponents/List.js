// В компоненте ProductList:
// отображай несколько товаров с кнопками "Добавить в корзину",
// при клике товар добавляется в корзину через контекст.
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const List = () => {
    const goods = ['milk', 'bread', 'tea', 'water'];
    const { add } = useContext(CartContext);

    return (
        <div>
            {goods.map((el) => (
                <div key={el}>
                    <p>{el}</p>
                    <button onClick={() => add({ name: el })}>Add</button>
                </div>
            ))}
        </div>
    );
};

export default List;