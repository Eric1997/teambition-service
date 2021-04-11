import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608395770375_8160';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    // sequelize: {
    //   dialect: 'mysql',
    //   host: 'ip...',
    //   port: 3306,
    //   password: 'password',
    //   database: 'database',
    //   timezone: '+08:00',
    // }
    mysql: {
      client: {
        host: 'localhost', // 自己的数据库host
        port: '3306', // 自己的连接端口
        user: 'root', // 可以使用root 
        password: 'eric1997', // 数据库密码
        database: 'task',     // 要连接的数据库名称
      },
      app: true,
      agent: false
    },
    security: {
      csrf: {
        enable: false,
        ignoreJSON: true,
      },
      domainWhiteList: [ 'http://localhost:9528' ],
    },
    cors: {
      origin: '*', // 匹配规则  域名+端口  *则为全匹配
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    }
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
