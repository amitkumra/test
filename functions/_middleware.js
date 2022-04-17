
const corsHandler = async ({ next }) => {
  let response  = new Response('', { status: 200 });
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  response.headers.set('Allow', 'GET,PUT,POST,DELETE,OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Origin, Access-Control-Allow-Credentials,authorization,Content-Type, Accept');
  response.headers.set('Access-Control-Expose-Header', 'Origin, Access-Control-Allow-Credentials,authorization,Content-Type, Accept');
  return response;
};
export const onRequestOptions = [corsHandler];
