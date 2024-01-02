import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Preline from "../Preline";
import 'preline';

const Accordion = () => {
    return (
        <>
            <body>
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                <script>   
                    AOS.init(); 
                </script>
                <section className="relative z-20 overflow-hidden bg-[#F8FAFB] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
                    <div className="container  mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="mx-auto mb-[60px] max-w-[700px] text-center lg:mb-20">
                                    <span className="mb-2 block text-lg font-semibold text-primary" data-aos="zoom-in">
                                        Frequently Asked Questions.
                                    </span>
                                    <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]" data-aos="zoom-out">
                                        Punya pertanyaan? Coba cek di sini.
                                    </h2>
                                    <p className="text-base text-body-color dark:text-dark-6" data-aos="zoom-in-up">
                                        Sebelum tanya ke customer service kami, cari tau dulu, yuk! Sekiranya ga ada pertanyaan yang dicari, baru deh tanya ke customer service kami.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="hs-accordion-group xl:ms-36 xl:me-36 sm:mx-auto max-w-7xl" data-aos="flip-down">
                        <div className="hs-accordion active bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700" id="hs-bordered-heading-one">
                            <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-bordered-collapse-one">
                                <svg className="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                <svg className="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                Apa saja yang tersedia dalam website CodeFun?
                            </button>
                            <div id="hs-basic-bordered-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-one">
                                <div className="pb-4 px-5">
                                    <p className="text-gray-800 dark:text-gray-200 text-xl">
                                        Kompetisi
                                    </p>
                                    <p className="text-gray-800 dark:text-gray-200">
                                        Kami memiliki fitur Kompetisi, dimana dengan fitur ini kalian bisa mencari kompetisi apapun yang sesuai dengan minat dan bakat kalian.
                                    </p>
                                    <br></br>
                                    <p className="text-gray-800 dark:text-gray-200 text-xl">
                                        Blog
                                    </p>
                                    <p className="text-gray-800 dark:text-gray-200">
                                        Pada fitur Blog ini, kalian bisa mencari artikel-artikel seputar teknologi sesuai dengan topik yang kalian inginkan. Untuk saat ini baru tersedia 2 topik, yaitu mengenai teknologi terkini, dan pemrograman.
                                    </p>
                                    <br></br>
                                    <p className="text-gray-800 dark:text-gray-200 text-xl">
                                        Forum
                                    </p>
                                    <p className="text-gray-800 dark:text-gray-200">
                                        Kami menyediakan Forum untuk pengguna berdiskusi mengenai apapun yang sesuai dengan topiknya.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700" id="hs-bordered-heading-two">
                            <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-bordered-collapse-two">
                                <svg className="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                <svg className="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                Bagaimana cara kita melihat kompetisi yang tersedia untuk diikuti?
                            </button>
                            <div id="hs-basic-bordered-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-two">
                                <div className="pb-4 px-5">
                                    <p className="text-gray-800 dark:text-gray-200">
                                        Untuk mengakses kompetisi, kamu harus mendaftarkan akun terlebih dahulu. Kemudian login menggunakan akunmu, dan kamu akan mendapatkannya pada dashboard akun.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700" id="hs-bordered-heading-three">
                            <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-bordered-collapse-three">
                                <svg className="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                <svg className="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                Apakah harus menggunakan e-mail organisasi ketika mendaftar akun?
                            </button>
                            <div id="hs-basic-bordered-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-three">
                                <div className="pb-4 px-5">
                                    <p className="text-gray-800 dark:text-gray-200">
                                        Tidak, e-mail publik (seperti Gmail) tetap bisa digunakan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <script src="./node_modules/preline/dist/preline.js"></script>
            </body>
        </>

    );
};

export default Accordion;