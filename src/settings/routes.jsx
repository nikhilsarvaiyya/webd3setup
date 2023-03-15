import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Main from '../layout/Main';
// import ErrorPage from "../component/comman/error-page";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/authentication/login";
import Contact from '../pages/Contact';

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route  element={<Main />}>
            <Route path="" element={<Home />}></Route>
            <Route path="About" element={<About />}></Route>
            <Route path="Contact" key="Conta" element={<Contact />}></Route>
            <Route path="Login" element={<Login />}></Route>
        </Route>

    )
);

export { router }