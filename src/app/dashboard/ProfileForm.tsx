'use client';

import { redirect } from "next/navigation";

interface Props {

}
export default function ProfileForm({user}:any){

    const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const body = {
            name: formData.get('name'),
            bio: formData.get('bio'),
            age: formData.get('age'),
            image: formData.get('image'),
        };

        const res = await fetch('/api/user', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(res.ok) {
            redirect('/users')
        }
    };

    return (
        <div className="flex flex-col w-full items-center">
            <h2>Edit Your Profile</h2>
            <form onSubmit={updateUser} className="flex flex-col text-gray-950 w-1/2 mt-4">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" defaultValue={user?.name ?? ''} className="border-2 p-1 italic mb-2"/>
                <label htmlFor="bio">Bio</label>
                <textarea 
                    name="bio"
                    cols={30}
                    rows={10}
                    defaultValue={user?.bio??''}
                    className="border-2 p-1 italic mb-2"></textarea>
                <label htmlFor="age">Age</label>
                <input type="text" name="age" defaultValue={user?.age??0} className="border-2 p-1 italic mb-2"/>
                <label htmlFor="image">Profile Image URL</label>
                <input type="text" name="image" defaultValue={user?.image ?? ''} className="border-2 p-1 italic mb-2"/>

                <button type="submit" className="bg-gray-950 w-fit px-4 py-2 mx-auto text-gray-50 font-semibold rounded-md mt-4 transition-shadow shadow-md hover:shadow-xl shadow-black  ">Save</button>
            </form>
        </div>
    )
}