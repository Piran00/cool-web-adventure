"use client"
import { useRouter } from 'next/navigation';
export default function Error() {
    const router = useRouter();

    return (
        <div className="relative w-screen h-screen">
            {/* Centered Text */}
            <div className="absolute top-0 w-full text-center p-4 text-white bg-black bg-opacity-50">
                <h1 className="text-3xl font-bold">You seem to have gotten lost</h1>
                <p className="text-lg cursor-pointer"  onClick={() => router.back()}>Sorry, the page you are looking for does not exist.</p>
            </div>

            {/* Full-Screen Image */}
            <img
                src="404error.jpg"
                className="w-screen h-screen object-cover"
                alt="404 Error"
            />
        </div>
    );
}
