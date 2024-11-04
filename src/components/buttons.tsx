'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";



export function SignInButton() {
    const {data: session, status} = useSession();

    if(status === 'loading') {
        return <div className="text-white">...</div>
    }

    if(status === 'authenticated') {
        return (
            <div className="flex text-white">
            <Link className="mr-4" href={'/dashboard'}>
                <Image
                    src={session.user?.image ?? '/mememan.webp'}
                    width={32}
                    height={32}
                    alt="Your name"
                />
            </Link>
            <SignOutButton/>
            </div>
        )
    }

    return <button className="text-white" onClick={() => signIn()}>Sign in</button>
}

export function SignOutButton() {
    return <button className="text-white" onClick={() => signOut()}>Sign out</button>
}