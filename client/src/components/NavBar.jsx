import { AppBar, Toolbar, makeStyles } from "@material-ui/core"
import { Link } from 'react-router-dom'
const useStyle = makeStyles({
    header: {
        background: '#111'
    },
    toolbar: {
        '& > *': {
            marginRight: 50,
            color: '#fff',
            textDecoration: 'none'
        }
    }
})

const NavBar = () => {
    const classes = useStyle()
    return (
        <AppBar className={classes.header} position='static'>
            <Toolbar className={classes.toolbar}>
                <Link to='/' >Home</Link>
                <Link to='/all'>Student Enries</Link>
                <Link to='/add'>Add Student</Link>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar