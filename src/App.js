/** @jsx jsx */
import { jsx } from '@emotion/core';
import Home from './pages/home/Home';
import RankingsSimulator from './pages/rankings/RankingsSimulator';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import ReactGA from 'react-ga';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import { useAuth0 } from './react-auth0-spa';
ReactGA.initialize('UA-109019699-1');

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '3rem'
    },
    h2: {
      fontSize: '2.5rem'
    }
  }
});

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <div className="App">
          <Router>
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '100vh'
              }}
            >
              <Navbar />
              <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/standings" component={RankingsSimulator} />
                <Redirect to="/" />
              </main>
              <Footer />
            </div>
          </Router>
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
