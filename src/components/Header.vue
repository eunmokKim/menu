<template>
  <header>
    <div v-if="user.nickName">
      환영합니다 {{user.nickName}}
    </div>
    <div v-if="user.userEmail">
      email 환영합니다 {{user.userEmail}}
    </div>
    <div class="collapse text-bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 py-4">
            <h4>사이트맵</h4>
            <ul class="list-unstyled">
              <li>
                <router-link to="/" class="text-white">메인화면</router-link>
              </li>
              <li v-if="user.nickName === ''">
                <router-link to="/login" class="text-white">로그인</router-link>
              </li>
              <li v-else>
                <router-link to="/login" @click="test" class="text-white">로그아웃</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          <strong>Album</strong>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import {createRouter as router} from "vue-router";

export default {
  name: 'Header',
  setup() {
    const store = useStore();

    // Vuex 스토어의 상태를 computed 속성으로 만들기
    const user = computed(() => store.state.user);
    const test = () => {
      store.commit('resetUserInfo');
      router.push('/login');
    };

    return {
      // 템플릿에서 사용하기 위해 반환
      user,test
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
