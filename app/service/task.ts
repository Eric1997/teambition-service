 /*
 * @Descripttion: 任务service
 * @Author: Eric
 * @Date: 2020-12-19 18:15:50
 * @LastEditors: Eric
 * @LastEditTime: 2020-12-20 00:54:26
 */

import { Service } from 'egg';
import tws from '../public/tws'

export default class TaskService extends Service {
  /**
   * @name: 创建任务
   * @param {taskObj}
   * @return {void}
   */
  public async createTask() {
    // let res = await tws.request('POST', '/task/create', taskDto)
  }

  async updateTask() {

  }

  async deleteTask() {

  }

  async queryTask() {

  }

  async getOrgInfo() {
    let res = await tws.request('GET', '/org/info', {
      orgId: "5fd7131291850e8584d9bac4"
    })

    return res.body
  }
}

module.exports = TaskService;