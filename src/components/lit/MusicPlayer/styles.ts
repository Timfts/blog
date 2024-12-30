import { css } from "lit";

export default css`
  div {
    background-color: red;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    z-index: 1000;
  }
`;
