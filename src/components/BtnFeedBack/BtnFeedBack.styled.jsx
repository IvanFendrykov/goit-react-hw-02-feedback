import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;

  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[4]}px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.fit};

  box-shadow: 1px -1px black;
  transition: all 0.2s ease-in-out;

  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.accent};
    svg {
      fill: ${p => p.theme.colors.accent};
      stroke: ${p => p.theme.colors.accent};
    }
    :active {
      color: ${p => p.theme.colors.accent};
      svg {
        fill: ${p => p.theme.colors.accent};
        stroke: ${p => p.theme.colors.accent};
      }
    }
  }
`;