'use client';
import { useQuery } from "@tanstack/react-query";

function fetchArticles() {
    return fetch('https://67ca2fd7102d684575c4b4f8.mockapi.io/api/articles').then((res) => res.json());
}

function ArticlesList() {
    const { data, error, isLoading } = useQuery({ queryKey: ['articles'], queryFn: fetchArticles }); // Fixed queryKey here

    if (isLoading) return <p> A carregar... </p>;
    if (error) return <p> Erro: {error.message} </p>;

    return (
        <ul>
            {data.map((post) => (
                <li key={post.id}>
                    {post.title} - {post.content}
                </li>
            ))}
        </ul>
    );
}

export default ArticlesList;