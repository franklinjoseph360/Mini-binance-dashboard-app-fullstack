import { render, screen } from '@testing-library/react';
import { HeaderGuide } from './HeaderGuide';
import type { HeaderGuideProps } from './HeaderGuide.types';

const mockProps: HeaderGuideProps = {
  pair: 'BTCUSDT',
  pairLink: 'https://dummy.com/BTCUSDT',
  price: '86924.75',
  priceUSD: '86924.75',
  tickerData: [
    { label: '24h Change', value: '-0.5%', positive: false },
    { label: '24h High', value: '88000', positive: true },
  ],
};

describe('HeaderGuide', () => {
  it('renders pair name and price', () => {
    render(<HeaderGuide {...mockProps} />);
    expect(screen.getByText('BTCUSDT')).toBeInTheDocument();
    expect(screen.getByText('$86924.75')).toBeInTheDocument();
    expect(screen.getByText('86924.75')).toBeInTheDocument();
  });

  it('renders the external link with correct label and icon', () => {
    const { getByRole } = render(<HeaderGuide {...mockProps} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', 'https://dummy.com/BTCUSDT');
    expect(link).toHaveTextContent('BTCUSDT Price');
  });

  it('renders all ticker data items', () => {
    render(<HeaderGuide {...mockProps} />);
    expect(screen.getByText('24h Change')).toBeInTheDocument();
    expect(screen.getByText('-0.5%')).toBeInTheDocument();
    expect(screen.getByText('24h High')).toBeInTheDocument();
    expect(screen.getByText('88000')).toBeInTheDocument();
  });

  it('applies correct class based on positive prop', () => {
    const { container } = render(<HeaderGuide {...mockProps} />);
    const tickerValues = container.querySelectorAll('div[data-testid="TickerValue"]');
    expect(tickerValues.length).toBe(2);
  });
});
