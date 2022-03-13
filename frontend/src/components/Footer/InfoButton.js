import React, { useState, useEffect } from "react";


function ProfileButton() {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
};

    useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
        setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);
    return (
    <>
        <div className="infoContainer">
            <div className="infoButton" onClick={openMenu}>
                <i class="fa-solid fa-circle-info"></i>
            </div>
            {showMenu && (
            <div className="infoBar">
                <div>
                    <a href=''><i class="fa-brands fa-github"></i></a>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div className="infoBarText">
                    <p>Developed By: Braxton Kappes</p>
                </div>
            </div>
            )}
        </div>
    </>
    );
}

export default ProfileButton;
