import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';

const ButtonGhost = css`
  background: transparent;
  color: ${function ({ theme, variant }) {
    return get(theme, `colors.${variant}.color`)
  }};
`
const ButtonDefault = css`
  color: ${function ({ theme, variant }) {
    return get(theme, `colors.${variant}.contrastText`)
  }};
  background: ${function ({ theme, variant }) {
    return get(theme, `colors.${variant}.color`)
  }};
`

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  ${TextStyleVariantsMap.paragraph1}
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;