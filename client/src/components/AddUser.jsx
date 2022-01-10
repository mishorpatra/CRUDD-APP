import {FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography} from '@material-ui/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../service/api'

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = {
    name: '',
    username: '',
    email: '',
    mobile: ''
}

const AddUsers = () => {
    const classes = useStyle()

    const navigate = useNavigate()

    const [user, setUser] = useState(initialValues)
    const { name, username, email, mobile } = user

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})   
    }
    const addUserDetails = async () => {
        
        await addUser(user)
        
        navigate('/all')
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant='h4' >Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <FormControl>
                <InputLabel>Mobile</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='mobile' value={mobile} />
            </FormControl>
            <Button variant='contained' color='primary' onClick={() => addUserDetails()}>Add User</Button>
        </FormGroup>
    )
}

export default AddUsers