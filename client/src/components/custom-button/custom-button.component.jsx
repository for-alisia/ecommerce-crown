/** Libraries */
import React from 'react';

/** Styles */
import { CustomButtonContainer } from './custom-button.styles';

export const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
