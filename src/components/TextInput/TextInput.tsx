import { TextInput as StyledTextInput } from "./TextInput.style";
import { TextInputProps } from "./TextInput.types";

export const TextInput: React.FC<TextInputProps> = ({
    value,
    placeholder = 'Enter Currency Pair',
    onFocus,
    onChange,
    onBlur,
    type="text"
  }) => (
    <StyledTextInput
      type={type}
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
      data-testid='text-input-testid'
    />
  );
  