import { useEffect, useState } from 'react';
import type { Ticker24hrType, TradeType } from '../types';

interface UseMarketDataReturn {
    loading: boolean;
    error: string | null;
    trades: TradeType[];
    ticker24hr: Ticker24hrType | null;
}

export const useMarketData = (symbol: string | null): UseMarketDataReturn => {
    const [trades, setTrades] = useState<UseMarketDataReturn['trades']>([]);
    const [ticker24hr, setTicker24hr] = useState<UseMarketDataReturn['ticker24hr']>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<UseMarketDataReturn['error']>(null);

    useEffect(() => {
        if (!symbol) {
            symbol = 'BTCUSDT'
        };

        const fetchMarketData = async () => {
            try {
                setLoading(true);
                const [tickerRes, tradesRes] = await Promise.all([
                    fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`),
                    fetch(`https://api.binance.com/api/v3/trades?symbol=${symbol}&limit=10`),
                ]);

                const [ticker, trades] = await Promise.all([
                    tickerRes.json(),

                    tradesRes.json(),
                ]);

                setTicker24hr(ticker);
                setTrades(trades);
            } catch (err: any) {
                setError(err.message);
            } finally {       
                const timeoutId = setTimeout(() => {
                    setLoading(false);
                }, 1000);
                return () => clearTimeout(timeoutId);
            }
        };

        fetchMarketData();
    }, [symbol]);

    return { trades, ticker24hr, loading, error };
};
