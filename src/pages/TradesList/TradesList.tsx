import React, { useState } from "react";
import { Table as TradesTable } from "../../components/Table";
import { SelectBoxWithSearch, Option } from "../../components/SelectBoxWithSearch";
import { HeaderGuide } from "../../components/HeaderGuide";
import {
    PageLayout,
    LeftColumn,
    RightColumn,
    CenteredMessage,
    SpinnerIcon,
} from "./TradesList.style";
import { useExchangeInfo, useFormattedTickerData, useMarketData } from "../../hooks";

export const TradesList = (): React.ReactElement => {
    const [currencyPairSelection, setCurrencyPairSelection] = useState<string | null>(null);

    const {
        trades,
        ticker24hr,
        loading: isMarketDataLoading,
        error: hasMarketDataAPIFailed,
    } = useMarketData(currencyPairSelection);

    const {
        symbols,
        loading: isSymbolsDataLoading,
        error: hasSymbolsAPIFailed,
    } = useExchangeInfo();

    const tickerData = useFormattedTickerData(ticker24hr);

    const isLoading = isMarketDataLoading || isSymbolsDataLoading;
    const hasError = hasMarketDataAPIFailed || hasSymbolsAPIFailed;

    const handleCurrencyPairSelection = (option: Option) => {
        if (!option?.value) return;
        setCurrencyPairSelection(option.value);
    };

    if (hasError) {
        return (
            <PageLayout>
                <CenteredMessage isError>
                    <p>Failed to load data. Please try again later.</p>
                    <p style={{ fontSize: '0.9rem' }}>
                        {hasMarketDataAPIFailed ?? hasSymbolsAPIFailed}
                    </p>
                </CenteredMessage>
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <LeftColumn>
                <SelectBoxWithSearch
                    placeholder="Select Currency Pair"
                    options={symbols}
                    onSelect={handleCurrencyPairSelection}
                />
                {ticker24hr && tickerData && (
                    <HeaderGuide
                        pair={ticker24hr.symbol}
                        pairLink={`https://www.binance.com/en/trade/${ticker24hr.symbol}`}
                        price={ticker24hr?.lastPrice ?? "N/A"}
                        priceUSD={ticker24hr?.lastPrice ?? "N/A"}
                        tickerData={tickerData}
                    />
                )}
            </LeftColumn>

            <RightColumn>
                {isLoading ?

                    <CenteredMessage>
                        <SpinnerIcon />
                        <div>Loading Trades data...</div>
                    </CenteredMessage>
                    :
                    <TradesTable
                        data={trades}
                        sortableColumns={["price", "qty", "quoteQty", "time"]}
                    />
                }
            </RightColumn>
        </PageLayout>
    );
};
