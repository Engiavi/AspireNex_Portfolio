import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
    return (
        <footer className="w-full  mb-[100px] pb-10 md:mb-5" id="contact">
            {/* background grid */}
            {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div> */}

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                READY TO TAKE <span className="text-purple">YOUR</span> DIGITAL PRESENCE TO THE NEXT LEVEL?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                   REACH OUT TO ME TODAY AND LET&apos;S DISCUSS HOW I CAN HELP YOU ACHIEVE YOUR GOALS.
                </p>
                <a href="mailto:avishankagrahari.829@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Avishank Agrahari
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => {
                        let href = '';
                        if (info.id === 1) href = 'https://github.com/Engiavi';
                        if (info.id === 2) href = 'https://x.com/guptakrish829';
                        if (info.id === 3) href = 'https://www.linkedin.com/in/avishankagrahari';

                        return (
                            <a key={info.id} href={href} target="_blank" rel="noopener noreferrer">
                                <div
                                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                                >
                                    <img src={info.img} alt="icons" width={20} height={20} />
                                </div>
                            </a>
                        );
                    })}

                </div>
            </div>
        </footer>
    );
};

export default Footer;