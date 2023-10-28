import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navigation from '../container/Navigation/Navigation';
import Footline from '../container/Footline/Footline';
import './Zeiterfassung.css';
import * as XLSX from 'xlsx';

function Zeiterfassung() {
    const [entries, setEntries] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = e.target.date.value;
        const time = e.target.time.value;
    
        const newEntries = [...entries, { date, time }];
        const workedHoursList = calculateWorkedHours(newEntries);
    
        const updatedEntries = newEntries.map((entry, index) => ({
            ...entry,
            workedHours: workedHoursList[index]
        }));
        
        setEntries(updatedEntries);
    };

    const handleDownload = () => {
        const exportData = entries.map(entry => ({
            Datum: entry.date,
            Zeit: entry.time,
            'Arbeitszeit (Stunden)': entry.workedHours || ''
        }));
        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Zeitdaten");
        XLSX.writeFile(wb, 'zeit.xlsx');
    };

    const calculateWorkedHours = (entries) => {
        return entries.reduce((acc, curr, index) => {
            if (index % 2 !== 0 && entries[index - 1]) {
                const start = new Date(`1970-01-01T${entries[index - 1].time}:00Z`);
                const end = new Date(`1970-01-01T${curr.time}:00Z`);
                const difference = (end - start) / (1000 * 60 * 60);
                acc.push(difference.toFixed(2));
            } else {
                acc.push(null);
            }
            return acc;
        }, []);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{ bgcolor: '#cfe8fc', height: 'auto' }}>
                <Navigation />
                <p>Zeiterfassung</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="date" name='date' />
                        <br/>
                        <input type="time" name='time' />
                        <br /><br />
                        <input type="submit" value="Stempeln1" />
                        <br/>
                        <br/>
                    </label>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th>Zeit</th>
                            <th>geleistet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.date}</td>
                                <td>{entry.time}</td>
                                <td>{entry.workedHours || ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br/>
                <br/>
                <button onClick={handleDownload}>Download</button>
            </Container>

            <Container maxWidth="sm" sx={{ bgcolor: '#cfe8fc', height: 100 }}>
                <Footline />
            </Container>
        </React.Fragment>
    );
}

export default Zeiterfassung;
