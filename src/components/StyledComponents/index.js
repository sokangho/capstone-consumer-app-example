import styled from 'styled-components';

import { colors, fonts } from '../../styleGuide';

export const ContentContainer = styled.div`
  max-width: 500px;
  text-align: center;

  position: absolute;
  top 50%; left: 50%;
  transform: translate(-50%, -50%);
`;

export const AppHeading = styled.h1`
  font-size: 30px;
  font-family: ${fonts.robotoSlab};
  font-weight: 600;
  color: ${colors.primaryBlue};
  margin: 0px;
`;

export const AppSubHeading = styled.h2`
  font-size: 26px;
  font-family: ${fonts.robotoSlab};
  font-weight: 300;
  color: ${colors.subHeading};
  margin: 0px;
`;

export const Panel = styled.div`
  width: 300px;
  height: 100%;
  margin-top: 20px;

  background: ${colors.primaryWhite};
  text-align: left;

  box-shadow: 0px 0px 10px ${colors.borderLight};
  outline: 1px solid ${colors.borderLight};
`;

export const FormContainer = styled.form`
  padding: 20px;
`;

export const FormHeading = styled.h3`
  font-size: 18px;
  font-family: ${fonts.robotoSlab};
  color: ${colors.darkText};

  &::after {
    content: '';
    display: block;
    width: 55px;
    padding-top: 5px;
    border-bottom: 2px solid ${colors.primaryBlue};
  }
`;

export const InputLabel = styled.label`
  display: block;
  margin-top: 10px;
  font-size: 14px;
  font-family: ${fonts.robotoSlab};
  font-weight: 400;
  color: ${colors.darkText};
`;

export const InputBox = styled.input`
  display: block;
  border: 1px solid ${colors.borderLight};
  border-radius: 3px;
  width: 250px;
  height: 30px;
  margin: 5px auto 20px;
  padding-left: 10px;

  &::placeholder {
    font-family: ${fonts.robotoSlab};
    font-size: 14px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 255px;
  height: 35px;
  margin: 25px auto 0px;
  background-color: ${colors.primaryBlue};
  color: ${colors.primaryWhite};
  border: none;
  border-radius: 3px;
`;
