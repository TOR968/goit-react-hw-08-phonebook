import styled, { keyframes } from 'styled-components';

const Loader = styled.div`
  width: 250px;
  height: 40px;
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`;

const cssloadMotion = keyframes`
	0% {
		transform: translateX(0) scale(1);
	}
	25% {
		transform: translateX(-49px) scale(0.3);
	}
	50% {
		transform: translateX(0) scale(1);
	}
	75% {
		transform: translateX(49px) scale(0.3);
	}
	100% {
		transform: translateX(0) scale(1);
	}
`;

const One = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #fa8072;
  border-radius: 50%;
  display: inline-block;
  animation: ${cssloadMotion} 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  -o-animation: ${cssloadMotion} 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  -ms-animation: ${cssloadMotion} 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  -webkit-animation: ${cssloadMotion} 1s cubic-bezier(0.77, 0, 0.175, 1)
    infinite;
  -moz-animation: ${cssloadMotion} 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`;

export { Loader, One };
