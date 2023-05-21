/** @type {import('./$types').Actions} */
export const actions = {
  taskUpdate: async ({ request, fetch }) => {
    const data = await request.formData();
    const name = data.get('name');
    const estimated_seconds = Number(data.get('estimate')) * 3600;
    const workspace_id = Number(data.get('workspace_id'));
    const project_id = Number(data.get('project_id'));
    const task_id = Number(data.get('task_id'));
    
    const taskResponse = await fetch(`/api/workspaces/${workspace_id}/projects/${project_id}/tasks${task_id ? `/${task_id}` : ''}`, {
      method: task_id ? 'PUT' : 'POST',
      body: JSON.stringify({
        active: true,
        estimated_seconds,
        name,
        project_id,
        workspace_id,
      })
    });
    const res = await taskResponse.json();
    return res;
  },
  
  taskComplete: async ({ request, fetch }) => {
    const data = await request.formData();
    const workspace_id = Number(data.get('workspace_id'));
    const project_id = Number(data.get('project_id'));
    const task_id = Number(data.get('task_id'));
    
    const taskResponse = await fetch(`/api/workspaces/${workspace_id}/projects/${project_id}/tasks/${task_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        active: false,
        project_id,
        workspace_id,
      })
    });
    const res = await taskResponse.json();
    return res;
  },

  taskDelete: async ({ request, fetch }) => {
    const data = await request.formData();
    const workspace_id = Number(data.get('workspace_id'));
    const project_id = Number(data.get('project_id'));
    const task_id = Number(data.get('task_id'));

    const taskResponse = await fetch(`/api/workspaces/${workspace_id}/projects/${project_id}/tasks/${task_id}`, {
      method: 'DELETE',
    });
    const res = await taskResponse.json();
    return res;
  },
}
