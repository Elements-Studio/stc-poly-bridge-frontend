import Vue from 'vue';
import getStoreKey from '@/utils/getStoreKey';
import httpApi from '@/utils/httpApi';

export default {
  state: {
    expectTimeMap: {},
  },
  getters: {
    getExpectTime: state => ({ fromChainId, toChainId }) =>
      state.expectTimeMap[getStoreKey({ fromChainId, toChainId })],
  },
  mutations: {
    setExpectTime(state, { params, value }) {
      Vue.set(state.expectTimeMap, getStoreKey(params), value);
    },
  },
  actions: {
    async getExpectTime({ commit }, { fromChainId, toChainId }) {
      console.log('actions getExpectTime', { commit }, { fromChainId, toChainId });
      // const time = await httpApi.getExpectTime({ fromChainId, toChainId });
      let time;
      // mock data to test Eth(Ethereum) to xEth(Starcoiin)
      if (fromChainId === 2 && toChainId === 318) {
        time = { SrcChainId: 2, DstChainId: 318, Time: 242 };
      } else {
        time = await httpApi.getExpectTime({ fromChainId, toChainId });
      }
      console.log({ time });
      commit('setExpectTime', { params: { fromChainId, toChainId }, value: time });
    },
  },
};
