type User = {
    name: string;
    age: number;
    email: string;
}

type Profile = {
    user: User;
    posts?: Array<Post>
}

type Post = {
    user: User;
    title: string;
    body: string;
    date: string;
    commentsActive: boolean;
}

type Comments = {
    user: User,
    body: string,
    date: string,
    visible: boolean,
}

const Antonio:User = {
    name: "Antonio",
    age: 80,
    email: "antonio@mail.com",
}

const profile:Profile = {
    user: Antonio,
    posts: []
}

const post:Post = {
    user: Antonio,
    title: "string",
    body: "string",
    date: "string",
    commentsActive: true
}

const comments:Comments = {
    user: Antonio,
    body: "comment",
    date: "01-01-2001",
    visible: true,
}


