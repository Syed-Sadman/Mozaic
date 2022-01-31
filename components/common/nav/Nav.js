import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from 'react';

import useWindowDimensions from "../../../hooks/useWindowDimension";

import Modal from '../modals/Modal';
import Menu from './Menu';
import MobileNav from './MobileNav';
import Button from '../Button';
import ConnectWalletModal from "../modals/ConnectWalletModal";


const Nav = () => {

    const { height, width } = useWindowDimensions();

    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    }

    const handleWalletModal = () => {
        setIsOpen(!isOpen)
    }

    const router = useRouter();
    const isActive = (path) => {
        if (router.asPath === path) return "active"
        return "";
    }

    const navItems = [{
        id: 1,
        name: "Products",
        path: "/",
    }, {
        id: 2,
        name: "Stake",
        path: "/stake",
    }, {
        id: 3,
        name: "Vote",
        path: "/vote",
    },]

    return (
        <>
            <header id="nav-container">
                <div className="n-container">
                    <Link href="/">
                        <img className="logo" src="/mozaic.logo.png" alt="logo" />
                    </Link>
                    <div className="link-container">
                        {width > 768 && <nav>
                            {navItems.map((item) => <Link key={item.id} href={item.path}>
                                <a className={"nav-item " + isActive(item.path)} title={item.name}>{item.name}</a>
                            </Link>)}
                        </nav>}
                        <div className="nav-btn-container">
                            {width > 480
                                ? <button onClick={handleWalletModal} className="nav-btn-primary">Connect Wallet</button>
                                : <button onClick={handleWalletModal} className="nav-btn-primary compactBtn"><img src="/assets/icons/ico.wallet.svg" alt="" /></button>

                            }
                            <button onClick={handleMenu} className="nav-btn-menu"><img src="/assets/icons/btn.menu.svg" alt="menuico" />
                                {showMenu &&
                                    <>
                                        {width > 768
                                            ? <Menu />
                                            : <MobileNav />
                                        }
                                    </>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {isOpen && <ConnectWalletModal setIsOpen={setIsOpen} />}
            <style jsx>
                {`
                .logo {
                        cursor: pointer;
                    }

                .compactBtn {
                    padding: 0;
                    height: 60px;
                    width: 60px;
                }

                .compactBtn img {
                    align-self: center;
                    justify-self: center;
                }
                `}
            </style>

        </>
    );
}

export default Nav;