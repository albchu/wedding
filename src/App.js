import React from "react";
import SplashPage from "./components/spash-page";
import "./components/app.scss";
import AboutUs from "./components/about-us";
import Announcement from "./components/announcement";
import WhenAndWhere from "./components/when-and-where";
import Menu from "./components/menu";
import WhenAndWhereBody from "./components/when-and-where-body";
import MenuBody from "./components/menu-body";
import RSVP from "./components/rsvp";
import TravelAndAcommodation from "./components/travel-and-acommodation";
import Registry from "./components/registry";

import "./fonts/fonts.css";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Nunito",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="app">
      <SplashPage />
      <Announcement />
      <AboutUs />
      <WhenAndWhere />
      <WhenAndWhereBody />
      <Menu />
      <MenuBody />
      <TravelAndAcommodation />
      <RSVP />
      <Registry />
    </div>
  </ThemeProvider>
);

export default App;
