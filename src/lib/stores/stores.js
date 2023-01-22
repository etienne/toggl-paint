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
export const currentTool = writable('paintBucket');
export const showProjectList = writable(false);
export const weeks = writable(Object());
export const isDragging = writable(false);
