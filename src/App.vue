<template>
  <div id="app">
  	<loading v-model="isLoading" position='fixed'></loading>
    <router-view class="viewbox"></router-view>
    <tabbar>
      <tabbar-item selected link="/">
      	<i class="material-icons" slot="icon" >&#xE86D;</i>
      	<span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item   link="/search">
      	<i class="material-icons" slot="icon" >&#xE8FA;</i>
      	<span slot="label">search</span>
      </tabbar-item>
      <tabbar-item   link="/me" show-dot	>
      	<i class="material-icons" slot="icon" >&#xE56A;</i>
      	<span slot="label">Me</span>
      </tabbar-item>
    </tabbar>
    <router-view class="view-article" name="article"></router-view>
  </div>
</template>

<script>
import ad from '@/assets/ad.png'
import { Loading } from 'vux'
import { Tabbar, TabbarItem } from 'vux'
import { Popup ,XButton } from 'vux'

export default {
  name: 'app',
  directives: {
    
  },
  components: {
    Loading,
    Tabbar,
    TabbarItem,
    Popup,
    XButton
  },
  data(){
    return {
      ad:ad,
      show1:false
    }
  },
  computed: {
    isLoading(){
    	return this.$store.state.isLoading
    }
  },
  created(){
    
  	},
  methods:{
    
  },
  watch: {
    
  }
  }


</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@Black:#1F2D3D;
@Silver:#8492A6;
@LightBlack:#324057;
@ExtraLightBlack:#475669;
@LightSilver:#99A9BF;
@ExtraLightSilver:#C0CCDA;
@Gray:#D3DCE6;
@LightGray:#E5E9F2;
@import '~vux/src/styles/close.less';


.max100{
  max-width: 100vw;
}
body {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
  	background-color: #fbf9fe;
}
.viewbox{
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 53px;
	overflow-y: auto;
	overflow-x: hidden;
}
::-webkit-scrollbar {width: 6px;height:6px;}
::-webkit-scrollbar-track-piece{background-color: #eee;margin: -2px;}
::-webkit-scrollbar-thumb{background: #aaa;min-height: 150px;min-width: 150px;border-radius: 10px;}
::-webkit-scrollbar-thumb:vertical:hover{background: #555555}
::-webkit-scrollbar-thumb:horizontal:hover{background: #555555}
.position{
  position: relative;
}
.positionA{
  position: absolute;
  bottom: 10vh;
}
.view-article{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background: #fffff;
  z-index: 502;
}
</style>
