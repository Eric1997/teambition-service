import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // sequelize: {
  //   enable: true,
  //   package: 'egg-sequelize',
  // },
  mysql: {
    enable: true,
    package: 'egg-mysql'
  },
  ecors: {
    enable: true,
    package: 'egg-cors',
  }
};

export default plugin;
