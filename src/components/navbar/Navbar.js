import React, { useEffect, useState } from 'react'
import '../../styling/navbar/Navbar.css'

function Navbar() {
    const [handles, setHandles] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setHandles(true);
            } else setHandles(false);
        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    /*adding event listener to see how far it has scrolled */


    return (
        <div className={handles ? 'nav__black' : 'nav'}>
            <img
                className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png'
                alt="netflix logo"
            />

            <img
                className='nav__avatar'
                src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png'
                alt='Navflix Logo'
            />

        </div>
    )
}

export default Navbar
