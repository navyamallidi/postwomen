import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Box, TextareaAutosize } from '@mui/material';
import { styled } from '@mui/system';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Set your primary color here
        },
        secondary: {
            main: '#dc004e', // Set your secondary color here
        },
    },
});

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '14px',
    backgroundColor: '#f9f9f9',
    resize: 'vertical',
    color: '#333',
    '&:disabled': {
        borderColor: theme.palette.primary.main,
        backgroundColor: '#f9f9f9',
    },
}));

const Container = styled(Box)({
    marginTop: '20px',
    padding: '0 16px',
});

const Response = ({ data }) => {
    let readableobj = '{\n';
    for (let key in data) {
        readableobj += `\t${key}: ${typeof data[key] === 'string' ? `"${data[key]}"` : data[key]}`;
        if (Object.keys(data).pop() !== key) {
            readableobj += ',\n';
        }
    }
    readableobj += '\n}';

    return (
        <Container>
            <Typography variant="h6" gutterBottom>Response</Typography>
            <StyledTextarea 
                minRows={5}
                maxRows={10}
                disabled
                value={readableobj}
            />
        </Container>
    );
};

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Response data={{ key1: 'value1', key2: 'value2' }} />
    </ThemeProvider>
);

export default App;
