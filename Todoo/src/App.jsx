import './App.css'
import Tabss from './components/TodoList';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function App() {

  return (
    <>
  <Container maxWidth="xl">
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Minun ToDoni
            </Typography>
          </Toolbar>
        </AppBar>
        <Tabss />
      </Container>
    </>
  )
}

export default App
