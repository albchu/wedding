import React from "react"

import SEO from "../components/seo"
import App from "../components/app"
import "./index.scss"
import "../fonts/fonts.css"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Nunito",
  },
})

const Index = () => (
  <ThemeProvider theme={theme}>
    <SEO title="Vicky & Albert" />
    <App />
  </ThemeProvider>
)

export default Index
