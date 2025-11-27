import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="box">
          <div className="logo">
            <img src="/ORLO_logo.png" alt="ORLO Logo" />
          </div>
        </div>
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  .loader {
    --size: 250px;
    --duration: 2s;
    --logo-color: white;
    --background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    height: var(--size);
    aspect-ratio: 1;
    position: relative;
  }

  .loader .box {
    position: absolute;
    background: rgba(255, 255, 255, 0.15);
    background: var(--background);
    border-radius: 50%;
    border-top: 1px solid rgba(255, 255, 255, 1);
    box-shadow: rgba(255, 255, 255, 0.3) 0px 10px 10px -0px;
    backdrop-filter: blur(5px);
    animation: ripple var(--duration) infinite ease-in-out;
  }

  .loader .box:nth-child(1) {
    inset: 40%;
    z-index: 99;
  }

  .loader .box:nth-child(2) {
    inset: 30%;
    z-index: 98;
    border-color: rgba(255, 255, 255, 0.8);
    animation-delay: 0.2s;
  }

  .loader .box:nth-child(3) {
    inset: 20%;
    z-index: 97;
    border-color: rgba(255, 255, 255, 0.6);
    animation-delay: 0.4s;
  }

  .loader .box:nth-child(4) {
    inset: 10%;
    z-index: 96;
    border-color: rgba(255, 255, 255, 0.4);
    animation-delay: 0.6s;
  }

  .loader .box:nth-child(5) {
    inset: 0%;
    z-index: 95;
    border-color: rgba(255, 255, 255, 0.2);
    animation-delay: 0.8s;
  }

  .loader .logo {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    padding: 7%;
  }

  .loader .logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      box-shadow: rgba(255, 255, 255, 0.3) 0px 10px 10px -0px;
    }
    50% {
      transform: scale(1.3);
      box-shadow: rgba(255, 255, 255, 0.3) 0px 30px 20px -0px;
    }
    100% {
      transform: scale(1);
      box-shadow: rgba(255, 255, 255, 0.3) 0px 10px 10px -0px;
    }
  }
`;

export default Loader;
