import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  palette: {
    primary: {
      main: '#90caf9'
    },
    secondary: {
      main: '#f48fb1'
    },
    background: {
      default: '#121212'
  },
  },
  typography: {
    fontFamily:'Poppins, Arial, sans-serif'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      </Container>
    </ThemeProvider>
  );
}

export default App;
