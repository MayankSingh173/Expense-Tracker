import React, {useState} from 'react'
import './app.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
	return(
		<GlobalProvider>
			<Header/>
			<div className="container">
				<Balance/>
				<IncomeExpenses/> 
				<TransactionList/>
				<AddTransaction/>
			</div>
		</GlobalProvider>
	)
}

export default App;

