import { methodFormat } from '@/utils/methodFormat';

import client from './client';

const PATH = 'api/';

const groupApis = {
  getGroupList: methodFormat(async (userCode) => {
    const response = await client.get(`${PATH}group/getGroupList/${userCode}`);
    return response;
  }),
  addMember: methodFormat(async (data) => {
    const response = await client.post(`${PATH}group/addMembers`, data);
    return response;
  }),
  createGroup: methodFormat(async (data) => {
    const response = await client.post(`${PATH}group/createGroup`, data);
    return response;
  }),
  checkInvite: methodFormat(async (userCode) => {
    const response = await client.get(`${PATH}group/checkInvite/${userCode}`);
    return response;
  }),
  getGroupInfo: methodFormat(async (groupCode) => {
    const response = await client.get(`${PATH}group/getMemberListFromGroup/${groupCode}`);
    return response;
  }),
  requestPay: methodFormat(async (groupCode) => {
    const response = await client.get(`${PATH}group/getMemberListFromGroup/${groupCode}`);
    return response;
  }),
};

export default groupApis;
