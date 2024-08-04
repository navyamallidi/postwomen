import { useState } from 'react';
import { TextField, Checkbox, TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/system';

const TableCellStyled = styled(TableCell)({
    padding: '10px 15px',
    border: '1px solid rgba(224, 224, 224, 1)',
    borderCollapse: 'collapse',
});

const TextFieldStyled = styled(TextField)({
    width: '100%',
    '& input': {
        padding: '0 8px',
    },
});

const CheckboxStyled = styled(Checkbox)({
    padding: '8px',
});

const AddRow = ({ addRows, rowId, data, setData }) => {
    const [checkCheckbox, setCheckCheckbox] = useState(false);
    
    const handleChange = (e) => {
        const targetId = Number(e.target.name);
        let result = data.find(entry => entry.id === targetId);
        
        if (!checkCheckbox) {
            setCheckCheckbox(true);
            addRows(oldArr => [...oldArr, rowId]);
            result = { ...result, id: rowId, check: true };
        } else {
            setCheckCheckbox(false);
            result = { ...result, id: rowId, check: false };
        }
        
        const index = data.findIndex(value => value.id === targetId);
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = [...data];
            newArray[index] = result;
            setData(newArray);
        }
    };
    
    const onTextChange = (e) => {
        let result = data.find(entry => entry.id === rowId);
        result = { ...result, id: rowId, [e.target.name]: e.target.value };

        const index = data.findIndex(value => value.id === rowId);
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = [...data];
            newArray[index] = result;
            setData(newArray);
        }
    };
    
    return (
        <TableRow>
            <TableCellStyled>
                <CheckboxStyled 
                    checked={checkCheckbox}
                    size='small' 
                    name={rowId}
                    onChange={handleChange} 
                />
            </TableCellStyled>
            <TableCellStyled>
                <TextFieldStyled
                    variant="outlined"
                    size="small"
                    name="key"
                    onChange={onTextChange}
                    placeholder="Key"
                />
            </TableCellStyled>
            <TableCellStyled>
                <TextFieldStyled
                    variant="outlined"
                    size="small"
                    name="value"
                    onChange={onTextChange}
                    placeholder="Value"
                />
            </TableCellStyled>
        </TableRow>
    );
};

export default AddRow;
