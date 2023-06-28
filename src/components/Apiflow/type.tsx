export type ApiflowProps = {
  token: string;
  children?: React.ReactNode;
};

export type ApiflowContextType = {
  apiRequest: (apiId: string) => Promise<any>;
};

export type ApiRequestProps = {
  apiId: string;
  token: string;
};
