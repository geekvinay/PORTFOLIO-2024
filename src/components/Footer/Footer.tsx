const Footer = () => {
    return (
        <section className="w-full px-[10rem] py-[4rem] grid grid-cols-2 grid-rows-1">
            <div className="text-base">
                <p>© 2024 Vinay Kishore.</p>
                <p>All content of this website is distributed under the CC BY-NC license.</p>
            </div>
            <div className="w-full items-start justify-end nav-wrapper flex">
                <nav className="flex flex-col text-base px-[2rem] text-end">
                    <a href="/" className="mx-2 font-medium text-gray-500 hover:text-gray-900 py-1">Home</a>
                    <a href="/blog" className="mx-2 font-medium text-gray-500 hover:text-gray-900 py-1">Blog</a>
                    <a href="/rss" className="mx-2 font-medium text-gray-500 hover:text-gray-900 py-1">RSS</a>
                </nav>
                <nav className="flex flex-col text-base px-[2rem] text-end">
                    <a href="/discord" className="mx-2 font-medium text-gray-500 hover:text-gray-900 py-1">Discord</a>
                    <a href="/twitter" className="mx-2 font-medium text-gray-500 hover:text-gray-900 py-1">Twitter</a>
                    <a href="/github" className="mx-2 font-medium text-gray-500 hover:text-gray-900 py-1">GitHub</a>
                    <a href="/youtube" className="mx-2 font-medium text-gray-500 hover:text-gray-900 py-1">YouTube</a>
                </nav>
            </div>
        </section>
    );
};

export default Footer;
