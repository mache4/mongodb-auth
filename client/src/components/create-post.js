import React, { useRef } from 'react';
import axios from "axios";

import "../styles/create-post.scss";

export default function CreatePost() {
    const titleRef = useRef("");
    const messageRef = useRef("");

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/posts", {
            title: titleRef.current.value,
            message: messageRef.current.value
        });
    }

    return (
        <form className="create-post" onSubmit={submit}>
            <h1>CREATE-POST</h1>
            <input type="text" placeholder="Title" ref={titleRef} />
            <textarea placeholder="Message" ref={messageRef} />
            <button type="submit">Submit</button>
        </form>
    )
}