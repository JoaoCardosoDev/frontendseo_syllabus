import React, { useEffect, useState } from 'react';
import { PostPool } from '../model';

export default function Pool() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const pool = new PostPool();
        pool.fetchPosts().then(fetchPosts => {
            setPosts(fetchPosts);
        });
    }, []);

    return (
        <div>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}