import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState('USD');
    const [rate, setRate] = useState(3.2);

    React.useEffect(() => {
        if (currency === 'USD') setRate(3.2);
        else if (currency === 'EUR') setRate(3.5);
        else if (currency === 'CNY') setRate(0.45);
    }, [currency]);

    return (
        <CurrencyContext.Provider value={{ currency, rate, setCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};