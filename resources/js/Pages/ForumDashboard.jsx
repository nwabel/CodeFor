import { useState, useEffect } from "react"
import { Inertia } from "@inertiajs/inertia";

export default function ForumDashboard(props) {
    const [judul, setJudul] = useState("");
    const [kategori, setKategori] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [iniNotif, setNotif] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        // Form submission with Inertia
        Inertia.post('/forum', {
            judul: judul,
            kategori: kategori,
            deskripsi: deskripsi,
            // }).then(() => {
            //     // Redirect or handle the response as needed
            //     // For example, you can redirect to the dashboard:
            //     Inertia.visit('/forums');
        });
        setNotif(true)
    }

    return (
        <>

            {/* <!-- Hire Us --> */}
            <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* <button onClick={fetchData}>Fetch Data</button> */}
                {setNotif && props.flash.message}
                <div className="max-w-7xl mx-auto border rounded-lg bg-gray-50 p-5">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                            Ayo, jangan takut bertanya!
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Jika ada pembelajaran yang belum dimengerti, sebaiknya ditanyakan.
                        </p>
                    </div>

                    <div className="mt-12">
                        {/* <!-- Form --> */}
                        <form onSubmit={handleSubmit}>
                            <div>{iniNotif && props.flash.message}</div>
                            <div className="grid gap-4 lg:gap-6">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Judul</label>
                                    <input
                                        type="text"
                                        name="judul"
                                        id="judul"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(judul) => setJudul(judul.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Kategori forum</label>
                                    <input
                                        type="text"
                                        name="kategori"
                                        id="kategori"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(kategori) => setKategori(kategori.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Deskripsi</label>
                                    <textarea
                                        id="deskripsi
                                        name="deskripsi
                                        rows="4"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(deskripsi) => setDeskripsi(deskripsi.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                            {/* <!-- End Grid --> */}
                            <div className="mt-6 grid">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    onClick={() => handleSubmit()}

                                >Kirim pertanyaan</button>
                            </div>

                            <div className="mt-3 text-center">
                                <p className="text-sm text-gray-500">
                                    Pertanyaan akan dicek oleh admin dulu, oke. 👌<br />
                                    Kalau tidak melanggar peraturan, akan secepatnya terbit.
                                </p>
                            </div>
                        </form>
                        {/* <!-- End Form --> */}
                    </div>
                </div>

                <div className="mt-5">
                    <div class=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <p className="text-center font-bold text-3xl mb-5">Daftar Pertanyaanmu
</p>
                        {/* <!-- Card --> */}
                        <div class="flex flex-col">
                            <div class="-m-1.5 overflow-x-auto">
                                <div class="p-1.5 min-w-full inline-block align-middle">
                                    <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                                        {/* <!-- Header --> */}
                                        <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                                            {/* <!-- Input --> */}
                                            <div class="sm:col-span-1">
                                                <label for="hs-as-table-product-review-search" class="sr-only">Search</label>
                                                <div class="relative">
                                                    <input type="text" id="hs-as-table-product-review-search" name="hs-as-table-product-review-search" class="py-2 px-3 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search" />
                                                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                                                        <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Input --> */}

                                            <div class="sm:col-span-2 md:grow">
                                                <div class="flex justify-end gap-x-2">
                                                    <div class="hs-dropdown relative inline-block [--placement:bottom-right]">
                                                        <button id="hs-as-table-table-export-dropdown" type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                            <svg class="flex-shrink-0 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                            </svg>
                                                            Export
                                                        </button>

                                                    </div>

                                                    <div class="hs-dropdown relative inline-block [--placement:bottom-right]" data-hs-dropdown-auto-close="inside">
                                                        <button id="hs-as-table-table-filter-dropdown" type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                            <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18" /><path d="M7 12h10" /><path d="M10 18h4" /></svg>
                                                            Filter
                                                            <span class="ps-2 text-xs font-semibold text-blue-600 border-s border-gray-200 dark:border-gray-700 dark:text-blue-500">
                                                                1
                                                            </span>
                                                        </button>
                                                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[12rem] z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-as-table-table-filter-dropdown">
                                                            <div class="divide-y divide-gray-200 dark:divide-gray-700">
                                                                <label for="hs-as-filters-dropdown-all" class="flex py-2.5 px-3">
                                                                    <input type="checkbox" class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-all" checked />
                                                                    <span class="ms-3 text-sm text-gray-800 dark:text-gray-200">All</span>
                                                                </label>
                                                                <label for="hs-as-filters-dropdown-published" class="flex py-2.5 px-3">
                                                                    <input type="checkbox" class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-published" />
                                                                    <span class="ms-3 text-sm text-gray-800 dark:text-gray-200">Published</span>
                                                                </label>
                                                                <label for="hs-as-filters-dropdown-pending" class="flex py-2.5 px-3">
                                                                    <input type="checkbox" class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:r/ing-offset-gray-800" id="hs-as-filters-dropdown-pending" />
                                                                    <span class="ms-3 text-sm text-gray-800 dark:text-gray-200">Pending</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Header -->

                                        <!-- Table --> */}
                                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                            <thead class= "bg-gray-50 dark:bg-slate-800 ">
                                                <tr>
                                                    <th scope="col" class="px-20 py-3 text-start">
                                                        <div class="flex justify-around gap-x-2">
                                                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                Pertanyaan
                                                            </span>
                                                        </div>
                                                    </th>


                                                    <th scope="col" class="px-6 py-3 text-start">
                                                        <div class="flex justify-around gap-x-2">
                                                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                Status
                                                            </span>
                                                        </div>
                                                    </th>

                                                    <th scope="col" class="px-6 py-3 text-start">
                                                        <div class="flex justify-around gap-x-2">
                                                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                                Action
                                                            </span>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                                <tr class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                                                    <td class="h-px w-px whitespace-nowrap align-middle p-4">
                                                        <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                                                            <div class="items-center justify-between mb-3 sm:flex">
                                                                <span class="flex items-center justify-center bg-blue-100 rounded-full ring-white dark:ring-gray-900 dark:bg-blue-900">
                                                                    <img class="rounded-full  w-8 h-8" src="https://drive.google.com/uc?export=view&id=12jvkjrSj0l__028gycCqy4hsW0l4HtEN" alt="Thomas Lean image" />
                                                                </span>
                                                                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">sd</time>
                                                                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">sddsd<a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline">jb</a></div>
                                                            </div>
                                                            <div class="p-3 text-sm italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">gv</div>
                                                        </div>
                                                    </td>
                                                    <td class="h-px w-px whitespace-nowrap align-top">
                                                        <a class="flex justify-around block p-6" href="#">
                                                            <span class="py-1 px-1.5 inline-flex justify-around gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                                <svg class="flex justify-around w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                </svg>
                                                                Published
                                                            </span>
                                                        </a>
                                                    </td>

                                                    <td class="h-px w-px whitespace-nowrap align-top">
                                                        <a class="block p-6" href="#">
                                                            <div class="flex justify-center gap-x-3">
                                                                <button type="button" class="py-3 px-4 inline-flex justify-around gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-300 text-white hover:bg-green-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                    Update
                                                                </button>
                                                                <button type="button" class="py-3 px-4 inline-flex justify-around gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                                                    <td class="h-px w-px whitespace-nowrap align-middle p-4">
                                                        <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                                                            <div class="items-center justify-between mb-3 sm:flex">
                                                                <span class="flex items-center justify-center bg-blue-100 rounded-full ring-white dark:ring-gray-900 dark:bg-blue-900">
                                                                    <img class="rounded-full  w-8 h-8" src="https://drive.google.com/uc?export=view&id=12jvkjrSj0l__028gycCqy4hsW0l4HtEN" alt="Thomas Lean image" />
                                                                </span>
                                                                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">sd</time>
                                                                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">sddsd<a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline">jb</a></div>
                                                            </div>
                                                            <div class="p-3 text-sm italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">gv</div>
                                                        </div>
                                                    </td>
                                                    <td class="h-px w-px whitespace-nowrap align-top">
                                                        <a class="flex justify-around block p-6" href="#">
                                                            <span class="py-1 px-1.5 inline-flex justify-around gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                                <svg class="flex justify-around w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                </svg>
                                                                Published
                                                            </span>
                                                        </a>
                                                    </td>

                                                    <td class="h-px w-px whitespace-nowrap align-top">
                                                        <a class="block p-6" href="#">
                                                            <div class="flex justify-center gap-x-3">
                                                                <button type="button" class="py-3 px-4 inline-flex justify-around gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-300 text-white hover:bg-green-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                    Update
                                                                </button>
                                                                <button type="button" class="py-3 px-4 inline-flex justify-around gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                                                    <td class="h-px w-px whitespace-nowrap align-middle p-4">
                                                        <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                                                            <div class="items-center justify-between mb-3 sm:flex">
                                                                <span class="flex items-center justify-center bg-blue-100 rounded-full ring-white dark:ring-gray-900 dark:bg-blue-900">
                                                                    <img class="rounded-full  w-8 h-8" src="https://drive.google.com/uc?export=view&id=12jvkjrSj0l__028gycCqy4hsW0l4HtEN" alt="Thomas Lean image" />
                                                                </span>
                                                                <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">sd</time>
                                                                <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">sddsd<a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline">jb</a></div>
                                                            </div>
                                                            <div class="p-3 text-sm italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">gv</div>
                                                        </div>
                                                    </td>
                                                    <td class="h-px w-px whitespace-nowrap align-top">
                                                        <a class="flex justify-around block p-6" href="#">
                                                            <span class="py-1 px-1.5 inline-flex justify-around gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                                <svg class="flex justify-around w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                </svg>
                                                                Published
                                                            </span>
                                                        </a>
                                                    </td>

                                                    <td class="h-px w-px whitespace-nowrap align-top">
                                                        <a class="block p-6" href="#">
                                                            <div class="flex justify-center gap-x-3">
                                                                <button type="button" class="py-3 px-4 inline-flex justify-around gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-300 text-white hover:bg-green-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                    Update
                                                                </button>
                                                                <button type="button" class="py-3 px-4 inline-flex justify-around gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </a>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        {/* <!-- End Table --> */}

                                        {/* <!-- Footer --> */}
                                        <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                                            <div class="max-w-sm space-y-3">
                                                <select class="py-2 px-3 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option selected>5</option>
                                                    <option>6</option>
                                                </select>
                                            </div>

                                            <div>
                                                <div class="inline-flex gap-x-2">
                                                    <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                                        Prev
                                                    </button>

                                                    <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                        Next
                                                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- End Footer --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Card --> */}
                    </div>
                </div>
            </div>
            {/* <!-- End Hire Us --> */}


        </>
    )
}
