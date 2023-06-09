import { useEffect, useState } from "react"
import PrimaryButton from "./PrimaryButton"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return ( 
        <header className={`${isScrolled && 'bg-green-200 shadow-md transition-shadow duration-300'}`}>
            <div className="flex items-center justify-center space-x-4">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className="flex relative">
                    <li className="headerLink flex justify-left items-center font-bold md:hidden">
                        MENU
                        <ChevronDownIcon className={`ml-2 h-5 w-5 cursor-pointer transition duration-[.4s] ${isMenuOpen ? 'transform hover:rotate-180' : ''}`} onClick={handleMenuClick}/>
                    </li>  
                    <ul className={`absolute top-8 left-0 w-full bg-white shadow-lg rounded-lg py-2 transition ease-in-out delay-150 ${isMenuOpen ? 'block' : 'hidden'} 
                        md:flex md:relative md:top-0 md:left-0 md:shadow-none md:bg-transparent
                    `}>
                        <li className="headerLink">HOME</li>
                        <li className="headerLink">ABOUT</li>
                        <li className="headerLink">HOW</li>
                        <li className="headerLink">CENTERS</li>
                    </ul>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <PrimaryButton content="LOGIN" reverse={false} />
            </div>
        </header>
    );
} 
 
export default Header;