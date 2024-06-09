/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { Icon } from '@iconify/react';
import clockIcon from '@iconify-icons/mdi/clock';
import PWLogo from "../../assets/pw-logo.svg";
import VedantuLogo from "../../assets/Vedantu.svg";
import { useInView } from "react-intersection-observer";
import { expSecEnum } from "../../common/enum";

const Experience = () => {
    const [currSec, setCurrSec] = useState(expSecEnum.PhyiscsWallah);
    const experiences = [expSecEnum.PhyiscsWallah, expSecEnum.Vedantu, expSecEnum.Lokal];
    const sectionsRef = useRef<any>({
        [expSecEnum.PhyiscsWallah]: null,
        [expSecEnum.Vedantu]: null,
        [expSecEnum.Lokal]: null
    });

    const handleIntersect = (exp: any, inView: any) => {
        if (inView) {
            setCurrSec(exp);
        }
    };

    const scrollToSection = (element: any) => {
        const topOffset = 10 * 16;
        const elementTop = element.getBoundingClientRect().top + window.scrollY - 200;
        console.log('elementTop: ', elementTop);
        console.log('elementTop - topOffset: ', elementTop - topOffset);
        window.scrollTo({
            top: elementTop - topOffset,
            behavior: 'smooth'
        });
    };

    const handleSectionChange = (exp: any) => {
        setCurrSec(exp);
        scrollToSection(sectionsRef.current[exp]);
    };

    const { ref: PWRef, inView: PWinView } = useInView({ threshold: 0.5 }) as any;
    const { ref: VedantuRef, inView: VedantuinView } = useInView({ threshold: 0.5 }) as any;
    const { ref: LokalRef, inView: LokalinView } = useInView({ threshold: 0.5 }) as any;

    useEffect(() => {
        if (PWinView) handleIntersect(expSecEnum.PhyiscsWallah, PWinView);
    }, [PWinView]);

    useEffect(() => {
        if (VedantuinView) handleIntersect(expSecEnum.Vedantu, VedantuinView);
    }, [VedantuinView]);

    useEffect(() => {
        if (LokalinView) handleIntersect(expSecEnum.Lokal, LokalinView);
    }, [LokalinView]);

    // Assign refs to section elements
    sectionsRef.current[expSecEnum.PhyiscsWallah] = PWRef.current;
    sectionsRef.current[expSecEnum.Vedantu] = VedantuRef.current;
    sectionsRef.current[expSecEnum.Lokal] = LokalRef.current;

    return (
        <section id="experience-section" className="relative px-8 sm:px-6 md:px-10 lg:px-20 min-h-screen w-full grid grid-rows-1 lg:grid-cols-2 gap-8">
            {/* Experience Navigation */}
            <section className="experience-left hidden lg:flex h-[60vh] my-[10rem] w-full flex-col justify-between sticky top-[10rem]">
                <h3 className="text-4xl font-bold text-gray-900 mb-8">Experience</h3>
                <div className="experience-nav w-full h-fit">
                    {experiences.map((exp) => (
                        <li
                            key={exp}
                            className="list-none w-fit flex items-center hover:cursor-pointer mb-4"
                            onClick={() => handleSectionChange(exp)}>
                            <hr className={`border-t-[3px] rounded-xl border-gray-200 w-[3rem] transition-all duration-500 ${currSec === exp && "w-[5rem] border-gray-400"}`} />
                            <span className={`experience-title px-4 text-lg font-medium transition-all duration-500 ${currSec === exp ? "font-semibold text-gray-600" : "text-gray-400"}`}>
                                {exp}
                            </span>
                        </li>
                    ))}
                </div>
                <div className="progress-dots flex">
                    {experiences.map((exp) => (
                        <span
                            key={exp}
                            className={`h-[3px] w-[3px] bg-gray-300 block p-1 rounded-full mx-1 transition-all duration-500 hover:bg-gray-900 hover:cursor-pointer ${currSec === exp && "bg-gray-900 w-4"}`}
                            onClick={() => handleSectionChange(exp)}
                        ></span>
                    ))}
                </div>
            </section>
            {/* Experience Details */}
            <section className="experience-wrapper min-h-[60vh] w-full py-[10rem] flex flex-col justify-start overflow-y-auto">
                <div ref={PWRef} className="exp-wrapper my-[5rem]">
                    <div className="flex items-center mb-4">
                        <img src={PWLogo} alt="Physics Wallah" className="h-10 w-10 object-cover mx-6" />
                        <h3 className="text-2xl font-semibold">Software Developer Engineer Intern Backend</h3>
                    </div>
                    <div className="flex items-center mb-4">
                        <h4 className="text-xl font-medium text-gray-700 mb-2">Physics Wallah</h4>
                    </div>
                    <p className="text-lg text-gray-500 flex items-center mb-4">
                        <Icon icon={clockIcon}
                            className="mr-2 text-[2rem] font-semibold hidden md:inline-block" />
                        July 2023 – present | Bangalore, India
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Developed and deployed PDF-to-image conversion flow using AWS S3, Lambda, achieving a 60% reduction in conversion times.</li>
                        <li>Helped migrate two P1 services to microservices, reducing main service traffic by over 25 million requests/day; implemented routing logic for seamless transition, resulting in a 30% decrease in latency.</li>
                        <li>Helped automate student doubt allocation to SMEs; contributed to architecture, database design, and code implementation; boosted SME efficiency, reducing response time by 30 minutes per query.</li>
                        <li>Led ad-hoc tasks like log enhancements, leading to a 15% cost reduction of Datadog; actively
                            engaged in technical discussions, aiding peers and fostering collaboration.</li>
                    </ul>
                </div>
                <div ref={VedantuRef} className="exp-wrapper my-[5rem]">
                    <div className="flex items-center mb-4">
                        <img src={VedantuLogo} alt="Vedantu" className="h-[4rem] object-cover mx-4" />
                        <h3 className="text-2xl font-semibold">Software Developer Engineer Intern</h3>
                    </div>
                    <h4 className="text-xl font-medium text-gray-700 mb-2">Vedantu Innovations Pvt. Ltd.</h4>
                    <p className="text-lg text-gray-500 flex items-center mb-4">
                        <Icon icon={clockIcon} className="mr-2 text-[2rem] font-semibold hidden md:inline-block" />
                        May 2023 - July 2023 | Bangalore, India
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Developed and integrated webhooks between Facebook and internal Salesforce, enhancing data synchronization and streamlining sales processes at Vedantu.</li>
                        <li>Wrote MongoDB scripts to optimize data management, leading to a reduction of retrieval time and improved database performance.</li>
                    </ul>
                </div>
                <div ref={LokalRef} className="exp-wrapper my-[5rem]">
                    <div className="flex items-center mb-4">
                        {/* <Icon icon={briefcaseIcon} className="text-gray text-[3rem] font-semibold-600 w-8 h-8 mr-4" /> */}
                        <h3 className="text-2xl font-semibold">Coming Soon...</h3>
                    </div>
                    <p className="text-lg text-gray-600">More Details about me will be added soon.</p>
                </div>
            </section>
        </section>
    );
};

export default Experience;

