import React from "react";
import { CurrencyPairForm } from "../../components/CurrencyPairForm";
import { TradesTable } from "../../components/TradesTable";

export const LandingPage = (): React.ReactElement => {
    return (
        <div>
            <p>Landing Page</p>
            <CurrencyPairForm />
            <TradesTable />
        </div>
    );
};