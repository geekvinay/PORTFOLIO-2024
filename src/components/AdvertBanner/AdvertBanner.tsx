import { useState } from 'react';
import faceMemoji from "../../assets/ad-image.svg";

const AdvertBanner = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            className="ad-wrapper w-[95%] min-h-[9rem] bg-gray-50 border-[1px] rounded-2xl px-[5rem] border-gray-200 flex items-center hover:cursor-pointer hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-[9rem] flex items-end">
                <img
                    src={faceMemoji}
                    alt="Face Emoji"
                    className={`ad-image h-[110%] w-[15rem] object-cover transition-all duration-300 ${isHovered ? 'scale-125' : 'animate-bounce'}`}
                    style={{ transformOrigin: 'bottom' }}
                />
            </div>
            <div className='ad-message px-[2rem] flex flex-col justify-center'>
                <h2 className='ad-heading text-2xl text-gray-900 font-semibold'>
                    I'm actively looking for opportunities <span role="img" aria-label="Raised Hands">🙌</span>
                </h2>
                <p className='ad-description text-gray-700 my-2 '>
                    Looking for a dedicated professional to join your team? Let's discuss how I can add value to your organization and drive success together!
                </p>
            </div>
        </section>
    );
};

export default AdvertBanner;
