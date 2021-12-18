import React, { useEffect, useState } from 'react';
import axios from "axios";
import Post from './post';

export default function Posts() {
    const [postsData, setPostsData] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:5000/posts")
            .then((response) => {
                setPostsData(response.data)
            })
            .catch(err => console.log(err.message))
    }, []);

    let posts = null;
    if (postsData === 0)
        posts = <h1>No data.</h1>;
    else
        posts = postsData.map(post => {
            return <Post
                title={post.title}
                message={post.message}
                key={post._id} />
        });

    return (
        <div className="posts">
            {posts}
        </div>
    )
}
