/*
 * @Author: your name
 * @Date: 2020-12-20 01:23:09
 * @LastEditTime: 2020-12-20 01:24:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /teambition-service/app/bean/TaskCreate.ts
 */
export type TaskCreate = {
  operatorId: string,
  projectId: string,
  templateId: string,
  tasklistId: string,
  taskgroupId: string,
  content: string,
  executorId?: string,
  statusId?: string,
  startDate?: Date | string,
  dueDate?: Date | string,
  note?: string,
  priority?: number,
  visible?: string,
  parentTaskId?: string,
  participants?: Array<string>,
  customfields?: Array<any>
}
