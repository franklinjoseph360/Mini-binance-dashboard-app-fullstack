import {LandingPage} from './pages/LandingPage';
import GlobalStyle from './styles/GlobalStyle';

const App = (): React.ReactElement => {
  return (
    <>
      <GlobalStyle />
      <h1> Franklin - Flowdesk Assessment</h1>
      <LandingPage />
    </>
  )
}

export default App
