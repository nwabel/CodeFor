export default function FooterLoggedIn() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center sm:justify-start">
                        <span className="bg-clip-text text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-teal-400">CodeFun.</span>
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright CodeFun. &copy; 2024. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}