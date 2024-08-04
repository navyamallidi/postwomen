import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    navbar: {
        background: ['#FFEBD4', '!important'],  
        position: ['static', '!important'],
        height: [60, '!important'],
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        color: '#000',  
        fontWeight: '500', 
        fontSize: '1.5rem', 
        letterSpacing: '1.2px', 
        fontFamily: 'Roboto, sans-serif', 
    },
    accentBox: {
        width: '100%',
        height: 4,
        background: 'linear-gradient(to right, #ff4081, #ff9800)', 
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.navbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Postwomen
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.accentBox}></Box> {/* Gradient underline */}
        </>
    );
};

export default Header;
