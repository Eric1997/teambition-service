 /*
 * @Descripttion: user service
 * @Author: Eric
 * @Date: 2020-12-19 18:15:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-20 01:24:53
 */

 import { Service } from 'egg';
 import { UserCreate } from '../bean/UserCreate';

 export default class UserService extends Service {
   /**
    * @name: 创建任务
    * @param {taskObj}
    * @return {void}
    */
   public async createUser(userCreate: UserCreate) {
     //  @ts-ignore
     console.log(userCreate, this.app.mysql.insert)
   //  @ts-ignore
    const result = await this.app.mysql.insert('user', userCreate);
    return result;
   }
 }
 
 module.exports = UserService;