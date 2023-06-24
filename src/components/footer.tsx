const Footer = () => {
  return (
    <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-24">
      <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
        <div className="flex flex-col justify-center items-center ">
          <p className="mt-2 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            Created by Connor Gryphon
          </p>
          <div className="flex items-center mt-3">
            <a href="https://github.com/Fooxless/Portfolio-Connor-Gryphon">
              <div className="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand">
                <svg
                  className="feather feather-github"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/connor-gryphon-33678b20a/">
              <div className="pl-4">
                <svg
                  className="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand "
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
