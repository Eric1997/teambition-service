import { Controller } from 'egg';

export default class UserController extends Controller {
  public async create() {
    const { ctx } = this;
    const taskInfo = await ctx.service.user.createUser(ctx.query)
    ctx.body = taskInfo;
  }
}