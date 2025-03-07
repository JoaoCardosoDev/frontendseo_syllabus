'use client';
import { useMutation, useQueryClient } from "@tanstack/react-query";

function CreateArticle(newArticle) {
    return fetch('https://67ca2fd7102d684575c4b4f8.mockapi.io/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArticle),
    }).then((res) => res.json());
}

function AddArticleForm() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: CreateArticle,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["articles"] });
        },
    });

    function handleSubmit(event) {
        event.preventDefault();
        const title = event.target.title.value;
        const content = event.target.content.value;
        mutation.mutate({ title, content });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" required />
            <input name="content" placeholder="Content" required />
            <button type='submit'> Criar Artigo </button>
            {mutation.isLoading && <p>Submitting...</p>}
            {mutation.isError && <p>Error: {mutation.error.message}</p>}
            {mutation.isSuccess && <p>Article created successfully!</p>}
        </form>
    );
}

export default AddArticleForm;