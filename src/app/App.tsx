import { ThemeProvider } from "styled-components"
import { AppRoutes } from "../routes"
import { GlobalStyle } from "../styles/GlobalStyles"
import { defaultTheme } from "../styles/theme/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <AppRoutes/>
    </ThemeProvider>
  )
}
