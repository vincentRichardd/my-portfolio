import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'bg-blue-950 py-3 px-4 rounded-md' : 'py-3 px-4 rounded-md'}>À propos</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-blue-950 py-3 px-4 rounded-md' : 'py-3 px-4 rounded-md'}>Contact</NavLink>
        </>
    );

};


const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className='flex w-full justify-end'>
                <div className='hidden md:flex justify-center w-full space-x-6'>
                    <NavLinks />
                </div>
                <div className='md:hidden'>
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
            {
                isOpen && (
                    <div className='flex basis-full flex-col items-center'>
                        <NavLinks />
                    </div>
                )
            }
        </>
    );
}


export default Nav;