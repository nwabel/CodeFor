import React, { useState } from 'react';

const Komen = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [selectedStyles, setSelectedStyles] = useState([]);

    const toggleStyle = (style) => {
        if (selectedStyles.includes(style)) {
            setSelectedStyles(selectedStyles.filter((s) => s !== style));
        } else {
            setSelectedStyles([...selectedStyles, style]);
        }
    };

    const handleAddComment = () => {
        const stylesString = selectedStyles.join(' ');
        const newCommentObj = { text: newComment, styles: stylesString };
        setComments([...comments, newCommentObj]);
        setNewComment('');
        setSelectedStyles([]);
    };

    return (

<div className="border rounded p-8 bg-white ">
<h1 className="text-lg font-semibold mb-4">Tambahkan Komentar</h1>
        <form action="">
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                    <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                        <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                            <button type="button" className='hover:bg-gray-100 rounded cursor-pointer p-2 text-gray-500'>
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4" />
                                </svg>
                                <span class="sr-only">Add list</span>
                            </button>
                            <button
                                onClick={() => toggleStyle('italic')}
                                className={`hover:text-gray-900 hover:bg-gray-100 rounded cursor-pointer p-2 text-xl mx-2 ${selectedStyles.includes('italic') ? 'text-blue-500' : 'text-gray-500'}`}
                                type="button">

                                <svg class="h-5 w-5 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="11" y1="5" x2="17" y2="5" />  <line x1="7" y1="19" x2="13" y2="19" />  <line x1="14" y1="5" x2="10" y2="19" /></svg>
                                <span class="sr-only">Italic</span>
                            </button>
                            <button
                                onClick={() => toggleStyle('font-bold')}
                                className={`hover:text-gray-900 hover:bg-gray-100 rounded cursor-pointer p-2 text-xl mx-2 ${selectedStyles.includes('font-bold') ? 'text-blue-500' : 'text-gray-500'}`}
                                type="button">

                                <svg class="h-5 w-5 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />  <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" /></svg>
                                <span class="sr-only">Bold</span>
                            </button>
                            <button
                                onClick={() => toggleStyle('underline')}
                                className={`hover:text-gray-900 hover:bg-gray-100 rounded cursor-pointer p-2  text-xl mx-2 ${selectedStyles.includes('underline') ? 'text-blue-500' : 'text-gray-500'}`}
                                type="button">

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1v9.5a4.5 4.5 0 1 1-9 0V1M1 1h4m5 0h4M1 19h14" />
                                </svg>
                                <span class="sr-only">Underline</span>
                            </button>

                        </div>

                    </div>
                    <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5" />
                        </svg>
                        <span class="sr-only">Full screen</span>
                    </button>
                    <div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Show full screen
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                    <label for="editor" class="sr-only">Publish post</label>
                    <textarea
                        rows="4"
                        cols="50"
                        placeholder="Tambahkan komentar..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" required
                    />
                </div>
            </div>
            <button
                onClick={handleAddComment}
                type="submit"
                class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                Publish post
            </button>

            
        </form>


        <div>
                <h3 className="text-lg font-bold mt-4">Komentar:</h3>
                {comments.map((comment, index) => (
                    <div key={index} className="border p-4 rounded-md my-2">
                        <div className={`${comment.styles}`}>{comment.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Komen;