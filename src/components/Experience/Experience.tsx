import { useState } from "react";
import { expSecEnum } from "../../common/enum";

const Experience = () => {
    const [currSec, setCurrSec] = useState(expSecEnum.PhyiscsWallah);

    const experiences = [expSecEnum.PhyiscsWallah, expSecEnum.Vedantu, expSecEnum.Lokal];

    return (
        <section className="relative px-[10rem] min-h-screen w-full grid grid-rows-1 grid-cols-2">
            <section className="experience-left h-[60vh] my-[10rem] w-full flex flex-col justify-between sticky top-[10rem]">
                <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">Experience</h3>
                <div className="experience-nav w-full h-fit">
                    {experiences.map((exp) => (
                        <li
                            key={exp}
                            className="list-none w-fit flex items-center hover:cursor-pointer"
                            onClick={() => setCurrSec(exp)}>
                            <hr className={`border-t-[3px] rounded-xl border-gray-200 w-[3rem]  transition-all duration-500 ${currSec === exp && "w-[5rem] border-gray-400"}`} />
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
                            className={`h-[3px] w-[3px] bg-gray-300 block p-1 rounded-full mx-1 transition-all duration-500 hover:bg-gray-900 hover:cursor-pointer ${currSec === exp && "bg-gray-900 w-4"
                                }`}
                            onClick={() => setCurrSec(exp)}
                        ></span>
                    ))}
                </div>
            </section>
            <section className="experience-wrapper min-h-[60vh] w-full py-[10rem] flex flex-col justify-start overflow-y-auto">
                <div className="exp-wrapper my-[5rem]">
                    <h3 className="text-2xl font-semibold mb-4">Software Developer Engineer Intern - Backend</h3>
                    <h4 className="text-xl font-medium mb-2">Physics Wallah</h4>
                    <p className="text-lg mb-4">July 2023 – present 1⁄2 Bangalore, India</p>
                    <ul className="list-disc list-inside">
                        <li>Developed and deployed PDF-to-image conversion flow using AWS S3, Lambda, achieving a 60% reduction in conversion times.</li>
                        <li>Helped migrate two P1 services to microservices, reducing main service traffic by over 25 million requests/day; implemented routing logic for seamless transition, resulting in a 30% decrease in latency.</li>
                        <li>Helped automate student doubt allocation to SMEs; contributed to architecture, database design, and code implementation; boosted SME efficiency, reducing response time by 30 minutes per query.</li>
                        <li>Led ad-hoc tasks like log enhancements, leading to a 15% cost reduction of Datadog; actively engaged in technical discussions, aiding peers and fostering collaboration.</li>
                    </ul>
                </div>
                <div className="exp-wrapper my-[5rem]">
                    <h3 className="text-2xl font-semibold mb-4">Software Developer Engineer Intern</h3>
                    <h4 className="text-xl font-medium mb-2">Vedantu Innovations Pvt. Ltd.</h4>
                    <p className="text-lg mb-4">May 2023 - July 2023 1⁄2 Bangalore, India</p>
                    <ul className="list-disc list-inside">
                        <li>Developed and integrated webhooks between Facebook and internal Salesforce, enhancing data synchronization and streamlining sales processes at Vedantu.</li>
                        <li>Wrote MongoDB scripts to optimize data management, leading to reduction of retrieval time and improved database performance.</li>
                    </ul>
                </div>
                <div className="exp-wrapper my-[5rem]">
                    <h3 className="text-2xl font-semibold mb-4">Coming Soon...</h3>
                    <p className="text-lg">Details about this experience will be added soon.</p>
                </div>
            </section>
        </section>
    );
};

export default Experience;
