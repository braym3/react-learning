import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop Now</Link> 
                    </li>
                    <li>
                        <Link to={`/users`}>Users</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/404">Not Found</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Nav;