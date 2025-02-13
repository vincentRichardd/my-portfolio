
import Nav from "./Nav";

const Navbar = () => {
    return (
        <header className="bg-dark sticky top-0 z-20 mx-auto flex w-full flex-wrap items-center justify-center border-b-2 backdrop-blur-lg  border-neutral-800 p-8">
            <Nav />
        </header>
    );
};

export default Navbar;

