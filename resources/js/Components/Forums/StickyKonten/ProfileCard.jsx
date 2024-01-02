import { Link } from "@inertiajs/react"

const ProfileCard = () => {
    return (
        <>
            <div class="bg-white rounded-xl items-center justify-between mb-5">
                <div class="flex items-center justify-center gap-1 bg-slate-200 border-b rounded-t-xl font-semibold px-4 py-2">
                    Dashboard Forum
                </div>
                <div class="px-4 py-2 border-t border-gray-200">
                    <div class="flex flex-col">
                        <p className="text-center gap-2 py-3 border-b">Nabil Syawali</p>
                        <div class="flex justify-between items-center gap-2 py-3 border-b">
                            <span class="font-semibold text-sm text-gray-900">Jumlah pertanyaan kamu</span
                            ><span class="font-semibold text-sm text-gray-500">10</span>
                        </div>
                        <div class="flex py-3">
                            <a
                                class="w-full text-center bg-gradient-to-r from-blue-500 to-teal-400 px-4 py-1.5 text-white rounded-md flex items-center gap-1 justify-center hover:bg-green-300"
                                href="/dashboardforums"
                            >Dashboard Forum</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard