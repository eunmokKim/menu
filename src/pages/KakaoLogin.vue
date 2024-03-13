<template>
  <div>welcome</div>
</template>

<script>

import {useRoute, useRouter} from 'vue-router';
import axios from "axios";
import {onMounted} from "vue";
import {useStore} from "vuex";

export default {
    name : "KakaoLogin",
    components : {},

    setup() {
      const route = useRoute();
      const router = useRouter();
      const store = useStore();

      const getCode = () => {
        return route.query.code;
      };

      const getToken = () => {
        axios.get('/kakao/login/callback?code=' + getCode())
            .then((res) => {
              console.log(res);
              store.dispatch('updateUserData', res.data);
              router.push("/admin");
            })
            .catch((error) => {
              console.log(error);
            });
      };

      onMounted(() => {
        console.log("onMounted");
        getToken();
      });

     /* computed(() => {
    변경추적하려는 값
        })*/

      return {getCode, getToken};
    }
  }
</script>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>