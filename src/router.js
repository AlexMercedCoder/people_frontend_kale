import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import { peopleLoader, personLoader } from "./loaders";
import { createAction, updateAction, deleteAction, loginAction, signupAction } from "./actions";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Main/>}>
          <Route path="login" element={<Login/>} action={loginAction}/>
          <Route path="signup" element={<Signup/>} action={signupAction}/>
        </Route>
        <Route path=":id" element={<Show/>} loader={personLoader}/>
        <Route path="create" action={createAction}/>
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
        <Route path="dashboard" element={<Index/>} loader={peopleLoader}/>
    </Route>
))

export default router;