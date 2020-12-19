 /*
 * @Descripttion: 任务service
 * @Author: Eric
 * @Date: 2020-12-19 18:15:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-20 01:24:53
 */

import { Service } from 'egg';
import tws from '../public/tws'
import { TaskCreate } from '../bean/TaskCreate';
export default class TaskService extends Service {
  /**
   * @name: 创建任务
   * @param {taskObj}
   * @return {void}
   */
  public async createTask(taskCreate: TaskCreate) {
    let res = await tws.request('POST', '/task/create', taskCreate)
    return res.body
  }

  async updateTask() {

  }

  async deleteTask() {

  }

  async queryTask() {
    // let res = await tws.request('GET', '/org/info', {
    //   orgId: "5fd7131291850e8584d9bac4"
    // })
  }

  async getOrgInfo() {
    let res = await tws.request('GET', '/org/info', {
      orgId: "5fd7131291850e8584d9bac4"
    })

    return res.body
  }
}

module.exports = TaskService;