import Vuex from 'vuex';
import todos from './modules/todos'


//create store
export default new Vuex.Store({
    modules:{
        todos
    }
});
