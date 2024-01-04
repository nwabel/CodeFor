import ApplicationLogo from '@/Components/MustIncluded/ApplicationLogo';
import Navbar from '@/Components/NavBar';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return ( <>
        <Navbar />
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                <span className="text-7xl font-bold mb-11 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">CodeFun.</span>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
        </>
    );
}
