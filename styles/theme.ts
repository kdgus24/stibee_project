import { css } from 'styled-components';

const theme = {
  mainBlue: '#00a6d7' ,
  gradationStart: '#01cabb',
  gradationEnd: '#00b9c8',

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexSpaceBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,

  flexJustifyCenter: css`
    display: flex;
    justify-content: center;
  `,
};

export default theme;
