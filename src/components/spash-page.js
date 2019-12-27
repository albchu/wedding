import React, { useState, useEffect } from "react";
import Logo from "./logo";
import "./spash-page.scss";

const SplashPage = () => {
  const [className, setClassName] = useState("");
  useEffect(() => {
    setTimeout(() => setClassName("fadeIn"), 800);
  }, []);

  return (
    <div className="splashPage">
      <div className={`splashPage__logo ${className}`}>
        <Logo color={"white"} />
      </div>
    </div>
  );
};

export default SplashPage;
