import { css } from "lit";

export default css`
  .hold {
    background-color: black;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid orangered;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    display: block;
    width: 300px;
  }
`;
