import React from 'react';
import { Messege } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ msg }) => {
  return <Messege >{msg}</Messege>;
};

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
