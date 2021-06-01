import React, { useReducer } from 'react'

import Search from './components/Search'
import Details from './components/Details'

import { BrowserRouter as Router,  Route, } from 'react-router-dom'

// Find selected Result if available
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
					<Search 
						setSelectedResult={dispatch}
					/>
				)}
			/>
			<Route 
				path="/repo/:repoId" 
				render={() => (
					<Details 
						result={selectedResult.selectedResult}
					/>
				)} 
			/>
		</Router>
	);
}

export default App;
