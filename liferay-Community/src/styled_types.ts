// src/styles/theme.d.ts (ou um caminho similar)
// Este arquivo declara a interface DefaultTheme para o styled-components.

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    border: string;
    background: string;
    text: string;
    primary?: string;
    secondary?: string;
    accent?: string;
    indicator: string;
    icon: string;
    hoverIcon: string;
    searchBar: string;
    name: string;
    lightText: string;
    title: string;

    header: {
      background: string;
      notification: {
        background: string;
        icon: string;
        ball: string;
      };
      profile: {
        background: string;
        arrow: string;
        username: string;
      };
    };

    banner: {
      text: string;
      leftColor: string;
      rightColor: string;
    };

    hoverBackground: string;
    navLine: string;
    danger: string;
    hoverdanger: string;

    communityCreation: {
      text: string;
      pictureArea: string;
      inputBorder: string;
      cancel?: string;
    };

    communityCard: {
      background: string;
      title: string;
      paragraph: string;
      button: string;
      category: string;
      categoryBackground: string;
      categoryHover: string;
    };

    sidebar: {
      background: string;
    };

  }
}
