import "./app.scss";
import Auth from "./components/auth";
import CreatePost from "./components/create-post";
import Posts from "./components/posts";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>TEST APP</h1>
                <CreatePost />
                <Auth />
                <Posts />
            </div>
        </BrowserRouter>
    );
}

export default App;