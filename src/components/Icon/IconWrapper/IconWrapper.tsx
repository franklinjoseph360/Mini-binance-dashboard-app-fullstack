import { IconWrapper as StyledIconWrapper } from "./IconWrapper.style";

export const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <StyledIconWrapper>
        {children}
    </StyledIconWrapper>
);