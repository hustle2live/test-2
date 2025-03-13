import { baseURL } from './apiPath';

type ApiParams = {
   endpoint: string | undefined;
   params: {
      id?: string;
      queries?: string;
   };
};

type HttpRequestProps = {
   method: 'GET' | 'POST' | 'PUT' | 'DELETE';
   url: string;
   headers?: RequestInit['headers'];
   body?: RequestInit['body'];
};

const createURL = ({ endpoint, params }: ApiParams) => {
   const { id, queries } = params;
   const addedID = id ? `/${id}` : '';
   const addedQueries = queries ? `?${queries}` : '';
   const query = `${baseURL}${endpoint}${addedID}${addedQueries}`;
   return query;
};

const httpRequest = async ({ method, url, body, headers = undefined }: HttpRequestProps): Promise<Response> => {
   return fetch(url, { method, headers, body });
};

export { httpRequest, type ApiParams, createURL, type HttpRequestProps };
