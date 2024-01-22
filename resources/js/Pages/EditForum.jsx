import { useState, useEffect } from "react"
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";

export default function EditForum(props) {
    const [judul, setJudul] = useState("");
    const [kategori, setKategori] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [iniNotif, setNotif] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            id: props.myForum.id, judul, kategori, deskripsi
        }
        // Form submission with Inertia
        Inertia.post('/forum/update', data);
        setNotif(true)
    }

    return(
                <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* <button onClick={fetchData}>Fetch Data</button> */}
                {setNotif && props.flash.message}
                <div className="max-w-7xl mx-auto border rounded-lg bg-gray-50 p-5">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                            Ubah Pertanyaan Mu!
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Sesuaikan Dengan Apa Yang Ingin Kamu Tanyakan.
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
                                        onChange={(judul) => setJudul(judul.target.value)} defaultValue={props.myForum.judul}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Kategori forum</label>
                                    <input
                                        type="text"
                                        name="kategori"
                                        id="kategori"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(kategori) => setKategori(kategori.target.value)} defaultValue={props.myForum.kategori}
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Deskripsi</label>
                                    <textarea
                                        id="deskripsi
                                        name="deskripsi
                                        rows="4"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                        onChange={(deskripsi) => setDeskripsi(deskripsi.target.value)} defaultValue={props.myForum.deskripsi}
                                    ></textarea>
                                </div>
                            </div>
                            {/* <!-- End Grid --> */}
                            <div className="mt-6 grid">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    onClick={() => handleSubmit()}

                                >Update Pertanyaan</button>
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
            </div>
    )
}