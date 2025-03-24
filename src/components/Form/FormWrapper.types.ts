export interface FormWrapperProps { 
    children: React.ReactNode;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
}