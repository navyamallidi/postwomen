import { useState, useContext } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';

// Components
import CreateTable from './CreateTable';
import CreateJsonText from './CreateJsonText';
import { DataContext } from '../context/DataProvider';

const TabContainer = styled(Box)({
    marginTop: '20px',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const StyledTabs = styled(Tabs)({
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    '& .MuiTabs-indicator': {
        backgroundColor: '#F26B3A',
        height: '4px',
        borderRadius: '4px',
    },
});

const StyledTab = styled(Tab)({
    textTransform: 'none',
    fontWeight: 'bold',
    minWidth: '120px',
    '&.Mui-selected': {
        color: '#F26B3A',
        borderBottom: '2px solid #F26B3A',
    },
    '&:hover': {
        color: '#F26B3A',
        opacity: 1,
    },
});

const TabPanel = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    backgroundColor: '#fff',
    marginTop: theme.spacing(2),
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const SelectTab = () => {
    const [value, setValue] = useState(0);
    const { paramData, setParamData, headerData, setHeaderData } = useContext(DataContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContainer>
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="tabs"
            >
                <StyledTab label="Params" />
                <StyledTab label="Headers" />
                <StyledTab label="Body" />
            </StyledTabs>
            <TabPanel
                role="tabpanel"
                hidden={value !== 0}
                id={`simple-tabpanel-${0}`}
                aria-labelledby={`simple-tab-${0}`}
            >
                <CreateTable text={'Query Params'} data={paramData} setData={setParamData} />
            </TabPanel>
            <TabPanel
                role="tabpanel"
                hidden={value !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
            >
                <CreateTable text={'Headers'} data={headerData} setData={setHeaderData} />
            </TabPanel>
            <TabPanel
                role="tabpanel"
                hidden={value !== 2}
                id={`simple-tabpanel-${2}`}
                aria-labelledby={`simple-tab-${2}`}
            >
                <CreateJsonText />
            </TabPanel>
        </TabContainer>
    );
}

export default SelectTab;
