<template>
  <div>
    <search placeholder="搜索" :results="results" v-model="search"></search>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
import { Search } from 'vux'

export default {
  
  components: {
    Search
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Serach!',
      search:'',
      results:[]
    }
  }
}
</script>

<style scoped>
</style>
