// Helper function to format date
export const formatISOtoDate = () => {
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(modified_at));
  return formattedTime
}

// Calculate the hours of projects
export const calculateTotalHours = (tasks, userId, projectId) => {
  // Get only the projects for user
  const userProjectTasks = tasks.filter(
    (task) => task.user.id === userId && task.project === projectId
  );
  // Get total hours for each
  const totalHours = userProjectTasks.reduce(
    (total, task) => total + parseInt(task.hours, 10),
    0
  );

  return totalHours;
}

// Formats seconds in HH:mm:ss format
const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}:${String(seconds).padStart(2, '0')}`;

  return formattedTime;
};

export default formatTime
