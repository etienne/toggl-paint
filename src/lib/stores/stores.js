import { writable, derived } from 'svelte/store';
 
export const projects = writable(Array());
export const activeProjects = derived(projects, $p => $p?.filter(p => p.active === true));
export const currentProject = writable(0);
export const currentTool = writable('paintBucket');
export const showProjectList = writable(false);
