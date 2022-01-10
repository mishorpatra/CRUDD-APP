import {FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography} from '@material-ui/core'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser, getUsers } from '../service/api'

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

const EditUser = () => {
    const classes = useStyle()
    const [user, setUser] = useState(initialValues)
    const {name, username, email, mobile} = user
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadUserData()
    }, [])

    const loadUserData = async () => {
        const response = await getUsers(id)
        setUser(response.data)

    }
    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})   
    }
    const editUserToDb = async () => {
        await editUser(id, user)
        navigate('/all')
    }
    return (
        <FormGroup className={classes.container}>
            <Typography variant='h4' >Edit User</Typography>
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
            <Button variant='contained' color='primary' onClick={() => editUserToDb()}>Edit User</Button>
        </FormGroup>
    )
}

export default EditUser