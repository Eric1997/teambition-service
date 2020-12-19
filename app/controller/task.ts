/*
 * @Descripttion: 
 * @version: 
 * @Author: Eric
 * @Date: 2020-12-20 00:40:09
 * @LastEditors: Eric
 * @LastEditTime: 2020-12-20 00:49:33
 */
import { Controller } from 'egg';
export default class TaskController extends Controller {
  public async info() {
    const { ctx } = this;
    const userInfo = await ctx.service.task.getOrgInfo()
    ctx.body = userInfo;
  }
}