import Komen from "./Komen";

const isForum = (data) => {
    return data.map((flist, i) => {
        return (
            <div key={i} class="mb-10">
                <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                    <div class="items-center justify-between mb-3 sm:flex">
                        <span class="flex items-center justify-center bg-blue-100 rounded-full ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <img class="rounded-full  w-8 h-8" src="https://drive.google.com/uc?export=view&id=12jvkjrSj0l__028gycCqy4hsW0l4HtEN" alt="Thomas Lean image" />
                        </span>
                        <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{flist.judul}</time>
                        <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">{flist.kategori}<a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline"> {flist.author}</a></div>
                    </div>
                    <div class="p-3 text-sm italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">{flist.deskripsi}</div>
                    <Komen />
                </div>
                
            </div>
        );
    })
}

const noForum = () =>{
    return(
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            Belum ada pertanyaan, ayo bertanya!
        </div>
    );
}

const ForumList = ({data}) =>{
    return !data ? noForum() : isForum(data);
}

export default ForumList