import togglClient from 'toggl-client';
import { PUBLIC_TOGGL_API_TOKEN } from '$env/static/public';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const toggl = togglClient({ apiToken: PUBLIC_TOGGL_API_TOKEN });

  const me = await toggl.user.current();
  const projects = await toggl.projects.list(me.default_workspace_id);
  const tasks = await toggl.workspaces.tasks(me.default_workspace_id);

  return { me, projects, tasks }
}
