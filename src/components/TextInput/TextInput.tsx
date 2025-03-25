import React from 'react';
import { TextInputProps } from './TextInput.types';
import { TextInput as StyledTextInput } from './TextInput.style';

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ value, placeholder, onFocus, onChange, onBlur, type = 'text' }, ref) => (
    <StyledTextInput
      ref={ref}
      type={type}
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
      aria-label={placeholder}
      data-testid="text-input-testid"
    />
  )
);