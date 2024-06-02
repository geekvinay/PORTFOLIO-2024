import logoImg from "../../assets/logo.svg";
import { sectionEnum } from "../../common/enum";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header = ({ currSec, setCurrSec }: { currSec: unknown; setCurrSec: any; }) => {
    return (
        <section className="sticky top-0 left-0 z-50 px-[10rem] w-screen h-[5rem] bg-gray-100/70 border-b-[1px] border-gray-200 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center">
                <img src={logoImg} className="h-fit w-fit object-cover opacity-80 hover:cursor-pointer hover:opacity-100"></img>
                {/* <h1 className="px-4 text-[1.5rem] font-bold text-gray-900 capti">Vinay Kishore</h1> */}
            </div>

            <div className="nav-wrapper text-gray-900 text-base font-semibold flex items-center justify-start list-none">
                <li className={`px-2 transition-all duration-100 hover:cursor-pointer hover:opacity-90 ${currSec == sectionEnum.HERO ? "opacity-90 font-bold" : "opacity-50"}`} onClick={() => { setCurrSec(sectionEnum.HERO); }}>HERO</li>
                <li className={`px-2 transition-all duration-100 hover:cursor-pointer hover:opacity-90 ${currSec == sectionEnum.ABOUT ? "opacity-90 font-bold" : "opacity-50"}`} onClick={() => { setCurrSec(sectionEnum.ABOUT); }}>ABOUT</li>
                <li className={`px-2 transition-all duration-100 hover:cursor-pointer hover:opacity-90 ${currSec == sectionEnum.BLOG ? "opacity-90 font-bold" : "opacity-50"}`} onClick={() => { setCurrSec(sectionEnum.BLOG); }}>BLOG</li>
                <li className={`px-2 transition-all duration-100 hover:cursor-pointer hover:opacity-90 ${currSec == sectionEnum.CONTACT ? "opacity-90 font-bold" : "opacity-50"}`} onClick={() => { setCurrSec(sectionEnum.CONTACT); }}>CONTACT</li>
            </div>
        </section>
    );
};

export default Header;