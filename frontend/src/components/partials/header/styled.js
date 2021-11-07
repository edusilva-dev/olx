import styled from 'styled-components'
import { pxToRem } from '../../../styles/mixins'

const logo = [0, 1, 2]

export const HeaderArea = styled.div`
  height: 60px;

  background-color: #fff;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 1000px;

    margin: auto;

    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    height: 60px;

    flex: 1;
    display: flex;
    align-items: center;

    .logo-1,
    .logo-2,
    .logo-3 {
      font-size: ${pxToRem(27)};
      font-weight: bold;
    }

    .logo-1 {
      color: #ff0000;
    }
    .logo-2 {
      color: #00ff00;
    }
    .logo-3 {
      color: #0000ff;
    }
  }

  nav {
    padding: 10px 0;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      height: 40px;

      display: flex;
      align-items: center;
    }

    li:not(:last-child) {
      margin-right: 40px;

      a {
        transition: 0.12s linear;

        &:hover {
          color: #999;
        }
      }
    }

    li {
      a {
        color: #000;
        font-size: ${pxToRem(14)};

        transition: 0.12s linear;

        &:hover {
          color: #999;
        }

        &.button {
          padding: 5px 10px;

          background-color: #ff8100;
          border-radius: 4px;

          color: white;

          transition: 0.07s linear;
        }

        &.button:hover {
          background-color: #e57706;
        }
      }
    }
  }
`
