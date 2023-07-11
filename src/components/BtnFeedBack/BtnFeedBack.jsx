import React from 'react';
import { StyledButton } from './BtnFeedBack.styled';
import PropTypes from 'prop-types';

export const BtnFeedback = ({
  icon: Icon = null,
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {Icon && <Icon size="14" />}
      {children}
    </StyledButton>
  );
};

BtnFeedback.propTypes = {
  icon: PropTypes.any,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
