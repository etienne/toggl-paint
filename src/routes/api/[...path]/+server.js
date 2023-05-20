import { PUBLIC_TOGGL_API_TOKEN } from '$env/static/public';

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Basic ${btoa(PUBLIC_TOGGL_API_TOKEN + ':api_token')}`
};

/** @type {import('./$types').RequestHandler} */
export async function GET({ params, url }) {
  return await fetch(`https://api.track.toggl.com/api/v9/${params.path + url.search}`, { headers });
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ params, url, request }) {
  return await fetch(`https://api.track.toggl.com/api/v9/${params.path + url.search}`, {
    method: 'POST',
    headers,
    body: await request.text(),
  });
}
