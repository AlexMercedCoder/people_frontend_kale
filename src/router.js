import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { peopleLoader, personLoader, mainLoader } from "./loaders";
import { createAction, updateAction, deleteAction, signupAction, loginAction } from "./actions";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Main/>} loader={mainLoader}>
            <Route path="signup" element={<Signup/>} action={signupAction}/>
            <Route path="login" element={<Login/>} action={loginAction}/>
        </Route>
        <Route path=":id" element={<Show/>} loader={personLoader}/>
        <Route path="create" action={createAction}/>
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
        <Route path="dashboard" element={<Index/>} loader={peopleLoader}/>
    </Route>
))

export default router;