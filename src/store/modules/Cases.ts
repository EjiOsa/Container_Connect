import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import {ICaseList } from '../types';
import store from '@/store/store';
import LCC from 'lightning-container';

@Module({store, dynamic: true, namespaced: true, name: 'caseList' })

class CASE extends VuexModule implements ICaseList {
  public CASE_LIST = [
    {ID: '', Subject: '', Type: ''},
  ];

    @Mutation
    public salesforceResponse(result: any, event: any ): void {
      (result) ? this.CASE_LIST = result : // if文のショートハンド
      this.CASE_LIST = [
          {ID: '1', Subject: 'subject test1', Type: 'new'},
          {ID: '2', Subject: 'subject test2', Type: 'close'},
          {ID: '3', Subject: 'subject test3', Type: 'test'},
        ];
    }

    @Action({})
    public salesforce_Case(): object {
        LCC.callApex(
            'CaseController.getCases',
            3,
            this.salesforceResponse,
            {
                buffer: true, // default true
                escape: true, // default true
                timeout: 30000, // default 30000 max 120000
            },
        );
        return this.CASE_LIST;
    }
}

export default getModule(CASE);
