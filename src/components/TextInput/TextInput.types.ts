export interface TextInputProps {
    value?: string;
    placeholder?: string;
    name: string;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    type: string;
    autoComplete?: string;
    required?: boolean;
}