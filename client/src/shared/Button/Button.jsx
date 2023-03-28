import React from 'react';
import styled from '@emotion/styled';
import { themeSettings } from 'theme';
import { useTheme } from '@emotion/react';

const PrimaryButton = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer
`;

const SharedButton = (props) => {
  const theme = useTheme();
  return <PrimaryButton theme={theme}>{props.text}</PrimaryButton>;
};

export default SharedButton;