const isKompe = (data) =>{
    return data.map((kompe, i) =>{
        return(
            <div key={i} className="transition ease-in-out duration-75 hover:scale-110 group flex flex-col w-full lg:w-96 h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-52 flex flex-col  rounded-t-xl">
                <img className="w-auto h-full rounded-t-xl" src="https://thumb.viva.co.id/media/frontend/thumbs3/2022/11/24/637ebeef0a1d6-kompetisi-robotik-kemenag-ri-2022_1265_711.jpg" alt="Image Description"></img>
            </div>
            <div className="p-4 md:p-6 sm:p-10">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 mb-12 text-xs font-semibold uppercase text-purple-600 truncate ... text-wrap">
                    {kompe.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                    {kompe.title}
                </h3>
                <p className="mt-3 text-gray-500 truncate ... ">
                    {kompe.description}
                </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    Read More
                </a>
                <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                    Daftar
                </a>
            </div>
        </div>
        );
    })
}

const noKompe = () =>{
    return(
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            Belum ada kompetisi, silahkan hubungi admin untuk menambahkan kompetisi
        </div>
    );
}

const KompetisiList = ({data}) =>{
    return !data ? noKompe() : isKompe(data);
}

export default KompetisiList