import { Carousel } from 'flowbite-react';

export default function SliderDashboard() {
    return (
        <>
            <body>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-cover w-max-w-7xl">
                    <Carousel slideInterval={5000}>
                        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210125191729/Google%E2%80%99s-Coding-Competitions-You-Can-Consider-in-2021.png" alt="..." />
                        <img src="https://files.codingninjas.in/article_images/codingcompetitionblog-23489.webp" alt="..." />
                        <img src="https://res.cloudinary.com/getlinksdesigner/image/upload/v1605605404/Blog/TCC_Media_press_Blog-cover_01_ipmgbw.png" alt="..." />
                        <img src="https://codevidhya.com/wp-content/uploads/2021/11/Coding-Contests-For-Kids-1080x675.png" alt="..." />
                        <img src="https://codinghero.ai/wp-content/uploads/2022/12/Coding_Comp_001.png" alt="..." />
                    </Carousel>
                </div>
                <script src="./node_modules/preline/dist/preline.js"></script>
            </body>
        </>
    )
}