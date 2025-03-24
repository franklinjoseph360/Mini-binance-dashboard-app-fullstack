export interface TextInputProps {
    value?: string;
    placeholder?: string;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    type: string;
}