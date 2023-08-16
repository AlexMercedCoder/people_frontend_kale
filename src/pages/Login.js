import { Form } from "react-router-dom";

function Login(props){
    return <div>
    <h1>Login</h1>
    <Form action="/login" method="post">
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="Login" />
    </Form>
</div>
}

export default Login;