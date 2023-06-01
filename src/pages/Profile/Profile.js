import styled, { css } from "styled-components";
import { breakpoints } from "../../utils/styles/theme";
import { Button } from "../../utils/styles/generalStyles";

export const FlexStyle = css`
  display: flex;
  flex-direction: column;
`;

export const FlexContainer = styled.div`
  ${FlexStyle}
`;

export const FlexRowForms = styled.div`
  ${FlexStyle}

  @media screen and (${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const FlexRowTitleButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormWrapper = styled.div`
  padding-right: 32px;
`;

export const Label = styled.p`
  padding: 10px 0;
  display: ${(props) => (props.isVisible ? ` ` : `none;`)};
`;

export const Title = styled.h2`
  max-width: 550px;
  text-align: center;
  margin-bottom: 32px;
  font-size: 28px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 36px;
  }
`;

export const ProfileButton = styled(Button)`
  height: 36px;
`;
