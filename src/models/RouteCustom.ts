
import request from '@/utils/request';

export type RouteType = {
    Route:[]
};




export async function queryRoute(){
  const s=request('/api/getyroute')
    return s;
}

 const GetRouteCustom={
    namespace:'routecustom',
    state:{
        Route:[]
    },
    effects:{
        *test(_,{call,put}){

        },
        *getRemoteRoutes(_,{call,put}){
            const response=yield call(queryRoute);

            yield put({
                type:'getRToutes',
                payload:response.data
            })
        }
    }
    ,
    reducers:{
        getRToutes(state,action){
            return{
                ...state,
                Route:action.payload
            }
        }
    }
}

export default GetRouteCustom