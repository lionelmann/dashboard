import { state } from './state'

import { 
    SET_ACTIVE_PROJECT,
    SET_PROJECT_LIST,
    
} from './mutation-types'

export const mutations = {
    SET_ACTIVE_PROJECT(state, list) {
        state.activeProject = list
    }
}