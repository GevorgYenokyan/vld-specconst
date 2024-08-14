"use client";

import classes from "./menu.module.scss";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const Menu: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const path = usePathname();

    const handleMenuclick = () => {
        setIsOpen(false);
    };

    console.log(path);

    useEffect(() => {
        if (document.body.offsetWidth < 767) {
            handleMenuclick();
        }
    }, [path]);

    useEffect(() => {
        const handleBodyClick = (e: MouseEvent) => {
            if (!e.target) return;
            const target = e.target as HTMLElement;

            if (!target.closest(`.${classes["liks_container"]}`)) {
                setIsOpen(false);
            }
        };

        document.body.addEventListener("click", handleBodyClick);

        return () => {
            document.body.removeEventListener("click", handleBodyClick);
        };
    }, []);

    return (
        <div
            className={classes["navigation"]}
            onClick={(e) => {
                e.preventDefault();
            }}
        >
            <div
                className={classes["burger_menu"]}
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}
            >
                {isOpen ? (
                    <IoMdClose
                        className={`${classes["menu_icon"]} ${
                            path !== "/" ? classes["black"] : ""
                        }`}
                    />
                ) : (
                    <GiHamburgerMenu
                        className={`${classes["menu_icon"]} ${
                            path !== "/" ? classes["black"] : ""
                        }`}
                    />
                )}
            </div>

            <div className={`${classes["container"]} ${isOpen ? classes["open"] : ""}`}>
                <div className={classes["liks_container"]}>
                    <Link className={`${classes["nav_link_logo"]} `} href={"/"}>
                        <Image src={"/img/logo.jpeg"} alt="img" width={60} height={60} />
                    </Link>

                    <nav className={classes["nav_links"]}>
                        <Link className={classes["nav_link"]} href={"/project"}>
                            Գլխավոր
                        </Link>
                        <Link className={`${classes["nav_link"]} `} href={"/"}>
                            Մեր մասին
                        </Link>
                        <Link className={classes["nav_link"]} href={"/project"}>
                            Պորտֆոլիո
                        </Link>
                        <Link className={`${classes["nav_link"]} ${classes["contact"]}`} href={"/"}>
                            Մեր մասին
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Menu;
