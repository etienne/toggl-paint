/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const meResponse = await fetch('/api/me');
  const me = await meResponse.json();

  const projectsResponse = await fetch(`/api/workspaces/${me.default_workspace_id}/projects`);
  const projects = await projectsResponse.json();

  const tasksResponse = await fetch(`/api/workspaces/${me.default_workspace_id}/tasks`);
  const tasks = await tasksResponse.json();

  return { me, projects, tasks };
}
