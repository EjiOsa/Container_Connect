import Vue from 'vue';
import Vuex from 'vuex';
import {ICaseList } from './types';
// import {ICaseList , ICounterState } from './types';　// ここは不要だけど、今後のために複数用は残しておく。


Vue.use(Vuex);

export interface IRootState { // 複数のStateを使用するときはここでまとめる。
  // counterName: ICounterState;
  caseList: ICaseList;
}

// export default new Vuex.Store<ICaseList>({}); // 単数のときはここに直接でもよかった。
export default new Vuex.Store<IRootState>({});
