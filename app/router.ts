/*
 * @Descripttion: 
 * @version: 
 * @Author: Eric
 * @Date: 2020-12-20 00:36:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-20 01:28:33
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/task/info',  controller.task.info)
  router.get('/task/create',  controller.task.create)
};
