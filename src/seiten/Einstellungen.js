import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navigation from '../container/Navigation/Navigation';
import Footline from '../container/Footline/Footline';

function Einstellungen() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm"sx={{ bgcolor: '#cfe8fc', height: 600 }}>
            <Navigation />
                <p>Einstellungen</p>
            </Container>
            
            <Container maxWidth="sm"sx={{ bgcolor: '#cfe8fc', height: 100 }}>
                <Footline />
            </Container>
        </React.Fragment>
    );
}

export default Einstellungen