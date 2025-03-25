import { useEffect, useState } from 'react';

interface Symbol {
  symbol: string;
}

interface ExchangeInfoResponse {
  symbols: Symbol[];
}

interface UseExchangeInfoReturnType {
  symbols: {
    label: string;
    value: string;
  }[] | null;
  loading: boolean;
  error: string | null;
}

export const useExchangeInfo = (): UseExchangeInfoReturnType => {
  const [symbols, setSymbols] = useState<UseExchangeInfoReturnType['symbols']>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExchangeInfo = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.binance.com/api/v3/exchangeInfo');
        const data: ExchangeInfoResponse = await res.json();

        if (!data?.symbols?.length) throw new Error('No symbols found');

        const formatted = data.symbols.map((s) => ({
          label: s.symbol,
          value: s.symbol,
        }));

        setSymbols(formatted);
      } catch (err: any) {
        setError(err?.message ?? 'Unexpected error');
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeInfo();
  }, []);

  return { symbols, loading, error };
};
