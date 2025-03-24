import { FormWrapper as StyledFormWrapper } from "./FormWrapper.style";
import { FormWrapperProps } from "./FormWrapper.types";

export const FormWrapper: React.FC<FormWrapperProps> = ({ children, onSubmit }) => (
    <StyledFormWrapper onSubmit={onSubmit}>
        {children}
    </StyledFormWrapper>
);