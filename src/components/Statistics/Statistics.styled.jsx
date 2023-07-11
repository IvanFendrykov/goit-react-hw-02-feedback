import styled from 'styled-components';

export const StaticList = styled.ul`
  padding: ${p => p.theme.space[3]}px;
  margin: 0 auto;

  border-radius: ${props => props.theme.radii.fit};
  box-shadow: 1px -1px black;
  background-color: ${props => props.theme.colors.white};
`;

export const DescrStatistics = styled.p`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;

  margin: ${p => p.theme.space[3]};
  padding: ${p => p.theme.space[3]}px;
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease-in-out;

  text-shadow: ${props => props.theme.shadows.textShadow};
  cursor: pointer;
  svg {
    fill: ${p => p.theme.colors.accent};
    stroke: ${p => p.theme.colors.accent};
  }
`;
