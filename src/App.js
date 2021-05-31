import React, { useReducer } from 'react'

import Home from './components/Home'
import ResultPage from './components/ResultPage'

import { BrowserRouter as Router,  Route, } from 'react-router-dom'

const initialState = {
	selectedResult: JSON.parse(localStorage.getItem('selectedResult')) || {}
}

const reducer = (state, action) => {
    switch (action.type) { 
		case ('select'):
			return {
				...state,
				selectedResult: action.result
			}
		default:
			return {
				...state,
				selectedResult: JSON.parse(localStorage.getItem('selectedResult'))
			}
	}
}

function App() {
	const [selectedResult, dispatch] = useReducer(reducer, initialState)

	return (
		<Router>
			<Route 
				exact 
				path="/" 
				render={() => (
					<Home 
						setSelectedResult={dispatch}
					/>
				)}
			/>
			<Route 
				path="/repo/:repoId" 
				render={() => (
					<ResultPage 
						result={selectedResult.selectedResult}
					/>
				)} 
			/>
		</Router>
	);
}

export default App;
