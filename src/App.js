import Home from './components/Home'
import ResultPage from './components/ResultPage'

import { BrowserRouter as Router,  Route, } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/repo/:repoId" component={ResultPage} />
    </Router>
  );
}

export default App;
