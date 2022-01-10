import { Box } from '@material-ui/core'


const notFound = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqI3lHFjBbLelg5rGnkZVukHUI2cd9cnEGOQ&usqp=CAU"
const NotFound = () => {
    return(
        <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={notFound} style={{minWidth: '450px'}} />
        </Box>
    )
}

export default NotFound