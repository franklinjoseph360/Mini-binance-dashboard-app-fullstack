import { render, screen, waitFor, act } from '@testing-library/react';
import { useMarketData } from '../useMarketData';
import type { Ticker24hrType, TradeType } from '../../types';

global.fetch = jest.fn();

const mockTrades: TradeType[] = [
  {
    id: 1,
    price: '10000.00',
    qty: '0.5',
    quoteQty: '5000',
    time: Date.now(),
    isBuyerMaker: false,
    isBestMatch: true,
  },
];

const mockTicker: Ticker24hrType = {
  symbol: 'BTCUSDT',
  lastPrice: '10000.00',
  priceChange: '100',
  priceChangePercent: '1.0',
  highPrice: '10100.00',
  lowPrice: '9900.00',
  volume: '123.45',
  quoteVolume: '1234567.89',
};

const TestComponent = ({ symbol }: { symbol: string | null }) => {
  const { loading, error, trades, ticker24hr } = useMarketData(symbol);

  return (
    <div>
      {loading && <div data-testid="loading">Loading...</div>}
      {error && <div data-testid="error">{error}</div>}
      {ticker24hr && <div data-testid="ticker">{ticker24hr.symbol}</div>}
      {trades.length > 0 && (
        <ul data-testid="trades">
          {trades.map((trade) => (
            <li key={trade.id}>{trade.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

describe('useMarketData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', async () => {
    (fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve([]) })
    );

    await act(async () => {
      render(<TestComponent symbol="BTCUSDT" />);
    });

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('renders trade and ticker data on success', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockTicker),
    });
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockTrades),
    });

    await act(async () => {
      render(<TestComponent symbol="BTCUSDT" />);
    });

    await waitFor(() => {
      expect(screen.getByTestId('ticker')).toHaveTextContent('BTCUSDT');
      expect(screen.getByTestId('trades')).toBeInTheDocument();
    });
  });

  it('renders error message on failure', async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error('API Failure'));

    await act(async () => {
      render(<TestComponent symbol="BTCUSDT" />);
    });

    await waitFor(() => {
      expect(screen.getByTestId('error')).toHaveTextContent('API Failure');
    });
  });
});
