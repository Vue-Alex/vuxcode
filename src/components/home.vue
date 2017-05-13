<template>
  <div class="home">
    
      <cell is-link>
        <i class="fa  fa-home" aria-hidden="true" slot="icon"></i>
        <span slot="after-title" class="ml20">Vue-Alex</span>
        <span>技术栈</span>
      </cell>
   
    <swiper v-model="index" auto loop dots-position="center" :style="bg">
      <swiper-item class=" text-center  lh-180 font-48">
        <i class="fa fa-code" aria-hidden="true"></i>
        <span>ES6</span>
      </swiper-item>

      <swiper-item class=" text-center  lh-180">
        <img src="http://vuejs.org/images/logo.png" class="img-50" alt="">
      </swiper-item>
      <swiper-item class=" text-center   lh-180 font-48">
        <i class="fa fa-css3" aria-hidden="true"></i>
        <span>CSS3</span>
      </swiper-item>

      <swiper-item class=" text-center  lh-180 font-48">
        <i class="fa fa-html5" aria-hidden="true"></i>
        <span>HTML5</span>
      </swiper-item>

      <swiper-item class=" text-center  lh-180 font-48">
        <i class="fa fa-github" aria-hidden="true"></i>
        <span>GitHub</span>
      </swiper-item>

      <swiper-item class=" text-center  lh-180">
        <img src="https://webpack.github.io/assets/logo.png" class="img-center" alt="">
      </swiper-item>

      <swiper-item class=" text-center  lh-180">
        <img src="https://raw.githubusercontent.com/babel/logo/master/babel.png" class="img-center" alt="">
      </swiper-item>

      <swiper-item class=" text-center  lh-180">
        <img src="https://github.com/yarnpkg/assets/blob/master/yarn-kitten-full.png?raw=true" class="img-center" alt="">
      </swiper-item>

      <swiper-item class=" text-center  lh-180">
        <img src="https://raw.githubusercontent.com/airyland/vux/master/logo.png" class="img-center">
      </swiper-item>
    </swiper> 
    <group>
      <cell is-link>
        <i class="fa fa-file-code-o" aria-hidden="true" slot="icon"></i>
        <span>More</span>
        <span slot="after-title" class="ml20 colorC">See my Article</span>
      </cell>
    </group>
    <book title="JavaScript" :text="txt" :img="photo" link="article">
    </book>
    <book title="CSS3" classification="CSS3" :text="text1"  link="article">
    </book>
  </div>
</template>

<script>
import { Group, Cell, Swiper,SwiperItem  } from 'vux'
import Book from '@/components/book'
import photo from '@/assets/logo.png'
import css3 from '@/assets/css.jpg'

export default {
  components: {
    Group,
    Cell,
    Swiper,
    SwiperItem,
    Book
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      css3,
      msg: 'Hello World!',
      index:0,
      bg:{
        backgroundColor:'#e0e0e0'
      },
      txt:'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。',
      photo,
      text1:'层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。'
    }
  },
  mounted(){
    
  },
  watch:{
    index(val){
      
    }
  }
}
</script>

<style scoped>
.bgBlack{
  background-color: #475669;
}
.bgRed{
  background-color: #FF4949;
}
.bgBlue{
  background-color: #20A0FF;
}
.lh-180{
  line-height: 180px;
}
.text-center{
  text-align: center;
}
.bgWarn{
  background-color: #F7BA2A;
}
.font-48{
  font-size: 48px;
}
.bgSuccess{
  background-color: #13CE66;
}
.img-center{
  max-width: 80%;
  vertical-align: middle;
}
.img-50{
  max-width: 40%;
  vertical-align: middle;
}
.ml20{
  margin-left: 20px;
  font-weight: 300;
}
</style>
