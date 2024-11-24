import http from "../api/AxiosInstint";


class EmployeeService {
  register(employeeData) {
    return http.post(`/hods/employee/create`, employeeData);
  }

  fetchAll() {
    return http.get('/allemployee');
  }

  fetchEmployee(employeeId) {
    return http.get(`/hods/employee/show/{id}${employeeId}`);
  }

  updateEmployee(employeeId, data) {
    return http.put(`/hods/employee/update/{id}${employeeId}`, data);
  }

  deleteEmployee(employeeId) {
    return http.delete(`/hods/employee/delete/{id}${employeeId}`);
  }
}



class TeamService {
  registerTeam(teamData) {
    return http.post(`/hods/teams`, teamData);
  }

  fetchAllTeams() {
    return http.get('/hods/teamsindex');
  }

  fetchTeam(teamId) {
    return http.get(`/hods/teams/{team_id}${teamId}`);
  }

  updateTeam(teamId, data) {
    return http.put(`/hods/teamsUpdate/{team_id}${teamId}`, data);
  }

  deleteTeam(teamId) {
    return http.delete(`/hods/teams/{team_id}${teamId}`);
  }
}



class ProjectService {
  register(projectData) {
    return http.post(`/hods/projects`, projectData); 
  }

  fetchAll() {
    return http.get('/employees/project');
  }

  count() {
    return http.get('/employees/projects/status/count');
  }

  fetchProject(projectId) {
    return http.get(`/hods/projectsShow/{project_id}${projectId}`);
  }

  updateProject(projectId, data) {
    return http.put(`/employees/projects/{project_id}/status${projectId}`, data);
  }

  updateStatus(projectId, data) {
    return http.put(`/employees/projects/${projectId}/status`, data);
  }

  delete(projectId) {
    return http.delete(`/hods/projectsDelete/${projectId}`);
  }
}



class ReportService {
  register(reportData) {
    return http.post(`/api/reports`, reportData);
  }

  fetchAll() {
    return http.get('/reportsindex');
  }

  fetch(reportId) {
    return http.get(`/reports/${reportId}`);
  }

  update(reportId, data) {
    return http.put(`/reports/${reportId}`, data);
  }

  delete(reportId) {
    return http.delete(`/reports/${reportId}`);
  }
}



class TaskService {
  register(taskData) {
    return http.post(`/hods/tasks`, taskData);
  }

  fetchAll() {
    return http.get('/hods/alltasks');
  }

  // fetchTask(taskId) {
  //   return http.get(`/reports/${taskId}`);
  // }

  update(taskId, data) {
    return http.put(`/hods/tasks/${taskId}`, data);
  }

  delete(taskId) {
    return http.delete(`/hods/tasks/${taskId}`);
  }
}



class CommentService {
  register(taskId, commentData) {
    return http.post(`/hods/allProjects/${taskId}/comments`, commentData);
  }

  fetchAll(taskId) {
    return http.get(`/tasks/{task_id}/comments/index/${taskId}/comments/index`);
  }

  fetch(commentId) {
    return http.get(`/comments/{comment_id}/${commentId}`);
  }

  update(commentId, data) {
    return http.put(`/comments/{comment_id}/${commentId}`, data);
  }

  delete(commentId) {
    return http.delete(`/api/comments/{comment_id}/${commentId}`);
  }
}






// Exporting instances of each service class
export const employeeService = new EmployeeService();
export const teamService = new TeamService();
export const projectService = new ProjectService();
export const reportService = new ReportService();
export const taskService = new TaskService();
export const commentService = new CommentService();


