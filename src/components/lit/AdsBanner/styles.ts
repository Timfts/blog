import { css } from "lit";

export default css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .banner-holder {
    display: inline-block;
    height: 80px;
    margin-top: 20px;
    align-items: center;
    position: relative;
    justify-content: center;
  }

  .banner-img {
    height: 100%;
    width: auto;
    flex-shrink: 0;
    flex-grow: 0;
    cursor: pointer;
  }

  .shuffle-btn {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
