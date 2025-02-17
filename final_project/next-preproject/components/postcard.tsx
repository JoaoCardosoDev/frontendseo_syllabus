import React from 'react'
import { Post } from './model'

export default function PostCard(post: Post) {
  return (
    <div>
        title: {post.title}
        body: {post.body}
    </div>
  )
}
