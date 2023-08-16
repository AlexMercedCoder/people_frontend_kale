import { Outlet, Link } from "react-router-dom";

function Main(props){
    return <div>
        <Link to="/signup"><button>Signup</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Outlet></Outlet>
    </div>
}

export default Main;