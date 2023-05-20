import { writable, derived } from 'svelte/store';

export const projects = writable(Array());
export const activeProjects = derived(projects, $p => $p?.filter(p => p.active === true));
export const currentProjectId = writable(0);
export const currentProject = derived(
  [projects, currentProjectId],
  ([$p, $id]) => {
    let a = $p.find(p => p.id === $id)
    console.log(a);
  }
);
export const tasks = writable(Object());
export const activeProjectsWithTasks = derived(
  [activeProjects, tasks],
  ([$p, $t]) => {
    let projects = Array();
    $p.forEach(p => {
      let tasks = $t.data?.filter(t => t.project_id === p.id);
      if (tasks?.length) {
        p.tasks = tasks;
      }
      projects.push(p);
    });
    return projects;
  }
);
export const currentTool = writable('paintBucket');
export const showProjectList = writable(false);
export const showTaskModal = writable(false);
export const weeks = writable(Object());
export const isDragging = writable(false);
