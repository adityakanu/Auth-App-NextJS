"use client";
import axios from "axios";
import { log } from "console";
import Link from "next/Link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
    const router = useRouter();

    const logout = async () => {
        try {
            axios.get("/api/users/logout");
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
            router.push("/login");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <hr />
            <button
                onClick={logout}
                className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
                Logout
            </button>
        </div>
    );
}
