import { Form } from "react-router-dom";

function Signup(props){
    return <div>
        <h1>Signup</h1>
        <Form action="/signup" method="post">
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" value="Signup" />
        </Form>
    </div>
}

export default Signup;