import Navbar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import BlogContent from "@/Components/Blog/BlogContent";
import { Link, Head } from "@inertiajs/react";


const BlogPage = () => {
    return(
        <>
            <Navbar/>
            <BlogContent/>
            <Footer/>
        </>
    )
}

export default BlogPage