import React from "react";

function Drawer({ children, isOpen, setIsOpen }) {
    return (
        <main
            className={" fixed overflow-hidden z-10 bg-opacity-25 inset-0 transform ease-in-out " +(isOpen ? " transition-opacity opacity-100 duration-500 translate-x-0  ": " transition-all delay-500 opacity-100 translate-x-full  ")}>
            <section
                className={
                    " w-3/4 max-w-sm  right-0 absolute bg-[#FEF7EF] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                    <header className="p-4 font-display font-bold text-lg">Header</header>
                    {children}
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

function Card() {
    return (
        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-gray-400 h-12 w-12"></div>
            </div>
        </div>
    );
}
export { Drawer, Card };