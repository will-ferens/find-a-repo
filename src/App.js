import Header from './components/Header'
import Search from './components/Search'
import styled from 'styled-components'

export const Global = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <Global>
      <Header />
      <Search />
    </Global>
  );
}

export default App;
