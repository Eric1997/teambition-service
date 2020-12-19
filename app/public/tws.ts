/*
 * @Descripttion: 
 * @version: 
 * @Author: Eric
 * @Date: 2020-12-20 00:40:24
 * @LastEditors: Eric
 * @LastEditTime: 2020-12-20 00:51:33
 */

import { TWS } from 'tws-auth';

const tws = new TWS({
  appId: '5fd74c50a56e16787946e152',
  appSecrets: ['XGCX4QScsuMyWp0cZTazymk7kxxbPWvC'],
  host: 'https://open.teambition.com/api'
})

export default tws.withTenant('5fd7131291850e8584d9bac4', 'organization');
