
import './footer.css';

export const Footer = ()=>{

    const reloadWebPage = ()=> window.location.reload();



    return(<>
        <footer>
            <p onClick={reloadWebPage}>
                Copyright ©2024 Zoom Video Communications, Inc. All rights reserved. 
                Terms |
                Privacy | 
                Trust Center |
                Acceptable Use Guidelines |
                Legal & Compliance |
                Your Privacy Choices |
                 Cookie Preferences
            </p>
        </footer>
    </>)
}