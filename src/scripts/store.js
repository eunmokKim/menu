import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            user : {
                accessToken : '',
                userEmail : '',
                nickName : ""
            }
        }
    },
    mutations : {
        setUserInfo(state, data) {
            console.log("store.js");
            console.log(data);
            state.user.userEmail = data.userEmail;
            state.user.accessToken = data.accessToken;
            state.user.nickName = data.nickName;
        },
        resetUserInfo(state) {
            state.user = { accessToken: '', userEmail: '', nickName: '' };
        }
    },
    actions : {
        updateUserData({commit}, data){
            commit('setUserInfo', data);
        }
    }
})

export default store;