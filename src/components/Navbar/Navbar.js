// Components
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

function Navbar() {
    return (
        <div className="navbar">
            <Navigation />
            <MobileNavigation />
        </div>

    );
}

export default Navbar;
