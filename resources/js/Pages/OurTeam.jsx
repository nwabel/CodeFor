import TeamGrid from "@/Components/TeamGrid";
import Navbar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { Link, Head } from "@inertiajs/react";

const OurTeam = () => {
    return(
        <>
            <Navbar/>
            <TeamGrid/>
            <Footer/>
        </>
    )
}

export default OurTeam