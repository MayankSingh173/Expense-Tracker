import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance= () => {

    //Getting transaction object from context
    const { transactions } = useContext(GlobalContext);

    //Calculatingn the Balance
      const amounts = transactions.map(transaction => transaction.amount);

      const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">Rs {total}</h1>
        </>
    )
}
