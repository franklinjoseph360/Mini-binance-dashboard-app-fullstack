export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Option[] | null;
  onSelect: (value: Option) => void;
  placeholder?: string;
}