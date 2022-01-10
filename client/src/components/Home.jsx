import { makeStyles, Box, Typography, Button } from "@material-ui/core"
import { useNavigate } from 'react-router-dom'


const useStyle = new makeStyles({
    txtBx: {
        color: "#fff",
        border: '1px solid #fff',
        height: '30vh',
        width: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wallpaper: {
        height: 592,
        background: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80)', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: '18px',
        fontWeight: 600
    },
    addBtn: {
        marginTop: 20,
        fontWeight: 600
    }
})

const Home = () => {
    const classes = useStyle()
    const navigate = useNavigate()
    const toAddPage = () => {
        navigate('/add')
    }
    return (
        <Box className={classes.wallpaper}>
            <Box className={classes.txtBx}>
            <Typography className={classes.title}>Welcome to the Region of Knowledge. Learn and grow.</Typography>        
            </Box>
            <Button variant="contained" className={classes.addBtn} onClick={() => toAddPage()} >New Entry</Button>
        </Box>
    )
}

export default Home