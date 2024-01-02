import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

export default function TechCat() {
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
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Technology</h2>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">Explore articles about the latest update on technology.</p>
                </div>
                {/* <!-- End Title --> */}

                {/* <!-- Grid --> */}
                <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* <!-- Card --> */}
                    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/blogpage" data-aos="zoom-in"> 
                    <div class="aspect-w-16 aspect-h-11">
                        <img class="w-full object-cover rounded-xl" src="https://drive.google.com/uc?export=view&id=1QN2usaAjAneMDo7apcR42Ubp4sCRLXTW" alt="Image Description"/>
                    </div>
                    <div class="my-6">
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                            How Powerful Cloud Computing is?
                        </h3>
                        <p class="mt-5 text-gray-600 dark:text-gray-400">
                            Cloud Computing helps us to develop anything easily without having a physical server. Let's talk about the benefits of cloud computing here.
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-x-3">
                        <img class="w-8 h-8 rounded-full" src="https://drive.google.com/uc?export=view&id=12jvkjrSj0l__028gycCqy4hsW0l4HtEN" alt="Image Description"/>
                        <div>
                        <h5 class="text-sm text-gray-800 dark:text-gray-200">By Nabil Syawali</h5>
                        </div>
                    </div>
                    </a>
                    {/* <!-- End Card --> */}

                    {/* <!-- Card --> */}
                    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" data-aos="zoom-in">
                    <div class="aspect-w-16 aspect-h-11">
                        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80" alt="Image Description"/>
                    </div>
                    <div class="my-6">
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                        How Google Assistant now helps you record stories for kids
                        </h3>
                        <p class="mt-5 text-gray-600 dark:text-gray-400">
                        Google is constantly updating its consumer AI, Google Assistant, with new features.
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-x-3">
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                        <div>
                        <h5 class="text-sm text-gray-800 dark:text-gray-200">By Asep Supriadi</h5>
                        </div>
                    </div>
                    </a>
                    {/* <!-- End Card --> */}

                    {/* <!-- Card --> */}
                    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" data-aos="zoom-in">
                    <div class="aspect-w-16 aspect-h-11">
                        <img class="w-full object-cover rounded-xl" src="https://drive.google.com/uc?export=view&id=1QRQsJLzcXMHYJxIe78Tf6hgtO3MlAtoa" alt="Image Description"/>
                    </div>
                    <div class="my-6">
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                            How does Virtual Reality (VR) affect our life?
                        </h3>
                        <p class="mt-5 text-gray-600 dark:text-gray-400">
                            Virtual Reality is a great revolution of technology. It helped many people with various purposes. How big is the impact of VR for our life?
                        </p>
                    </div>
                    <div class="mt-auto flex items-center gap-x-3">
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                        <div>
                        <h5 class="text-sm text-gray-800 dark:text-gray-200">By Atang Sanjaya</h5>
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