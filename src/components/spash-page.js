import React, { useState, useEffect } from "react";
import Logo from "./logo";
import "./spash-page.scss";
import { BrowserView } from "react-device-detect";

const SplashPage = () => {
  const [className, setClassName] = useState("");
  useEffect(() => {
    setTimeout(() => setClassName("fadeIn"), 800);
  }, []);

  return (
    <div className="splashPage">
      <div>
        <div className={`splashPage__logo ${className}`}>
          <Logo color={"white"} />
        </div>
        <BrowserView>
          <div className="desktop">
            I look best on a<br />
            mobile device
          </div>
        </BrowserView>
      </div>
    </div>
  );
};

export default SplashPage;
