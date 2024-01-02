import { Head, Link } from "@inertiajs/react";

const Cards = () => {
    return (
        <section className=" bg-[#F8FAFB] dark:bg-dark lg:pb-[90px] lg:pt-[120px] ">
            <div className="flex flex-wrap">
                <div className="w-full px-4">
                    <div className="mx-auto mb-[60px] max-w-[700px] text-center lg:mb-20">
                        <span className="mb-2 block text-lg font-semibold text-primary">
                            Kompetisi yang lagi buka pendaftaran.
                        </span>
                        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                            Tertarik? Sung daftar aza.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-1 gap-x-40 mt-11 mx-20 bg-[#F8FAFB]">
                <div className="grid grid-cols-3 gap-4 mx-auto px-4 ">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description"></img>
                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Card title
                            </h3>
                            <p className="mt-1 text-gray-500 dark:text-gray-400">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description"></img>
                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Card title
                            </h3>
                            <p className="mt-1 text-gray-500 dark:text-gray-400">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description"></img>
                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Card title
                            </h3>
                            <p className="mt-1 text-gray-500 dark:text-gray-400">
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                            <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards