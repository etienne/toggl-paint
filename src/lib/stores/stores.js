import { browser } from '$app/environment';
import { writable, derived } from 'svelte/store';

export const me = writable(Object());
export const projects = writable(Array());
export const activeProjects = derived(projects, $p => $p?.filter(p => p.active === true));
export const currentProjectId = writable(0);

export const tasks = writable(Object());
export const currentTaskId = writable(0);
export const currentTask = derived(
  [tasks, currentTaskId],
  ([$t, $id]) => {
    return $t.data.find((t = { id: 0 }) => t.id === $id);
  }
);
export const activeProjectsWithTasks = derived(
  [activeProjects, tasks],
  ([$p, $t]) => {
    let projects = Array();
    $p.forEach(p => {
      let tasks = $t.data?.filter((t = { project_id: 0 }) => t.project_id === p.id);
      if (tasks?.length) {
        p.tasks = tasks;
      }
      projects.push(p);
    });
    projects.sort((a, b) => Number(b.tasks?.length > 0) - Number(a.tasks?.length > 0) );
    return projects;
  }
);

export const timeEntries = writable(Array());
export const hoursThisWeekByProject = derived(timeEntries, $t => {
  let projects = Object();
  $t.forEach(t => {
    if (Math.sign(t.duration) === -1) return;
    if (projects[t.project_id]) {
      projects[t.project_id] += t.duration / 3600;
    } else {
      projects[t.project_id] = t.duration / 3600;
    }
  });
  return projects;
});

export const currentTimeEntry = writable(Object());

export const currentTool = writable('paintBucket');
export const showProjectList = writable(false);
export const showTaskModal = writable(false);
export const showTaskDeleteModal = writable(false);
const weeksStringValue = browser ? window.localStorage.getItem('weeks') ?? '{}' : '{}';
const weeksValue = JSON.parse(weeksStringValue);
export const weeks = writable(weeksValue);
export const isDragging = writable(false);

weeks.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('weeks', JSON.stringify(value));
  }
});
