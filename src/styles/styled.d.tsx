import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      greyColor: string;
      whiteColor: string;
      shadow: string;
    };
    button: {
      background: string;
      hover: string;
    };
    input: {
      background: string;
      hover: string;
      grey: string;
    };
    gradients: {
      background: string;
    };
    loader: {
      background: string;
      border: string;
    };
    errorCard: {
      background: string;
      color: string;
      border: string;
      shadow: string;
    };
  }
}
