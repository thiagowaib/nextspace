const posts = [
    {
        title: 'Post Title 1',
        slug: 'post-1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,. Integer nec odio.'
    },
    {
        title: 'Post Title 2',
        slug: 'post-2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,. Integer nec odio.'
    },
    {
        title: 'Post Title 3',
        slug: 'post-3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,. Integer nec odio.'
    },
    {
        title: 'Post Title 4',
        slug: 'post-4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,. Integer nec odio.'
    },
    {
        title: 'Post Title 5',
        slug: 'post-5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,. Integer nec odio.'
    },
    {
        title: 'Post Title 6',
        slug: 'post-6',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,. Integer nec odio.'
    },
]

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function GET() {

    const session = await getServerSession();

    return NextResponse.json(posts);
}