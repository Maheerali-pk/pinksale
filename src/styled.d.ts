import "styled-components";
import { lightTheme } from "./App";
interface IPalette {
   main: string;
   contrastText: string;
}
type ThemeType = typeof lightTheme;
declare module "styled-components" {
   export interface DefaultTheme extends ThemeType {}
}
