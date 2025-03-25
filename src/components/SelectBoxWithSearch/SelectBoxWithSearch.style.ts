import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 10px;
  max-width: 400px;
  font-family: 'TeXGyreAdventor', sans-serif;

  @media (max-width: 1024px) {
    max-width: 320px;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;


export const Dropdown = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #181A20;
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
  padding: 10px;
  background-color: #181A20;
  color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background: #2B3139;
  }
`;
