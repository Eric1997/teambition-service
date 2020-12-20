export enum taskPriority {
  normal,
  urgent,
  mostUrgent
}

interface Payload {
  [key:string]: any
}

export interface TaskCreate {
  /**
   * 操作人的用户 ID
   */
  operatorId: string,
  /**
   * 项目 ID
   */
  projectId: string,
  /**
   * 任务类型 ID
   */
  templateId: string,
  /**
   * 任务列表 ID
   */
  tasklistId: string,
  /**
   * 任务分组 ID
   */
  taskgroupId: string,
  /**
   * 任务内容，最长为 500 个字符
   */
  content: string,
  /**
   * 执行者的用户 ID
   */
  executorId?: string,
  /**
   * 工作流状态 ID
   */
  statusId?: string,
  /**
   * 迭代 ID
   */
  sprintId?: string,
  /**
   * 开始日期
   */
  startDate?: Date | string,
  /**
   * 截止日期
   */
  dueDate?: Date | string,
  /**
   * 任务备注
   */
  note?: string,
  /**
   * 优先级：
    0：普通（默认值）
    1：紧急
    2：非常紧急
   */
  priority?: taskPriority,
  /**
   * 可见性
   */
  visible?: string,
  /**
   * 父任务 ID
   */
  parentTaskId?: string,
  /**
   * 参与者的用户 ID 列表
   */
  participants?: Array<string>,
  /**
   * 自定义字段列表
   */
  customfields?: Array<Payload>
}
