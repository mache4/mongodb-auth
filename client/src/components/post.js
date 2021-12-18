import React from 'react';
import "../styles/post.scss";

export default function Post(props) {
    return (
        <div className="post">
            <h1>Title: {props.title}</h1>
            <p>Message: {props.message}</p>
        </div>
    )
}
