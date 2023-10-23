'use client'
import Lottie from "lottie-react";
import notfoundanimation from "@/styles/animations/404animation.json"
import Link from "next/link";

export default function NotFound() {

    return (
        <div className="flex items-center justify-center flex-col">
            <Lottie animationData={notfoundanimation} autoplay={true}></Lottie>
            <Link
                href='/'
                className="px-2 py-2 rounded-md bg-white text-black hover:bg-opacity-80"
            >Go Back Home</Link>
        </div>
    )
}