import api from '../api';

type paramsProps = {
  ts: number;
  hash: string;
  apiKey: string;
  titleStartsWith?: string;
};

const getAll = (url: string, params?: paramsProps) => {
  return api.get(url, { params });
};

const getCharacters = (url: string) => {
  return api.get(url);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, getCharacters };
