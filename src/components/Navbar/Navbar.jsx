import { useState } from "react";
import Link from "../Link/Link";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [ open, setOpen ] = useState(false); // by default menue option will nt be open taht is why False has been given 

    const routes = [
        { path: '/home', name: 'Home', id: '1' },
        { path: '/about', name: 'About', id: '2' },
        { path: '/contact', name: 'Contact', id: '3' },
        { path: '/services', name: 'Services', id: '4' },
        { path: '/portfolio', name: 'Portfolio', id: '5' }
    ];
    // const handelClick = () => {
    //     setOpen(!open);
    // }

    return (
        // <div className="navbar bg-base-100">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </div>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                 <li><a>Item 1</a></li>
        //                 <li>
        //                     <a>Parent</a>
        //                     <ul className="p-2">
        //                         <li><a>Submenu 1</a></li>
        //                         <li><a>Submenu 2</a></li>
        //                     </ul>
        //                 </li>
        //                 <li><a>Item 3</a></li>
        //             </ul>
        //         </div>
        //         <a className="btn btn-ghost text-xl">daisyUI</a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             <li><a>Item 1</a></li>
        //             <li>
        //                 <details>
        //                     <summary>Parent</summary>
        //                     <ul className="p-2">
        //                         <li><a>Submenu 1</a></li>
        //                         <li><a>Submenu 2</a></li>
        //                     </ul>
        //                 </details>
        //             </li>
        //             <li><a>Item 3</a></li>
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //         <a className="btn">Button</a>
        //     </div>
        // </div>
        <nav className="p-8 ">
            <div className="md:hidden  text-2xl" onClick={() => setOpen(!open)} > 
                {
                    // open === true ? 'open':'close'
                    open === true ? <IoCloseSharp></IoCloseSharp> : <IoMenuSharp></IoMenuSharp> 
                } 
            </div>
            {/* ${open ? 'top-16' : '-top-60'} */}
            <ul className={`md:flex justify-around items-center bg-yellow-300 duration-1000 `}>
                {/*for hide and show>> ${open ? '':'hidden'} */}
                {
                    routes.map(route => <Link key={route.id} route = {route}></Link>)
                    // routes.map(route => <li key={route.id}> <a href={route.path}> { route.name}</a> </li> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;

