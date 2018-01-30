import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({ // export a constant named 'store'
    state: { // store all properties our app has
        name: 'Farmlink',
        counter: 0,
        clients: [
            {name: 'Farmlink', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
            {name: 'Fiesta Farms', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {name: 'LGO', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
            {name: 'Ingenuity', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {name: 'Hypenotic', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
            {name: 'Park People', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {name: 'OneGrid', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        ],
        projects: [
            {name: 'Project #1', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {name: 'Project #2', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
            {name: 'Project #3', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
            {name: 'Project #4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, 
        ]	
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + "clicks"
        }
    },
    mutations: {
        removeClient: (state, payload) => {
            let i = state.clients.indexOf(payload);
            if(i != -1) {
                state.clients.splice(i, 1);
            }
        },
        removeProject: (state, payload) => {
            let i = state.projects.indexOf(payload);
            if(i != -1) {
                state.projects.splice(i, 1);
            }
        },
    },
    actions: {
        removeClient: ({ commit }, payload) => {
            commit('removeClient', payload)
        },
        removeProject: ({ commit }, payload) => {
            commit('removeProject', payload)
        }

    }
});