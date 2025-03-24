export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Option[];
  onSelect: (value: Option) => void;
  placeholder?: string;
}