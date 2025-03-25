import styled from 'styled-components';
import { colors, spacing } from '@styles/variables';

export const SearchBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  font-family: 'TeXGyreAdventor', sans-serif;

  @media (max-width: 1024px) {
    max-width: ${spacing.sm};
  }

  @media (max-width: 600px) {
    max-width: ${spacing.md};
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background: ${colors.background.secondary};
  border: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  box-sizing: border-box;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.6), 
              0px 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
`;

export const DropdownItem = styled.li`
  padding: ${spacing.md};
  background-color: ${colors.background.secondary};
  color: ${colors.font.primary};
  cursor: pointer;

  &:hover {
    background: ${colors.background.hover};
  }
`;
