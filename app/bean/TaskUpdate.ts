import { TaskCreate } from './TaskCreate';

export interface TaskUpdate extends TaskCreate {
  taskId: string
}