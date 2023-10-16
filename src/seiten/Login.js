import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Navigation from '../container/Navigation/Navigation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

//Import für Passwort
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';




function Login() {

    const [showPassword, setShowPassword] = React.useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    
    return (
        <React.Fragment>
            <Navigation />
        <CssBaseline />
            <Container maxWidth="sm"sx={{ bgcolor: '#cfe8fc', height: 600 }}>
            <br />
            <h2>Login</h2>
            <br />
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="nameForSignIn" label="Benutzername" />
                </Box>
                <br />
                <Box sx={{'& > :not(style)': { m: 1},}}>
                    <div>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel id="pwdForSignIn" htmlFor="pwdForSignIn" >Passwort</InputLabel>
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                        </FormControl>
                    </div>
                </Box>
                <br />
                <Button 
                    


                    
                      variant="contained">
                    Login
                </Button>
            </Container>
        </React.Fragment>      
        );

    }
    
//function checkLogin() {
//    var username = document.getElementById('nameForSignIn').value;
//    var password = document.getElementById('pwdForSignIn').value;
//    if ( username == "Jan" && password == "123"){
//       alert ("funktioniert");
       //<NavLink exact to='/Zeiterfassung'></NavLink>
    //return false;
//    }
//    else{
//        alert(password+" "+"geht nicht");
    //return false;
//    }
//}


export default Login