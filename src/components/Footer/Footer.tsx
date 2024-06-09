const Footer = () => {
    return (
        <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-base text-center lg:text-left">
                <p>© 2024 Vinay Kishore.</p>
                <p>All content of this website is distributed under the CC BY-NC license.</p>
            </div>
            <div className="w-full flex lg:flex-row items-center lg:items-start justify-center lg:justify-end">
                <nav className="flex flex-col text-base px-4 lg:px-8 text-center lg:text-right mb-4 lg:mb-0">
                    <a href="/" className="font-medium text-gray-500 hover:text-gray-900 py-1">Home</a>
                    <a href="/blog" className="font-medium text-gray-500 hover:text-gray-900 py-1">Blog</a>
                    <a href="/rss" className="font-medium text-gray-500 hover:text-gray-900 py-1">RSS</a>
                </nav>
                <nav className="flex flex-col text-base px-4 lg:px-8 text-center lg:text-right">
                    <a href="/discord" className="font-medium text-gray-500 hover:text-gray-900 py-1">Discord</a>
                    <a href="/twitter" className="font-medium text-gray-500 hover:text-gray-900 py-1">Twitter</a>
                    <a href="/github" className="font-medium text-gray-500 hover:text-gray-900 py-1">GitHub</a>
                    <a href="/youtube" className="font-medium text-gray-500 hover:text-gray-900 py-1">YouTube</a>
                </nav>
            </div>
        </section>
    );
};

export default Footer;
