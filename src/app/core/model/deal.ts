// tslint:disable-next-line:no-empty-interface
export interface Deal {
    v3DealId: string;
    dealName?: string;
    eFrontDealId?: string;
    v3CompanyId?: string;
    v3CompanyName?: string;
    sectorId?: number;
    sector?: string;
    countryId?: number;
    country?: string;
    transactionTypeId?: number;
    transactionType?: string;
    transactionFees?: number;
    otherFees?: number;
    currency?: string;
    activeInActive?: string;
    exitDate?: Date;
}
