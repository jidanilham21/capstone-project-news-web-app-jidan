import { useState, useEffect } from "react";
import { getApiWithToken } from "../utils/api";

const useGETDataWithToken = (url, token, beginDate, endDate, query, sort) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getApiWithToken(
          url,
          token,
          beginDate,
          endDate,
          query,
          sort
        );
        setData(response.data.response.docs);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, token, beginDate, endDate, query, sort]);

  return { data, error, isLoading };
};

export default useGETDataWithToken;
