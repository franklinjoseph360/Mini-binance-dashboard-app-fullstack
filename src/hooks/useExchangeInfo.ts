import { useEffect, useState } from 'react';
import { Ticker24hr, Trade } from '../types';

export const useExchangeInfo = (symbol: string | null) => {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [ticker24hr, setTicker24hr] = useState<Ticker24hr | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!symbol) return;

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
        setLoading(false);
      }
    };

    fetchMarketData();
  }, [symbol]);

  return { trades, ticker24hr, loading, error };
};
