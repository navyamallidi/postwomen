import { useContext } from 'react';
import { Select, MenuItem, TextField, Box, Button, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/system';
import { DataContext } from '../context/DataProvider';

const Component = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
});

const StyledSelect = styled(Select)({
    width: 150,
    height: 40,
    background: '#F6F6F6',
    borderRadius: '8px',
});

const StyledButton = styled(Button)({
    width: 100,
    height: 40,
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#303f9f',
    },
});

const StyledTextField = styled(TextField)({
    width: '100%',
    background: '#F6F6F6',
    borderRadius: '8px',
});

const Spacer = styled(Box)({
    width: '30px',  // Increased spacing
});

const Form = ({ onSendClick }) => {
    const { formData, setFormData } = useContext(DataContext);

    const onUrlChange = (e) => {
        setFormData({ ...formData, url: e.target.value });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, type: e.target.value });
    }

    return (
        <Component>
            <FormControl variant="outlined" size="small" sx={{ marginRight: '30px' }}>
                <InputLabel>Type</InputLabel>
                <StyledSelect 
                    value={formData.type} 
                    onChange={handleChange}
                    label="Type"
                >
                    <MenuItem value={'POST'}>POST</MenuItem>
                    <MenuItem value={'GET'}>GET</MenuItem>
                </StyledSelect>
            </FormControl>
            <Spacer />
            <StyledTextField 
                size="small" 
                placeholder="Enter URL"
                onChange={onUrlChange}
                variant="outlined"
                sx={{ marginRight: '30px' }}
            />
            <StyledButton variant="contained" onClick={onSendClick}>Send</StyledButton>
        </Component>
    )
}

export default Form;
