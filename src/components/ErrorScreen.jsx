import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
});

const ErrorMessage = styled(Typography)({
    color: '#f44336', 
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
});

const Description = styled(Typography)({
    color: '#757575',
    fontSize: '16px',
    marginBottom: '24px',
});

const ErrorScreen = () => {
    return (
        <Container>
            <ErrorMessage>An error has occurred</ErrorMessage>
            <Description>We are unable to process your request at the moment. Please try again later.</Description>
        </Container>
    );
};

export default ErrorScreen;
