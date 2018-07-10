// tslint:disable-next-line:no-empty-interface
export interface Deal {
    v3DealId: string;
    dealName: string;
    eFrontDealId: string;
    v3CompanyId: string;
    v3CompanyName: string;
    sectorId: Int32Array;
    sector: string;
    countryId: Int32Array;
    country: string;
    transactionTypeId: Int32Array;
    transactionType: string;
    transactionFees: DoubleRange;
    otherFees: DoubleRange;
    currency: string;
    activeInActive: string;
    exitDate: Date;
}
