import { Link, Head } from "@inertiajs/react";
import LandingPage from "./Body/LandingPage";
import BackToTopButton from "./UserExperience/BackToTop";
import Newsletter from "./Body/Niws";
import Accordion from "./Body/Faq";
import Testimoni from "./Body/Testimoni";
import Tujuan from "./Body/Tujuan";
const Body = () => {
    return (
        <>
            <body className="">
                <LandingPage />
                <Tujuan />
                <Testimoni />
                <Accordion />
                <Newsletter />
                <BackToTopButton />
            </body>
        </>
    )
}

export default Body