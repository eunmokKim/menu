<template>
  <main>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">돼지 김동시의 HOME BAR</h1>
          <p class="lead text-body-secondary">Welcome Suwon Home Bar</p>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(item, idx) in state.items" :key="idx" >
            <Card :item="item"></Card>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>
<script>
import axios from "axios";
import {reactive} from "vue";
import Card from "@/components/Card";
export default {
  name : "Home",
  components: {Card},
  setup() {
    const state = reactive({
      items : []
    })

    axios.get("/menu/api/test").then((res) => {
      state.items = res.data;
    });

    return {state};
  }
}
</script>

<style scoped>
</style>