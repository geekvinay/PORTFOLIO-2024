import pwLogo from "../../assets/pw-logo.svg";

const About = () => {
  return (
    <div className="w-full min-h-screen px-[10rem] py-[5rem] grid grid-cols-1 justify-center items-center lg:grid-cols-2 gap-12">
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">How It Started</h3>
        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          I was born in 2002 in <span className="font-semibold text-gray-600">Hyderabad, India</span>. Fascinated by technology from a young age, I pursued a degree in <span className="font-semibold text-gray-600">Computer Science and Engineering</span> from <span className="font-semibold text-gray-600">IIIT Kancheepuram</span>. During my studies, I developed a passion for Web Development. I interned at <span className="font-semibold text-gray-600">Lokal</span>, <span className="font-semibold text-gray-600">Vedantu</span>, and <span className="font-semibold text-gray-600">Physics Wallah</span>, where I gained valuable experience.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed">
          After graduating, I moved to <span className="font-semibold text-gray-600">Bangalore</span> to immerse myself in its vibrant tech community. Here, I continue to hone my skills in <span className="font-semibold text-gray-600">backend development</span>, striving to create impactful solutions. Outside of work, I enjoy playing <span className="font-semibold text-gray-600">cricket</span>, watching <span className="font-semibold text-gray-600">web series</span>, and <span className="font-semibold text-gray-600">automobiles</span>, which inspire my creativity and keep me motivated.
        </p>
      </div>
      <div className="h-fit flex flex-col justify-center bg-gradient-to-bl from-gray-50 via-gray-100 to-gray-50 p-8 rounded-lg">
        <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">How It's Going</h3>
        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Since May 2023, I've embarked on a journey as a software engineer working for <img src={pwLogo} alt="" className="h-7 inline"/> <span className="font-semibold">Physics Wallah</span> as a part of their user experience and content consumption team. Over the past year, I've learned, taught, broken, and fixed countless things, but most importantly, I've had the opportunity to meet so many wonderful people along the way.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed">
          It's been an enriching experience filled with challenges and growth, and I'm grateful for every moment of it.
        </p>
      </div>
    </div>
  );
};

export default About;
