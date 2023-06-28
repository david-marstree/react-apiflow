import React from "react";
import { ApiflowContext } from "../components/";

const List: React.FC = () => {
  const { apiRequest } = React.useContext(ApiflowContext);
  const [response, setResponse] = React.useState<any>();

  const requestAPIFlow = React.useCallback(async () => {
    const resp = await apiRequest("12");
    setResponse(resp);
  }, [apiRequest]);

  React.useEffect(() => {
    requestAPIFlow();
  }, [requestAPIFlow]);

  return (
    <ul>
      {response &&
        response?.data &&
        response?.data.map((item: any, index: number) => (
          <li key={index}>{item.name}</li>
        ))}
    </ul>
  );
};

export default List;
