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
        <>
            <h1 className="text-base font-semibold mb-4 mt-4">Tambahkan Komentar</h1>
            <form action="">
                <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
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
                        <textarea
                            rows="1"
                            cols="50"
                            placeholder="Tambahkan komentar..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                        />

                    <button
                        onClick={handleAddComment}
                        type="submit"
                        className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                        </svg>
                    </button>
                </div>

            </form>


            <div>
                <h3 className="text-base font-bold mt-4">Komentar:</h3>
                {comments.map((comment, index) => (
                    <div key={index} className="border p-4 rounded-md my-2">
                        <div className={`${comment.styles}`}>{comment.text}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Komen;