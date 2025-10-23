import "./Footer.css"

const Footer = () => {
    const handleTwitter = () => {
        window.open("https://twitter.com", "_blank", "noopener noreferrer");
    };

    const handleEmail = () => {
        window.location.href = "mailto:your-email@example.com";
    };

    const handleFacebook = () => {
        window.open("https://facebook.com", "_blank", "noopener noreferrer");
    };

    const handleLinkedIn = () => {
        window.open("https://linkedin.com", "_blank", "noopener noreferrer");
    };
    return (
        <div className="footer-container"> 
                <div className="footer-left"> Logo </div>

            <p className="footer-text"> Tharsi @ 2025 </p>

            <div className="footer-right">
                <div className="footer-right-twitter" onClick={handleTwitter}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .36.04.72.11 1.06A12.82 12.82 0 0 1 1.67.9a4.48 4.48 0 0 0-.61 2.27c0 1.56.79 2.94 1.98 3.75a4.51 4.51 0 0 1-2.05-.57v.06c0 2.18 1.55 4 3.61 4.42a4.52 4.52 0 0 1-2.04.08c.57 1.77 2.23 3.05 4.2 3.09A9.05 9.05 0 0 1 0 19.54 12.78 12.78 0 0 0 6.92 21c8.32 0 12.87-6.9 12.87-12.87l-.01-.59A9.22 9.22 0 0 0 23 3z"/>
                    </svg>
                </div>

            <div className="footer-right-gmail" onClick={handleEmail}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M502.3 190.8L327.4 338.5c-17.7 15-43.2 15-60.9 0L9.7 190.8C3.8 185.8 0 177.5 0 168.8v-88C0 72.5 7.8 64 17.3 64h477.4C504.2 64 512 72.5 512 80.8v88c0 8.7-3.8 17-9.7 22z"/>     
                </svg>
            </div>

            <div className="footer-right-facebook" onClick={handleFacebook}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.48 0 269.5 0c-73.07 0-121.47 44.38-121.47 124.72V195.3H86.41V288h61.62v224h92.66V288z"/>
                </svg>
            </div>

            <div className="footer-right-link" onClick={handleLinkedIn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.15 107.3 0 83.1 0 54.2 0 25.3 24.15 1.1 53.84 1.1c29.68 0 53.84 24.2 53.84 53.1 0 28.9-24.16 53.1-53.84 53.1zM447.9 448h-92.4V304.1c0-34.3-12.3-57.7-43-57.7-23.4 0-37.3 15.7-43.4 30.9-2.2 5.2-2.8 12.4-2.8 19.7V448h-92.4s1.2-270.5 0-299.1h92.4v42.4c12.3-19 34.3-46.1 83.6-46.1 61 0 106.8 39.9 106.8 125.4V448z"/>
                </svg>
            </div>
        </div> 
        </div>
    )
}

export default Footer