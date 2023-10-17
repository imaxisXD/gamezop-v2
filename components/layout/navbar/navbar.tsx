import { Heart, Joystick } from "lucide-react"
import Search from "../../ui/search"

function NavBar() {
    return (
        <div className="bg-background flex items-center justify-between py-4 gap-10 px-2 w-full">
            <Search />
            <div className="flex gap-2">
                <div
                    className="relative group transition duration-150 hover:bg-opacity-70 hover:border-red-600 
                border border-transparent cursor-pointer flex items-center justify-center gap-2 bg-navbar px-5 py-1 rounded-md"
                >
                    <Heart fill="#fe0001" stroke="#9ba3af" strokeWidth={0.1} className="h-5 w-5" />
                    <span className="text-fontcolor group-hover:text-white transition duration-150 font-light">My Favourites</span>
                    <div className="absolute right-0 top-0 h-2 w-2 text-center rounded-full bg-red-600 text-[11px] font-medium text-white">
                    </div>
                </div>
                <div
                    className="group transition duration-150 hover:bg-opacity-70 hover:border-sky-600 
                border border-transparent cursor-pointer flex items-center justify-center gap-2 bg-navbar px-5 py-1 rounded-md"
                >
                    <Joystick fill="#9ba3af" stroke="#9ba3af" className="h-5 w-5" />
                    <span className="text-fontcolor font-light group-hover:text-white transition duration-150">Submit A Game</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar