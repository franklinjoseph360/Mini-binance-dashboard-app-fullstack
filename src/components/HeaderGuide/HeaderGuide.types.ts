export interface TickerDataItem {
    label: string;
    value: string | number | React.ReactNode;
    positive?: boolean;
  }
  
export interface HeaderGuideProps {
    pair: string;
    pairLink: string;
    price: string | number;
    priceUSD: string | number;
    tickerData: TickerDataItem[];
}
  