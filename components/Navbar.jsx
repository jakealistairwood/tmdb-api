import Image from 'next/image';
import { BellIcon, GiftIcon, SearchIcon } from '@heroicons/react/outline';

const Navbar = () => {

    return (
        <nav className="flex flex-row justify-between items-center h-auto pl-10">
            <div className="flex flex-row items-center">
                <Image 
                    src="/assets/img/tmdb-logo.svg"
                    width={200}
                    height={100} 
                    alt="tmdb-logo" 
                />
                <ul className="flex flex-row ml-10">
                    <li className="mr-4">Home</li>
                    <li className="mr-4">TV Shows</li>
                    <li className="mr-4">Movies</li>
                    <li className="mr-4">New & Popular</li>
                    <li className="mr-4">My List</li>
                </ul>
            </div>
            <ul className="flex flex-row items-center pr-10">
                <SearchIcon 
                    className="mr-6" 
                    height={25} 
                    width={25} 
                />
                <li className="mr-6">Kids</li>
                <GiftIcon 
                    className="mr-6" 
                    height={25} 
                    width={25} 
                />
                <BellIcon 
                    height={25} 
                    width={25} 
                />
            </ul>
        </nav>
    )
}

export default Navbar;
