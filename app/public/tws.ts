/*
 * @Descripttion: 
 * @version: 
 * @Author: Eric
 * @Date: 2020-12-20 00:40:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-20 01:12:48
 */

import { TWS } from 'tws-auth';

const tws = new TWS({
  appId: '5fd74c50a56e16787946e152',
  appSecrets: ['XGCX4QScsuMyWp0cZTazymk7kxxbPWvC'],
  host: 'https://open.teambition.com/api'
})

export default tws.withTenant('5fd7131291850e8584d9bac4', 'organization').withOperator('5fcf88c32aa323537970a28b');
