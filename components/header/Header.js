import Image from "next/image";

function Header() {
    return (
        <div>
            

            <div>
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search facebook"
                />
            </div>
        </div>
    )
}

export default Header;
