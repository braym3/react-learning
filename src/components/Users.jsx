import { Link, useParams } from 'react-router-dom';

const Users = () => {
    const { id } = useParams();

    return( 
        <div className='content'>
            <h1> Users page. </h1>
            <p>Select a user:</p>

            <ul>
                 <li>
                     <Link to="/users/1">User 1</Link>
                 </li>
                 <li>
                     <Link to="/users/2">User 2</Link>
                 </li>
                 <li>
                     <Link to="/users/3">User 3</Link>
                 </li>
             </ul>
             <p>Hello user {id}</p>
        </div>
    );
};

export default Users;