import { TaskDelete } from './../bean/TaskDelete';
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

  private taskDelete: TaskDelete = {
    operatorId: '5fcf88c32aa323537970a28b',
    ids: ['5fdf488f76026707c500c1ec']
  }

  public async info() {
    const { ctx } = this;
    const userInfo = await ctx.service.task.getOrgInfo()
    ctx.body = userInfo;
  }

  public async query() {
    const { ctx } = this;
    const taskInfo = await ctx.service.task.queryTask(ctx.params.id)
    ctx.body = taskInfo;
  }

  public async create() {
    const { ctx } = this;
    const taskInfo = await ctx.service.task.createTask(this.taskCreate)
    ctx.body = taskInfo;
  }

  public async delete() {
    const { ctx } = this;
    const taskInfo = await ctx.service.task.deleteTask(this.taskDelete)
    ctx.body = taskInfo;
  }
}