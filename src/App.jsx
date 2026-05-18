import { purple } from "@mui/material/colors"
import ButtonComponent from "./components/ButtonComponent"
import IconComponent from "./components/IconComponent"
import TypographyComponent from "./components/TypographyComponent"
import { createTheme, ThemeProvider } from "@mui/material"
import FormComponent from "./components/FormComponent"
function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1900ff"
      },
      secondary: purple
    },
    typography: {
      fontFamily: "Roboto",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 400,
      fontWeightBold: 700,
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <TypographyComponent/>
      <ButtonComponent/>
      <IconComponent/>
      <FormComponent/>
    </ThemeProvider>
  )
}

export default App
