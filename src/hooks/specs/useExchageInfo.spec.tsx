import { render, screen, waitFor } from '@testing-library/react';
import { useExchangeInfo } from '../useExchangeInfo';

describe('useExchangeInfo', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  const TestComponent = () => {
    const { symbols, loading, error } = useExchangeInfo();
  
    if (loading) {
      return <div data-testid="loading">Loading...</div>;
    }
  
    if (error) {
      return <div data-testid="error">{error}</div>;
    }
  
    return (
      <div>
        {symbols && symbols.length > 0 ? (
          <ul data-testid="symbols">
            {symbols.map((s) => (
              <li key={s.value}>{s.label}</li>
            ))}
          </ul>
        ) : (
          <div data-testid="no-symbols">No Symbols</div>
        )}
      </div>
    );
  };
  

  it('fetches and renders symbols', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({
        symbols: [{ symbol: 'BTCUSDT' }, { symbol: 'ETHBTC' }],
      }),
    });

    render(<TestComponent />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByTestId('loading')).not.toBeInTheDocument());

    expect(screen.getByTestId('symbols')).toBeInTheDocument();
    expect(screen.getByText('BTCUSDT')).toBeInTheDocument();
    expect(screen.getByText('ETHBTC')).toBeInTheDocument();
  });

  it('shows error if fetch fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch error'));

    render(<TestComponent />);

    await waitFor(() => expect(screen.queryByTestId('loading')).not.toBeInTheDocument());

    expect(screen.getByTestId('error')).toHaveTextContent('Fetch error');
  });

  it('shows error if no symbols found', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ symbols: [] }),
    });

    render(<TestComponent />);

    await waitFor(() => expect(screen.queryByTestId('loading')).not.toBeInTheDocument());

    expect(screen.getByTestId('error')).toHaveTextContent('No symbols found');
  });
});
