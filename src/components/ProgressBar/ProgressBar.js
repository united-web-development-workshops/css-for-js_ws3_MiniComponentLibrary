/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles)
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)

  return (
    <Wrapepr role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px"
      }}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar style={{
          "--width": value + "%",
          "--height": styles.height + "px"
        }} />
      </BarWrapper>
    </Wrapepr>
  );
};

const Wrapepr = styled.div`
	background-color: ${COLORS.transparentGray15};
	border-radius: var(--radius);
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	overflow: hidden;
	padding: var(--padding);
`;

const BarWrapper = styled.div`
	border-radius: 4px;
	overflow: hidden;
`;

const Bar = styled.div`
	background-color: ${COLORS.primary};
	height: var(--height);
	transition: width 1.5s;
	width: var(--width);
`;

export default ProgressBar;
