/*
 * @Author: your name
 * @Date: 2020-12-20 00:55:03
 * @LastEditTime: 2020-12-20 01:12:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /teambition-service/app/public/params.ts
 */
enum TaskType {
  apply, //专利申请
  report, //评价报告、副本申请
  appear, //外观专利
  zhuanrang, //软著、专利转让
  fee, //年费缴纳、发票
  other // 其他
}

interface projectParam {
  projectid: string,
  templateId: string,
  taskgroupId: string
}

let paramMap: Map<string|number, projectParam> = new Map();
paramMap.set('apply', {
  projectid: '5fd713c4401ce21c52d1f472',
  templateId: '5fd713c47155aa69e42197ce',
  taskgroupId: '5fd713c46ddde30044d53e81'
})