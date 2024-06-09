import { useState } from 'react';
import faceMemoji from "../../assets/ad-image.svg";

const MessageBanner = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            className="message-wrapper w-[95%] bg-gray-50 border-[1px] rounded-2xl p-4 md:px-[5rem] border-gray-200 flex flex-col md:flex-row justify-center items-center hover:cursor-pointer hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="h-[9rem] items-end justify-center md:justify-start hidden md:flex">
                <img
                    src={faceMemoji}
                    alt="Face Emoji"
                    className={`message-image h-[110%] w-[8rem] md:w-[15rem] object-contain transition-all duration-300 hidden md:inline-block ${isHovered ? 'scale-125' : 'animate-bounce'}`}
                    style={{ transformOrigin: 'bottom' }}
                />
            </div>
            <div className='message-message px-4 md:px-[2rem] flex flex-col justify-center text-center md:text-left'>
                <h2 className='message-heading text-xl md:text-2xl text-gray-900 font-semibold'>
                    I'm actively looking for opportunities <span role="img" aria-label="Raised Hands">🙌</span>
                </h2>
                <p className='message-description text-gray-700 my-2'>
                    Looking for a dedicated professional to join your team? Let's discuss how I can add value to your organization and drive success together!
                </p>
            </div>
        </section>
    );
};

export default MessageBanner;
