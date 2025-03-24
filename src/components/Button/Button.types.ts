
import { ButtonSize } from '../../constants/size';

export interface ButtonStyleProps {
    $primary?: boolean;
    $size?: ButtonSize;
}

export type ButtonProps = ButtonStyleProps & {
  children: React.ReactNode;
  onClick?: () => void;
}