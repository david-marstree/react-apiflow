import React$1 from 'react';

type ApiflowProps = {
    token: string;
    children?: React.ReactNode;
};
type ApiflowContextType = {
    apiRequest: (apiId: string) => Promise<any>;
};

declare const ApiflowContext: React$1.Context<ApiflowContextType>;
declare const Apiflow: React$1.FC<ApiflowProps>;

export { Apiflow, ApiflowContext };
