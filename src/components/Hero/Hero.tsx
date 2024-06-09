import MessageBanner from "../MessageBanner/MessageBanner";
import { Icon } from "@iconify/react";
import linkedinIcon from '@iconify-icons/mdi/linkedin';
import twitterIcon from '@iconify-icons/mdi/twitter';
import redditIcon from '@iconify-icons/mdi/reddit';
import githubIcon from '@iconify-icons/mdi/github';
import emailIcon from '@iconify-icons/mdi/email';

const Hero = () => {
  return (
    <section className='min-h-screen pt-[8rem] md:pt-[16rem] w-screen px-4 md:px-[10rem] flex flex-col items-center justify-start'>
      <MessageBanner />
      <section className="hero-intro py-[5rem] w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="hero-text flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-gray-900 mb-4 leading-tight">
            Hi! 👋 My name is <span className="text-blue-400">VINAY KISHORE</span> and I am a <span className="text-red-400">software engineer</span>.
          </h1>
        </div>
        <div className="w-full flex justify-center md:justify-end items-center space-x-4 px-4 md:px-8">
          <Icon icon={linkedinIcon} className="text-gray-500 text-3xl md:text-5xl cursor-pointer hover:text-gray-700" />
          <Icon icon={twitterIcon} className="text-gray-500 text-3xl md:text-5xl cursor-pointer hover:text-gray-700" />
          <Icon icon={redditIcon} className="text-gray-500 text-3xl md:text-5xl cursor-pointer hover:text-gray-700" />
          <Icon icon={githubIcon} className="text-gray-500 text-3xl md:text-5xl cursor-pointer hover:text-gray-700" />
          <Icon icon={emailIcon} className="text-gray-500 text-3xl md:text-5xl cursor-pointer hover:text-gray-700" />
        </div>
      </section>
    </section>
  );
};

export default Hero;
