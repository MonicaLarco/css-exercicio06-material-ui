
import './App.css';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function App() {
  const MyButton = styled(Button)({
    padding: 10
  });  
  return (
    <div className="App">
      <Typography variant="h2">This is my app</Typography>
      <Typography sx={{color:'myCustomColor.main'}}>This is my app</Typography>
      <MyButton color="secondary" variant="contained">Hi there!</MyButton>
    </div>
  );
}

export default App;
