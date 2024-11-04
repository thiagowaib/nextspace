interface Post {
    title: string;
    slug: string;
    content: string;
}

interface Props {
    params: {
        slug: string;
    };
}

export default async function BlogPostPage({params}:Props) {
    const posts:Post[] = await fetch('http://localhost:3000/api/content')
                                  .then((res) => res.json());
    const post = posts.find((post) => post.slug === params.slug)!;

    return (
        <div className="ml-8 mt-16">
            <h1 className="text-2xl font-semibold mb-2">{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}