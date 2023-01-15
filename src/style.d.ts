import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            body: string,
            menu: string,
            selected: string,
            text: string
        },
        breakpoint: string
    }
};