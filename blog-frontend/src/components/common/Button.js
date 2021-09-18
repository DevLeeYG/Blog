import React from 'react';

import palette from '../../lib/styles/palette';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
    cursor: pointer;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const Button = (props) => <StyledButton {...props} />;
/*
{...props}를 설정해주는 이유는 Button이 받아오는 props를 모두 styledButton에 전달한다는의미
Button을 컴포넌트로서 활용
*/
export default Button;
