import styled from 'styled-components'
import { pxToRem } from './mixins'

export const PageArea = styled.div`
  form {
    background-color: #fff;

    border-radius: 3px;

    padding: 10px;

    box-shadow: 0px 0px 3px #999;

    .area {
      max-width: 500px;

      display: flex;
      align-items: center;

      padding: 10px;

      .area--title {
        width: 200px;

        padding-right: 20px;

        font-weight: bold;
        font-size: ${pxToRem(14)};
        text-align: right;
      }

      .area--input {
        flex: 1;

        input {
          width: 100%;

          padding: 5px;

          font-size: ${pxToRem(14)};

          outline: none;
          border: 1px solid #ddd;
          border-radius: 3px;

          transition: 0.1s ease;

          &:focus {
            border: 1px solid #333;
            color: #333;
          }
        }

        button {
          padding: 5px 10px;

          background-color: #0089ff;

          border-radius: 4px;
          border: none;
          outline: none;

          color: #fff;
          font-size: ${pxToRem(15)};

          cursor: pointer;

          transition: 0.2s ease;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
`
