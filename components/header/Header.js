import Image from "next/image";
import {
    BellIcon , ChatIcon , ChevronDownIcon , HomeIcon , UserGroupIcon , ViewGridIcon
} from "@heroicons/react/solid";
import {
    FlagIcon , PlayerIcon , SearchIcon , ShoppingCartIcon
} from "@heroicons/react/outline"
function Header() {
    return (
        <div>
            

            <div className="flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed"
                />
            </div>
            <div className="flex">
             <SearchIcon  className="h-6"/>
            <input type="text"
                    placeholder="Search facebook"/>
            </div>
        </div>
    )
}

export default Header;
