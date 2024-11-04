import Link from "next/link";

interface Props {
    id: string;
    name: string|null;
    age: number|null;
    image: string|null;
}

export default function UserCard({id, name, age, image}: Props) {
    return(
        <div className="flex flex-col items-center text-center m-2 p-4 border-2 rounded-md border-gray-300 hover:border-gray-700 transition-colors">
            <img
                src={image??'/mememan.wbp'}
                alt={`${name??"-"}'s profile`}
                className="w-40 transition-transform hover:scale-105"
            />
            <div className="mt-2">
                <h3 className="font-semibold text-xl transition-colors hover:bg-black hover:text-white p-1 rounded-sm">
                    <Link href={`/users/${id}`}>{name??"-"}</Link>
                </h3>
                <p>Age: {age??"-"}</p>
            </div>
        </div>
    )
}