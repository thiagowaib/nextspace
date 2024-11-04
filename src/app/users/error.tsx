'use client';

import { useEffect } from "react";

export default function Error({
    error,
    reset
}: {
    error: Error;
    reset: () => void;
}) {

    useEffect(()=>{
        console.error(error);
    }, [error])
    return (
        <div className="m-16">
            <h2>Something went wrong ._. </h2>
            <button className="bg-gray-950 text-white rounded-sm p-2 mt-2 transition-transform hover:scale-105" onClick={() => reset()}>Try again!</button>
        </div>
    )
}