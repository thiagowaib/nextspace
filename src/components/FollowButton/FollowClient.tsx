'use client'

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface Props {
    targetUserId: string;
    isFollowing: boolean;
}

export default function FollowClient({targetUserId, isFollowing}:Props) {

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);
    const isMutating = isFetching||isPending;

    const follow = async () => {
        setIsFetching(true);

        const res = await fetch('/api/follow', {
            method: 'POST',
            body: JSON.stringify({targetUserId}),
            headers: {'Content-Type':'application/json'}
        });

        setIsFetching(false);

        startTransition(() => {
            // Refresh the current route:
            // - Makes a new request ot the server for the route
            // - Re-fetches data requests and re-renders Server Components
            // - Send the updated React Server Component payload to the Client
            // - The client merges the payload without losing unaffected client-site React State or Browser State
            router.refresh();
        })
    }

    const unFollow = async () => {
        setIsFetching(true);

        const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
            method: 'DELETE',
        });

        setIsFetching(false);

        startTransition(() => {
            router.refresh();
        })
    }

    if(isFollowing) {
        return (
            <button onClick={unFollow}>
                {!isMutating ? 'Unfollow' : '...'}
            </button>
        )
    } else {
        return (
            <button onClick={follow}>
                {!isMutating ? 'Follow' : '...'}
            </button>
        )
    }

}