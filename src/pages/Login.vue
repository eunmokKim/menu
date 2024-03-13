<template>
  <div class="form-signin w-100 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
      </div>
      <span>
        <a href="#" @click="login">
          <img src="@/assets/kakao_login_medium_narrow.png">
        </a>
      </span>
    </form>
  </div>
<!--  <span v-if=""></span>-->
</template>

<script>
// import axios from "axios";

import axios from "axios";

export default {
    name : "Login",
    components : {},

    setup() {
      const login = () =>{
        axios.get("/kakao/login")
            .then(res => {
              location.replace(res.data);
            })
            .catch(error => {
              console.log(error);
            })
      };



      return {login};
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