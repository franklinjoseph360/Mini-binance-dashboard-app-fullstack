import React, { useState } from "react";
import { Table as TradesTable } from "../../components/Table";
import { SelectBoxWithSearch, Option } from "../../components/SelectBoxWithSearch";
import { HeaderGuide } from "../../components/HeaderGuide";
import { LandingPageWrapper, LoadingWrapper } from "./LandingPage.style";
import { useExchangeInfo, useFormattedTickerData, useMarketData } from "../../hooks";
import { FaBitcoin } from "react-icons/fa6";


export const LandingPage = (): React.ReactElement => {
    const [currencyPairSelection, setCurrencyPairSelection] = useState<string | null>(null);

    const { trades, ticker24hr, loading: isMarketDataLoading, error: hasMarketDataAPIFailed } = useMarketData(currencyPairSelection);

    const { symbols, loading: isSymbolsDataLoading, error: hasSymbolsAPIFailed } = useExchangeInfo();

    const tickerData = useFormattedTickerData(ticker24hr);

    const handleCurrencyPairSelection = (option: Option) => {
        if (!option?.value) return false;
        setCurrencyPairSelection(option.value)
    }

    const isLoading = isMarketDataLoading || isSymbolsDataLoading;

    return (
        <LandingPageWrapper>
            <SelectBoxWithSearch
                placeholder="Enter Currency Pair"
                options={symbols}
                onSelect={(option) => handleCurrencyPairSelection(option)}
            />
            {isLoading ? (
                <LoadingWrapper>
                    <FaBitcoin className="spin" />
                </LoadingWrapper>
            ) : (
                <>
                    {ticker24hr && tickerData && (
                        <HeaderGuide
                            pair={ticker24hr.symbol}
                            pairLink={`https://www.binance.com/en/trade/${ticker24hr.symbol}`}
                            price={ticker24hr?.lastPrice ?? "N/A"}
                            priceUSD={ticker24hr?.lastPrice ?? "N/A"}
                            tickerData={tickerData}
                        />
                    )}
                    <TradesTable
                        data={trades}
                        sortableColumns={["price", "qty", "quoteQty", "time"]}
                    />
                </>
            )}
        </LandingPageWrapper>
    );
};