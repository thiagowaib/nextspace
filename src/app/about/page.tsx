export const dynamic = 'force-static';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Us',
    description: "We are a social media company"    
}

export default async function About() {
    return (
        <div className="ml-8 mt-16">
            <h1 className="text-2xl font-semibold mb-2">About Us</h1>
            <p>We are a social media company!</p>
        </div>
    )
}