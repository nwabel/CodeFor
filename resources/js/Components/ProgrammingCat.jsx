import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


export default function ProgrammingCat() {
    useEffect(()=> {
        Aos.init({
            duration: 2000,
            delay: 200
        })
    }, []);
    return (
        <>
            {/* <!-- Card Blog --> */}
                
                {/* <!-- Title --> */}
                <div class="max-w-2xl mb-10">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Programming</h2>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">Exciting articles about the newest update on programming world.</p>
                </div>
                {/* <!-- End Title --> */}

                        {/* <!-- Grid --> */}
                <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* <!-- Card --> */}
                    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" data-aos="zoom-in">
                    <div class="aspect-w-16 aspect-h-11">
                        <img class="w-full object-cover rounded-xl" src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" alt="Image Description"/>
                    </div>
                    <div class="my-6">
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                            Story of React JS
                        </h3>
                        <p class="mt-5 text-gray-600 dark:text-gray-400">
                            Learn about the story of this powerful Front-end Framework, ReactJS.
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-x-3">
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                        <div>
                        <h5 class="text-sm text-gray-800 dark:text-gray-200">By Ujang Kasep</h5>
                        </div>
                    </div>
                    </a>
                    {/* <!-- End Card --> */}

                    {/* <!-- Card --> */}
                    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" data-aos="zoom-in">
                    <div class="aspect-w-16 aspect-h-11">
                        <img class="w-full object-cover rounded-xl" src="https://spectrum.ieee.org/media-library/the-python-logo-on-top-of-imagery-representing-dna-sequencing-or-other-data.jpg?id=33364099&width=1200&height=900" alt="Image Description"/>
                    </div>
                    <div class="my-6">
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                            Asynchronous Programming on Python
                        </h3>
                        <p class="mt-5 text-gray-600 dark:text-gray-400">
                            We'll discuss about how to do aasynchronous programming with Python.
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-x-3">
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                        <div>
                        <h5 class="text-sm text-gray-800 dark:text-gray-200">By Usep Priadi</h5>
                        </div>
                    </div>
                    </a>
                    {/* <!-- End Card --> */}

                    {/* <!-- Card --> */}
                    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" data-aos="zoom-in">
                    <div class="aspect-w-16 aspect-h-11">
                        <img class="w-full object-cover rounded-xl" src="https://drive.google.com/uc?export=view&id=1athk9cDP28J4FL4IWSArs8KC7t_dgZHx" alt="Image Description"/>
                    </div>
                    <div class="my-6">
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                            Get to Know About API
                        </h3>
                        <p class="mt-5 text-gray-600 dark:text-gray-400">
                            API (Application Programming Interface) is very helpful if we wanted to access data from another website or application. Know about the details on this article.
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-x-3">
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                        <div>
                        <h5 class="text-sm text-gray-800 dark:text-gray-200">By Eneng Geulis</h5>
                        </div>
                    </div>
                    </a>
                    {/* <!-- End Card --> */}
                </div>
                {/* <!-- End Grid --> */}
                
                {/* <!-- Card --> */}
                <div class="mt-12 text-center">
                    <a class="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-blue-500 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    Read more
                    <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                </div>
                {/* <!-- End Card --> */}
                
                {/* <!-- End Card Blog --> */}
        </>
    );
}