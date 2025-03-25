import { IconButton as StyledIconButton } from './IconButton.style';

export const IconButton = ({
    type,
    onClick,
    label,
    children,
    disabled,
    ...props
  }: {
    type: 'button' | 'submit';
    onClick?: () => void;
    label: string;
    disabled?: boolean;
    children: React.ReactNode;
  }) => (
    <StyledIconButton
      type={type}
      onClick={onClick}
      aria-label={label}
      title={label}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledIconButton>
  );
  