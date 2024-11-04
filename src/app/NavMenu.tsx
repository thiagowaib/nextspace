import Link from "next/link";
import Image from "next/image";
import { SignInButton } from "../components/buttons";

export default function NavMenu() {
    return (
        <nav className="flex flex-row justify-between items-center px-8 py-4 bg-blue-600">
            <Link href={'/'}>
                <Image
                    src="/logo.svg"
                    width={216}
                    height={30}
                    alt="NextSpace Logo"
                />
            </Link>
            <ul className="flex text-white">
                <li className="px-2 mx-2">
                    <Link href={"/about"}>About</Link>
                </li>
                <li className="px-2 mx-2">
                    <Link href={"/blog"}>Blog</Link>
                </li>
                <li className="px-2 mx-2">
                    <Link href={"/users"}>Users</Link>
                </li>
            </ul>
            <SignInButton />
        </nav>
    );
}