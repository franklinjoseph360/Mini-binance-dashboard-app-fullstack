import { render, screen } from '@testing-library/react';
import { useFormattedTickerData } from '../useFormattedTicker24hrData';
import type { Ticker24hrType } from '../../types';

const TestComponent = ({ ticker24hr }: { ticker24hr: Ticker24hrType | null }) => {
  const data = useFormattedTickerData(ticker24hr);

  return (
    <ul data-testid="ticker-list">
      {data.map((item, idx) => (
        <li key={idx} data-testid="ticker-item" data-positive={item.positive}>
          <strong>{item.label}:</strong> {item.value}
        </li>
      ))}
    </ul>
  );
};

describe('useFormattedTickerData', () => {
  const mockTicker: Ticker24hrType = {
    symbol: 'BTCUSDT',
    lastPrice: '50000.00',
    priceChange: '1000',
    priceChangePercent: '2',
    highPrice: '51000.00',
    lowPrice: '48000.00',
    volume: '1234.5678',
    quoteVolume: '56789012.34',
  };

  it('formats ticker data correctly', () => {
    render(<TestComponent ticker24hr={mockTicker} />);
    const listItems = screen.getAllByTestId('ticker-item');

    expect(listItems[0]).toHaveTextContent('24h Change: 1000 (2%)');
    expect(listItems[1]).toHaveTextContent('24h High: 51000.00');
    expect(listItems[2]).toHaveTextContent('24h Low: 48000.00');
    expect(listItems[3]).toHaveTextContent('24h Volume (BTC): 1234.5678');
    expect(listItems[4]).toHaveTextContent('24h Volume (USDT): 56789012.34');
  });

  it('returns empty array when ticker is null', () => {
    render(<TestComponent ticker24hr={null} />);
    const list = screen.getByTestId('ticker-list');
    expect(list.children.length).toBe(0);
  });

  it('sets positive to true when priceChange is positive', () => {
    render(<TestComponent ticker24hr={mockTicker} />);
    const firstItem = screen.getAllByTestId('ticker-item')[0];
    expect(firstItem.getAttribute('data-positive')).toBe('true');
  });

  it('sets positive to false when priceChange is negative', () => {
    const negativeTicker = { ...mockTicker, priceChange: '-500', priceChangePercent: '-1.5' };
    render(<TestComponent ticker24hr={negativeTicker} />);
    const firstItem = screen.getAllByTestId('ticker-item')[0];
    expect(firstItem.getAttribute('data-positive')).toBe('false');
  });
});
