import { getUsers, deleteUser } from "../service/api"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Button } from "@material-ui/core"

const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px',
        fontSize: 18
    },
    thread: {
        '& > *': {
            backgroundColor: '#000',
            color: '#fff',
            fontSize: 16
        }
    },
    row: {
        '& > *': {
            fontSize: 16
        }
    }
})

const AllUsers = () => {
    const classes = useStyle()
    const [users, setUsers] = useState([])
    

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        let response = await getUsers()
        console.log(response.data)
        setUsers(response.data)
    }
    const deleteUserData = async (id) => {
        await deleteUser(id)
        getAllUsers()
    }
   

    return(
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thread}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row} key={user._id} >
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.mobile}</TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary' style={{marginRight: '10px'}} component={Link} to={`/edit/${user._id}`} >Edit</Button>
                                <Button variant='contained' color='secondary' onClick={() => deleteUserData(user._id)} >Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers