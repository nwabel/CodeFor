const NewCard = () => {
    return (
        <>
            <div class="bg-white rounded-xl items-center justify-between">
                <div class="flex items-center justify-center gap-1 bg-slate-200 border-b rounded-t-xl font-semibold px-4 py-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-6 h-6"
                    >
                        <path d="M4 16l6 -7l5 5l5 -6"></path>
                        <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                        <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                        <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                        <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    </svg>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Code Fun.</span> Forum Statistik
                </div>
                <div class="px-4 py-2 border-t border-gray-200">
                    <div class="flex flex-col">
                        <div class="flex justify-between items-center gap-2 py-3 border-b">
                            <span class="font-semibold text-center text-sm text-gray-900"
                            >Total Pertanyaan</span
                            ><span class="font-semibold text-sm text-gray-500">31</span>
                        </div>
                        <div class="flex justify-between items-center gap-2 py-3 border-b">
                            <span class="font-semibold text-sm text-gray-900">Anggota Aktif</span
                            ><span class="font-semibold text-sm text-gray-500">89</span>
                        </div>
                        <div class="flex justify-between items-center gap-2 py-3 border-b">
                            <span class="font-semibold text-sm text-gray-900">Pertanyaan Selesai</span
                            ><span class="font-semibold text-sm text-gray-500">6</span>
                        </div>
                        <div class="flex py-3">
                            <a
                                class="w-full text-center bg-gradient-to-r from-blue-500 to-teal-400 px-4 py-1.5 text-white rounded-md flex items-center gap-1 justify-center hover:bg-green-300"
                                href="/account/threads/create"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="w-5 h-5"
                            >
                                    <path
                                        d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"
                                    ></path>
                                    <path d="M13.5 6.5l4 4"></path>
                                    <path d="M16 19h6"></path>
                                    <path d="M19 16v6"></path></svg
                                > Bingung? Tanya di sini aja!</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewCard