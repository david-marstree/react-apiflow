import React from "react";

import type { ApiflowContextType, ApiflowProps } from "./type";

import { apiRequest } from "./model";

export const ApiflowContext = React.createContext<ApiflowContextType>({
  apiRequest: (apiId: string) => Promise.resolve(null),
});

export const Apiflow: React.FC<ApiflowProps> = ({ children, token }) => {
  const callRequest = React.useCallback(
    async (apiId: string) => {
      return await apiRequest({ apiId, token });
    },
    [token]
  );

  return (
    <ApiflowContext.Provider value={{ apiRequest: callRequest }}>
      {children}
    </ApiflowContext.Provider>
  );
};
