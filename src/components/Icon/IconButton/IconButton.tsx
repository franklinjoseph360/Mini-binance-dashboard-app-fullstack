import { IconButton as StyledIconButton } from './IconButton.style';
import { IconButtonProps } from './IconButton.types';

export const IconButton: React.FC<IconButtonProps> = ({ children, onClick, label, className, type = 'button' }) => (
    <StyledIconButton type={type} className={className} onClick={onClick} aria-label={label}>
        {children}
    </StyledIconButton>
)