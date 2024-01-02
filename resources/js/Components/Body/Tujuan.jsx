const Tujuan = () => {
    return (
        <>
    <body className="bg-[#F8FAFB]">
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>   
            AOS.init(); 
        </script>
    
            <div class="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">

                <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div data-aos="zoom-in">
                        <img class="rounded-xl" src="https://drive.google.com/uc?export=view&id=1DcgQDsMCOIV457NGwkJQgESVnwhMCGHr" alt="Image Description"></img>
                    </div>


                    <div class="mt-5 sm:mt-10 lg:mt-0">
                        <div class="space-y-6 sm:space-y-8">

                            <div class="space-y-2 md:space-y-4">
                                <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200" data-aos="fade-left">
                                    Dimulai dari keresahan umum mahasiswa.
                                </h2>
                                <p class="text-gray-500" data-aos="fade-right">
                                    Semua ini dimulai oleh keresahan kami sebagai mahasiswa, sangat sulit untuk mencari informasi mengenai kompetisi-kompetisi yang bisa membantu kami untuk meningkatkan kemampuan kami di bidang akademik. Oleh karena itu, kami membuat sebuah portal informasi untuk kompetisi, yaitu Codefun.
                                </p>
                            </div>

                            <ul role="list" class="space-y-2 sm:space-y-4">
                                <li class="flex space-x-3"  data-aos="fade-up">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        <span class="font-bold">Kemudahan</span> dalam mencari info.
                                    </span>
                                </li>

                                <li class="flex space-x-3" data-aos="fade-up" data-aos-delay="200">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        Interaksi antar-pengguna dengan <span class="font-bold">Forum</span>.
                                    </span>
                                </li>

                                <li class="flex space-x-3" data-aos="fade-up" data-aos-delay="400">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        <span class="font-bold">Blog</span> untuk mengetahui informasi terkini.
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>

            </div>
            </body>
        </>
    )


}

export default Tujuan