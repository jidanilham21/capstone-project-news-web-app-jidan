import axios from "axios";

export const getApiWithToken = async (
  url,
  token,
  beginDate,
  endDate,
  query,
  sort
) => {
  const response = await axios.get(url, {
    params: {
      "api-key": token,
      "begin-date": beginDate,
      "end-date": endDate,
      q: query,
      sort: sort,
    },
  });

  return response;
};
