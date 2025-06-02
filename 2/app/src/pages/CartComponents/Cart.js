// В компоненте Cart:
// отображай список товаров из корзины и их количество.
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h2>Корзина</h2>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                cart.map((el) => (
                    <p key={el.name}>
                        {el.name}: {el.quantity}
                    </p>
                ))
            )}
            <p>В корзине {cart.length} товаров</p>
        </div>
    );
};

export default Cart;