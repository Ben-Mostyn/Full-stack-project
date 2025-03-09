import { gql, useQuery } from "@apollo/client";


const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            id
            userName
        }
    }
`

type UsersType = {
    id: number,
    userName: string
}

const Users = () => {

    const { loading, data, error } = useQuery(GET_ALL_USERS);
    if (loading) return <p>Loading users</p>
    if (error) return <p>Issue fetching users</p>
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {data.getAllUsers.map((user: UsersType) => {
                    return <li>{user.userName}</li>
                })}
            </ul>
        </div>
    );
}

export default Users;