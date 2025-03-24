export const BUTTON_SIZES = {
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE',
} as const;

export type ButtonSize = keyof typeof BUTTON_SIZES; 