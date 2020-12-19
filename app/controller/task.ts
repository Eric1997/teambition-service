/*
 * @Descripttion: 
 * @version: 
 * @Author: Eric
 * @Date: 2020-12-20 00:40:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-20 01:27:29
 */
import { Controller } from 'egg';
import { TaskCreate } from './../bean/TaskCreate';
export default class TaskController extends Controller {
  private taskCreate: TaskCreate = {
    operatorId: '5fcf88c32aa323537970a28b',
    projectId: '5fd713c4401ce21c52d1f472',
    templateId: '5fd713c47155aa69e42197ce',
    tasklistId: '5fd713c46ddde30044d53e82',
    taskgroupId: '5fd713c46ddde30044d53e81',
    executorId: '5fd72361fdc84456a69b54f1',
    content: '测试任务',
  } as TaskCreate

  public async info() {
    const { ctx } = this;
    const userInfo = await ctx.service.task.getOrgInfo()
    ctx.body = userInfo;
  }

  public async query() {
    const { ctx } = this;
    const taskInfo = await ctx.service.task.queryTask()
    ctx.body = taskInfo;
  }

  public async create() {
    const { ctx } = this;
    const taskInfo = await ctx.service.task.createTask(this.taskCreate)
    ctx.body = taskInfo;
  }
}