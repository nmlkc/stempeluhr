import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navigation from '../container/Navigation/Navigation';
import Footline from '../container/Footline/Footline';
import './Zeiterfassung.css'


function Zeiterfassung() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm"sx={{ bgcolor: '#cfe8fc', height: 600 }}>
            <Navigation />
                <p>Zeiterfassung</p>
                <br/>
                    <form>
                        <label>
                        
                        <input type="date" name='date' />
                        <br/>
                        
                        <input type="time" name='time'/>
                        <br/><br/>
                        <input type="submit" value="Stempeln" onclick="buttonClicked()"/>
                        <script>
                            function buttonClicked() {
                                alert('Button wurde geklickt!!')
                            }
                        </script>
                        

                        </label>

                    </form>
            
            </Container>

            <Container maxWidth="sm"sx={{ bgcolor: '#cfe8fc', height: 100 }}>
                <Footline />
            </Container>
        </React.Fragment>
    );
}

//Bei Zeile 15 zwischen die Container kommt der Seiteninhalt rein.

export default Zeiterfassung