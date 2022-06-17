// import { kendraResult } from "../old-kendra-result";

export const getKendraResults = async (searchTerm) => {
  const URL = `https://vprtbiybhi.execute-api.us-east-1.amazonaws.com/dev/query?searchTerm=${searchTerm}`;
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};
