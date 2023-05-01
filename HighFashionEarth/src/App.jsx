import React from "react";
import Styles from "./main.css";
import Header from "./components/Header";
import WhoIs from "./components/WhoIs";
import WhyUs from "./components/WhyUs";
import Directions from "./components/Directions";
import MobileMenu from "./components/MobileMenu";
import FAQS from "./components/FAQS";
import HeaderTitle from "./components/HeaderTitle";
import Footer from "./components/Footer";

function App() {
  const [menuOn, setMenuOn] = React.useState(false);

  function handleClick(e) {
    setMenuOn(!menuOn);
  }

  function handleMenuOff(e) {
    menuOn && handleClick()
    // console.log("menu off clicked")
  }

  return (
    <div className="background-container">
      <div className="header-menu-row">
        <HeaderTitle click={handleClick} />
      </div>
      <div onClick={handleMenuOff}>
        <MobileMenu
          click={handleClick}
          style={{ display: menuOn ? "" : "none" }}
        />
        <Header />
        <div className="content-container">
          <WhoIs />
          <WhyUs />
          <Directions />
          <FAQS />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
