import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariants = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  ${propToStyle('textAlign')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase variant={variant} as={tag} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragrph1',
};
