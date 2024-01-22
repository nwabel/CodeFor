import FooterLoggedIn from '@/Components/FooterLoggedIn';
import SliderDashboard from '@/Components/Dashboard/SliderDashboard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PromosiList from '@/Components/Dashboard/PromosiList';

export default function Dashboard({ auth }) {
    return (

        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <nav className=" z-40 bg-white sticky -top-px text-base font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-6 md:pb-6 -mt-px dark:bg-slate-900 dark:border-gray-800 dark:shadow-slate-700/[.7]" aria-label="Jump links">
                <div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900">
                    <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
                        <a className="inline-flex items-center gap-x-2 text-blue-400 hover:text-gray-500 dark:text-blue-500 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/kompe">Dashboard</a>
                    </div>
                    <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
                        <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-blue-500 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/kompe">Kompetisi</a>
                    </div>
                    <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
                        <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Bootcamp & Workshop</a>
                    </div>
                    <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
                        <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/roadmap">Roadmap</a>
                    </div>
                    <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
                        <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Seminar</a>
                    </div>
                    <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
                        <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/forums">Forum</a>
                    </div>
                </div>
            </nav>

            <div className='max-w-7xl xl:ms-32 xl:mt-7 p-4'>
                <SliderDashboard />
            </div>
            
            <div className='max-w-7xl xl:ms-32'>
                <PromosiList />
            </div>

            <FooterLoggedIn />

        </AuthenticatedLayout>

    );
}
