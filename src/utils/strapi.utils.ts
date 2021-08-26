const getStrapiUrl = (path = "") => {
  const baseUrl = process.env.NEXT_STRAPI_URL || "http://localhost:1337";
  return `${baseUrl}${path}`;
};

const buildUrlWithParams = (url: string, params: Record<string, unknown>) => {
  const query = new URLSearchParams();
  Object.keys(params).forEach(key => {
    query.append(key, params[key].toString());
  });
  return url + "?" + query.toString();
};

export interface StrapiParams {
  [param: string]: unknown;
  _limit?: unknown;
  _ne?: unknown;
  _sort?: unknown;
  _start?: unknown;
}

export const fetchStrapi = async (path = "", params?: StrapiParams) => {
  let requestUrl = getStrapiUrl(path);

  if (params) {
    requestUrl = buildUrlWithParams(requestUrl, params);
  }

  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
};
