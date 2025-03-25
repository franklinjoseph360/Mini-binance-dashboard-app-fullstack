import { render, screen, fireEvent } from '@testing-library/react';
import { SelectBoxWithSearch } from './SelectBoxWithSearch';
import type { Option } from './SelectBoxWithSearch.types';

describe('SelectBoxWithSearch', () => {
  const mockOptions: Option[] = [
    { label: 'BTCUSDT', value: 'BTCUSDT' },
    { label: 'ETHBTC', value: 'ETHBTC' },
    { label: 'BNBBTC', value: 'BNBBTC' },
  ];

  const setup = (onSelect = jest.fn()) => {
    render(
      <SelectBoxWithSearch
        options={mockOptions}
        onSelect={onSelect}
        placeholder="Search"
      />
    );
  };

  it('renders input and icons', () => {
    setup();
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByLabelText('Search Currency Pair')).toBeInTheDocument();
  });

  it('filters options based on query and displays dropdown', () => {
    setup();
    const input = screen.getByPlaceholderText('Search');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'eth' } });
    expect(screen.getByText('ETHBTC')).toBeInTheDocument();
  });

  it('disables search when no option is selected', () => {
    setup();
    const searchBtn = screen.getByLabelText('Search Currency Pair');
    expect(searchBtn).toBeDisabled();
  });

  it('clears input when clear icon is clicked', () => {
    setup();
    const input = screen.getByPlaceholderText('Search');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'btc' } });
    const clearBtn = screen.getByLabelText('Clear Input');
    fireEvent.click(clearBtn);
    expect(input).toHaveValue('');
  });
});
