import React from "react"
import { Link, Head } from '@inertiajs/react';
import FooterLoggedIn from "@/Components/FooterLoggedIn";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import KompetisiList from "@/Components/Kompetisi/KompetisiList";
import PaginateKompe from "@/Components/Kompetisi/PaginateKompe";
import ScrollProgress from "@/Components/UserExperience/ScrollProgress";
import BackToTopButton from "@/Components/UserExperience/BackToTop";

export default function Kompetisi({ auth, data }) {
    const completion = ScrollProgress();
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
            >

                <nav className=" z-40 bg-white sticky -top-px text-base font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-6 md:pb-6 -mt-px dark:bg-slate-900 dark:border-gray-800 dark:shadow-slate-700/[.7]" aria-label="Jump links">
                    <div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900">
                        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
                            <a className="inline-flex items-center gap-x-2  hover:text-gray-500  dark:text-blue-500 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/dashboard">Dashboard</a>
                        </div>
                        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
                            <a className="inline-flex items-center gap-x-2 text-blue-400 hover:text-gray-500  dark:text-blue-500 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/kompe">Kompetisi</a>
                        </div>
                        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
                            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Bootcamp & Workshop</a>
                        </div>
                        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
                            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Roadmap</a>
                        </div>
                        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
                            <a className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Seminar</a>
                        </div>
                        <div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
                            <a className="inline-flex items-center gap-x-2  hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/forums">Forum</a>
                        </div>
                    </div>
                    <span
                        style={{ transform: `translateX(${completion - 100}%)` }}
                        className="absolute bg-gradient-to-r from-blue-500 to-teal-400 h-1 w-full bottom-0"
                    />
                </nav>

                <Head title="Kompetisi" />
                {console.log(data)}

                <div className="flex justify-center flex-col-4 lg:flex-row lg:flex-wrap lg:item-stretch items-center gap-6 p-4">
                    <KompetisiList data={data.data} />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <PaginateKompe meta={data.meta} />
                </div>

                <BackToTopButton />

                <FooterLoggedIn />
            </AuthenticatedLayout>
        </>
    );
}