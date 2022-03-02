import React from 'react';
import styled from '@emotion/styled';
import * as colors from '../../../../shared/colors';

const WrapperModal = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.1s;
  transition: ${({ active }) => (active ? '0.2s' : '0')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  pointer-events: ${({ active }) => (active ? 'all' : 'none')};
`;

const InnerModal = styled('div')`
  padding: 24px 20px 40px 20px;
  border-radius: 16px;
  background-color: white;
  width: 32rem;

  transition: 0.4s;
  transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0.5)')};
`;

const CloseBtn = styled('button')`
  position: absolute;
  border: 1px solid ${colors.borderGrey};
  border-radius: 8px;
  background-color: #ffff;
  right: 20px;
  top: 17px;
  width: 40px;
  height: 40px;
  transition: 0.15s;
  &:before,
  &:after {
    position: absolute;
    left: 18px;
    bottom: 12px;
    content: ' ';
    height: 14px;
    width: 2px;
    background-color: ${colors.closeGrey};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    background-color: ${colors.borderGrey};
    transition: 0s;
  }
  &:hover:before,
  &:hover:after {
    background-color: ${colors.primaryBlack};
  }
`;

const MainModal = ({ active, onClose, children }) => {
  return (
    <WrapperModal active={active} onClick={onClose}>
      <InnerModal active={active} onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose} />
        {children}
      </InnerModal>
    </WrapperModal>
  );
};

export default MainModal;
