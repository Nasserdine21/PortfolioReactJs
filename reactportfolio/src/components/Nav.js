import React from "react";
import '../style/nav.css'
function Nav(){
    return(
        <div className = "menuDesktop">
            <div className = "Avatar">
                <h3>Full Stack Web Developer</h3>
            </div>
            <div className = "menu">
                <nav>
                <ul>
                    <li><a href="#">profil</a></li>
                    <li><a href="#">formations</a></li>
                    <li><a href="#">competences</a></li>
                    <li><a href="#">gallery</a></li>
                    <li><a href="#">contact</a></li>
                    <li className="cv"><a className="clr" href="#">telecharger cv</a></li>
                </ul>
                </nav>
            </div>
        </div>
    );
}
export default Nav;