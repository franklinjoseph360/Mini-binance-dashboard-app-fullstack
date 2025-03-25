import { render, screen, fireEvent } from '@testing-library/react';
import { Table } from './Table';

type TradeMock = {
  id: number;
  price: number;
  qty: number;
  quoteQty: number;
  time: number;
};

const mockData: TradeMock[] = [
  {
    id: 1,
    price: 100,
    qty: 2,
    quoteQty: 200,
    time: 1711363200000
  },
  {
    id: 2,
    price: 200,
    qty: 1,
    quoteQty: 200,
    time: 1711449600000,
  },
];

describe('Table Component', () => {
  it('renders correctly with data', () => {
    render(<Table data={mockData} sortableColumns={['price', 'qty']} />);

    expect(screen.getByText('id')).toBeInTheDocument();
    expect(screen.getByText('price')).toBeInTheDocument();
    expect(screen.getByText('quoteQty')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('renders no records message when data is empty', () => {
    render(<Table data={[]} sortableColumns={['price']} />);
    expect(screen.getByText('No Records')).toBeInTheDocument();
  });

  it('sorts table data by number column when clicked', () => {
    render(<Table data={mockData} sortableColumns={['price']} />);

    const priceHeader = screen.getByText('price');
    fireEvent.click(priceHeader);

    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('100');

    fireEvent.click(priceHeader);
    expect(rows[1]).toHaveTextContent('200');
  });

  it('does not sort when clicking a non-sortable column', () => {
    render(<Table data={mockData} sortableColumns={['qty']} />);

    const priceHeader = screen.getByText('price');
    fireEvent.click(priceHeader);

    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('100');
  });
});
