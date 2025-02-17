export interface User {
    id: number
    name: string
    email: string
}

export interface Post {
    id: number
    owner: User
    title: string
    body: string
    votes: number
    comments: Comment[]
}

export interface Comment {
    id: number
    owner: User
    post: Post
    body: string
    votes: number
}

export class PostPool {
    posts:[];

    constructor() {
        this.posts = []; 
    }

    async fetchPosts(): Promise<[]> { 
            const response = await fetch('https://dummyjson.com/posts');
            const data = await response.json();
            this.posts = data.posts; 
            return this.posts; 
    }
}