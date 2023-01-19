import { Toggl } from 'toggl-track';
import { PUBLIC_TOGGL_API_TOKEN } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const toggl = new Toggl({
    auth: {
      token: PUBLIC_TOGGL_API_TOKEN,
    },
  });

  const entries = await toggl.timeEntry.list();
  const me = await toggl.me.get();
  const projects = await toggl.projects.list(me.default_workspace_id);

  return { entries, me, projects }
}
