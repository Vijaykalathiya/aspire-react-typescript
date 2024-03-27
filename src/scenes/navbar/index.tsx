import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png';
import Link from "./Link";
import { SelectedPage } from '@/shared/types'
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbatBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    return (
        <nav>
            {/* outdiv */}
            <div className={`${navbatBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                {/* center the logo and menu */}
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    {/* logo */}
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* left side */}
                        <img alt="logo" src={Logo} />
                        {/* right side */}
                        { isAboveMediumScreens ?
                            <div className={`${flexBetween} w-full`}>
                                {/* left side menu */}
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                                    <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                                </div>
                                {/* right side menu */}
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link page="Sign In" selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div>
                            : 
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        }
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                !isAboveMediumScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <XMarkIcon className="h-6 w-6 text-gray-400" />
                            </button>
                        </div>

                        {/*  Menu items */}
                        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar