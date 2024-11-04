import FollowButton from "@/components/FollowButton/FollowButton";
import { prisma } from "@/lib/prisma"
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string
    }
}

export async function generateMetadata({params}:Props): Promise<Metadata> {
    const {id} = await params;
    const user = await prisma.user.findUnique({where: {id}});
    return {
        title: `${user?.name ?? "unknown"}`
    };
}

export default async function UserProfile({params}:Props) {
    const {id} = await params;
    const user = await prisma.user.findUnique({where: {id}})

    if(!user) {
        notFound();
    }

    const {name, bio, image} = user;
    return (
        <div className="m-16">
            <h1 className="text-2xl font-semibold">{name}</h1>

            <img 
                className="w-40 my-4"
                src={image ?? '/mememan.webp'} 
                alt={`${name??"-"}'s profile`} 
            />

            <h3 className="italic">Bio ~</h3>
            <p className="italic font-light">"{bio ?? "??"}"</p>

            <FollowButton targetUserId={await id}/>
        </div>
    )
}