<template>
  <div class="me">
    <div class="user">
      <div class="user-flex">
        <div class="user-img">
          <img :src="img" alt="">
        </div>
        <div class="user-gutter">
          
        </div>
        <div class="user-descrption">
          <h1>Vue-Alex</h1>
          <p>微信号:x1772463536</p>
        </div>
        <div class="user-link">
          <i class="fa fa-qrcode" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <group>
      <cell is-link link="https://github.com/Vue-Alex">
        <i class="fa fa-github-square fs24" aria-hidden="true" slot="icon"></i>
        <span>GitHub</span>
        <span slot="after-title" class="ml20 colorC">Vue-Alex</span>
      </cell>
      
      <cell is-link>
        <i class="fa fa-code fs24" aria-hidden="true" slot="icon"></i>
        <span>Code</span>
        <span slot="after-title" class="ml20 colorC">See my code</span>
      </cell>
      
    </group>
    <group>
    <cell is-link>
        <i class="fa fa-picture-o fs24" aria-hidden="true" slot="icon"></i>
        <span>Photos</span>
        <span slot="after-title" class="ml20 colorC">See my photos</span>
      </cell>
      
    </group>
    <group>
      <cell is-link>
        <i class="fa fa-volume-control-phone" aria-hidden="true" slot="icon"></i>
        <span>Callme</span>
        <span slot="after-title" class="ml20 colorC">18323965465</span>
      </cell>
    </group>

    <group>
      <cell is-link>
        <i class="fa fa-cogs fs24" aria-hidden="true" slot="icon"></i>
        <span>Setting</span>
      </cell>
    </group>
  </div>
</template>

<script>
import img from '@/assets/user.jpg'
import defaultImg from '@/assets/default.jpg'
import { Cell,Group ,XDialog } from 'vux'


export default {
  components: {
    Cell,
    Group,
    XDialog
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Me!',
      img:img,
      defaultImg:defaultImg
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-flex{
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  background-color: #ffffff;
}
.user-gutter{
  flex: .2;
}
.user-img{
  flex: 1;
}
.user-descrption{
  flex: 3;
}
.user-descrption>h1{
  font-weight: normal;
  font-size: 1em;
}
.user-descrption>p{
  font-weight: 500;
  font-size: .8em;
  color: #999;
}
.user-link{
  flex: 1;
  font-size: 24px;
  color: #999;
}
.user-img>img{
  max-width: 100%;
}
.fs24{
  font-size: 20px;
}
.ml20{
  margin-left: 20px;
}
</style>
