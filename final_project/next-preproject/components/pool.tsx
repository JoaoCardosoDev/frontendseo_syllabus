'use client'

import React, { useEffect, useState } from 'react';
import { PostPool } from './model';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Pool() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const pool = new PostPool();
        pool.fetchPosts().then(fetchPosts => {
            setPosts(fetchPosts);
        });
    }, []);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4'>
            {posts.map((post, index) => (
                <div key={index}>
                    <Card>
                        <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>Username here PH</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{post.body}</p>
                        </CardContent>
                        <CardFooter>
                            <p>Voting system here PH</p>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    );
}