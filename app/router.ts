/*
 * @Descripttion: 
 * @version: 
 * @Author: Eric
 * @Date: 2020-12-20 00:36:16
 * @LastEditors: Eric
 * @LastEditTime: 2020-12-20 00:52:32
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/task/info',  controller.task.info)
};
