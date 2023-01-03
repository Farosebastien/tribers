import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import TripsPage from "./Pages/TripsPage/TripsPage";
import Values from "./Pages/ValuesPage/ValuesPage";
import Login from "./Containers/Login/Login";
import Signup from "./Containers/Signup/Signup";
import Error from "./Pages/ErrorPage/ErrorPage";
import { useLogin } from "./utils/Hooks";
import Blog from "./Containers/Blog/Blog";

function Routing () {
    let routes = "";

    const { isConnected } = useLogin();

    if (!isConnected) {
        routes = (
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/trips" element={<TripsPage />} />
                <Route path="/values" element={<Values />} />
                <Route path="/blog" element={<Login/>} />
                <Route path="/blog/signup" element={<Signup/>} />
                <Route path="*" element={<Error />} />
            </Routes>
        )
    } else (
        routes = (
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/trips" element={<TripsPage />} />
                <Route path="/values" element={<Values />} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="*" element={<Error />} />
            </Routes>
        )
    )

    return routes;
}

export default Routing