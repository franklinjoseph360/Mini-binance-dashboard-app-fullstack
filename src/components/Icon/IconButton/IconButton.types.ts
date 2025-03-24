export interface IconButtonProps {
    children: React.ReactNode;
    type: "button" | "submit" | "reset";
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}