import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navigation from '../container/Navigation/Navigation';
import Footline from '../container/Footline/Footline';

function Zeiterfassung() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm"sx={{ bgcolor: '#cfe8fc', height: 600 }}>
            <Navigation />
                <p>Zeiterfassung</p>
                    <form>
                        <label>
                        <input type="date"/>
                        
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