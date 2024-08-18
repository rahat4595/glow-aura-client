import { useEffect, useState } from "react";
import { PiHouseLine } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { TbHomeMinus } from "react-icons/tb";
import { TbHomeHand } from "react-icons/tb";
import { GrDocumentText } from "react-icons/gr";
import 'animate.css';
import Aos from "aos";
import 'aos/dist/aos.css'
import "./Service.css"; // Import CSS file for styling


const Service = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
           
            <div className="max-w-7xl mx-auto text-center mt-10">
                <h1 className="text-2xl md:text-4xl text-black font-bold">OUR CORE SERVICES</h1>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-3 gap-5 my-20 animate__animated animate__fadeInUp">

                <div
                    className={`card w-full bg-base-100 shadow-xl ${isHovered1 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                >
                    <div className="flex justify-center p-5 items-center">
                        <PiHouseLine className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Home Delivery</h2></a>
                        <p className="p-5">Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
                <div
                    className={`card w-full  bg-base-100 shadow-xl ${isHovered2 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    <div className="flex justify-center p-5 items-center">
                        <SiAmazonsimpleemailservice className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Mortgage Service</h2></a>
                        <p className="p-5">Explore personalized mortgage solutions tailored to your needs.
                            Unlock your dream home with our expert mortgage services.</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
                <div
                    className={`card w-full bg-base-100 shadow-xl ${isHovered3 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                >
                    <div className="flex justify-center p-5  items-center">
                        <RiCustomerService2Line className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Consulting Service</h2></a>
                        <p className="p-5">Elevate your business with expert consulting services tailored to your needs. Unlock growth potential and achieve success.</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
                <div
                    className={`card w-full bg-base-100 shadow-xl ${isHovered4 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                >
                    <div className="flex justify-center p-5 items-center">
                        <TbHomeHand className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Home Services</h2></a>
                        <p className="p-5">Find your dream home with ease. Our expert team simplifies the home service process for a seamless experience</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
                <div
                    className={`card w-full bg-base-100 shadow-xl ${isHovered5 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered5(true)}
                    onMouseLeave={() => setIsHovered5(false)}
                >
                    <div className="flex justify-center p-5 items-center">
                        <TbHomeMinus className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Home Products</h2></a>
                        <p className="p-5">Maximize the value of your home product with our expert guidance and personalized support.Achive your real estate goals effortlessly</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
                <div
                    className={`card w-full bg-base-100 shadow-xl ${isHovered6 ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered6(true)}
                    onMouseLeave={() => setIsHovered6(false)}
                >
                    <div className="flex justify-center p-5 items-center">
                        <GrDocumentText className="text-6xl text-[#ff5a3c]" />
                    </div>
                    <div className="card-body text-center">
                        <a href="#"><h2 className="text-3xl font-bold text-center hover:text-[#ff5a3c]">Escrow Services</h2></a>
                        <p className="p-5">Safeguard your transactions with our reliable escrow services. Enjoy peace of mind knowing your funds are securely held until all conditions are met.</p>
                    </div>
                    <div className="hover-line"></div> {/* Orange line on hover */}
                </div>
            </div>

            <div className="max-w-7xl mx-auto text-center mt-10">
                <h1 className="text-2xl md:text-4xl text-black font-bold">PROFESSIONAL  SERVICES</h1>
            </div>

            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-4 gap-5  my-10 mx-auto" data-aos="fade-left">
                <div className="card w-full bg-base-100 shadow-xl hover:shadow-md">
                    <figure><img src="https://i.ibb.co/b7QtgPH/service-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Room Service

                        </h2>
                        <p>Indulge in convenience and comfort with our impeccable room service.</p>
                        <div className="card-actions justify-start">
                            <h1 className="text-[#23BE0A] hover:text-blue-500 hover:cursor-pointer">Read More...</h1>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl hover:shadow-md">
                    <figure><img src="https://i.ibb.co/v1mcQGG/service-3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Check Payments

                        </h2>
                        <p>Secure the funding you need with our flexible bank loan options.</p>
                        <div className="card-actions justify-start">
                            <h1 className="text-[#23BE0A] hover:text-blue-500 hover:cursor-pointer">Read More...</h1>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl hover:shadow-md">
                    <figure><img src="https://i.ibb.co/NT8HHsC/service-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Security

                        </h2>
                        <p>Protecting what matters most with robust security solutions.</p>
                        <div className="card-actions justify-start">
                            <h1 className="text-[#23BE0A] hover:text-blue-500 hover:cursor-pointer">Read More...</h1>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl hover:shadow-md" >
                    <figure><img src="https://i.ibb.co/hBYQMQG/service.jpghttps://i.ibb.co/b7QtgPH/service-4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Support 24/7

                        </h2>
                        <p>Get assistance anytime, anywhere with our 24/7 support.</p>
                        <div className="card-actions justify-start">
                            <h1 className="text-[#23BE0A] hover:text-blue-500 hover:cursor-pointer">Read More...</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;
