import { useMemo } from 'react';
import type { Ticker24hrType } from '../types';

interface TickerDataItem {
    label: string;
    value: string;
    positive?: boolean;
}

export const useFormattedTickerData = (ticker24hr: Ticker24hrType | null): TickerDataItem[] => {
    const tickerData = useMemo(() => {
        if (!ticker24hr) return [];

        const priceChange = Number(ticker24hr.priceChange);
        const priceChangePercent = Number(ticker24hr.priceChangePercent);
        const isPositive = priceChange >= 0;

        return [
            {
                label: '24h Change',
                value: `${priceChange} (${priceChangePercent}%)`,
                positive: isPositive,
            },
            {
                label: '24h High',
                value: ticker24hr.highPrice,
            },
            {
                label: '24h Low',
                value: ticker24hr.lowPrice,
            },
            {
                label: `24h Volume (${ticker24hr.symbol.slice(0, -4)})`,
                value: ticker24hr.volume,
            },
            {
                label: `24h Volume (${ticker24hr.symbol.slice(-4)})`,
                value: ticker24hr.quoteVolume,
            },
        ];
    }, [ticker24hr]);

    return tickerData;
};
