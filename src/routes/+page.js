/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const meResponse = await fetch('/api/me');
  const me = await meResponse.json();

  const projectsResponse = await fetch(`/api/workspaces/${me.default_workspace_id}/projects`);
  const projects = await projectsResponse.json();

  const tasksResponse = await fetch(`/api/workspaces/${me.default_workspace_id}/tasks`);
  const tasks = await tasksResponse.json();

  let startOfWeek = new Date();
  startOfWeek.setHours(0, 0, 0, 0);
  startOfWeek.setDate(startOfWeek.getDate() - (startOfWeek.getDay() || 7) + 1);
  const startDate = startOfWeek.toISOString();
  const endDate = '9999-09-09'; // Ugh

  const timeEntriesResponse = await fetch(`/api/me/time_entries?start_date=${startDate}&end_date=${endDate}`);
  const timeEntries = await timeEntriesResponse.json();

  const currentTimeEntryResponse = await fetch("/api/me/time_entries/current");
  const currentTimeEntry = await currentTimeEntryResponse.json();

  return { me, projects, tasks, timeEntries, currentTimeEntry };
}
