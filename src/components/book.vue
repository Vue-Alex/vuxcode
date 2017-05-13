<template>
  <transition name="fade" mode="out-in">
    <article class="vux-1px-tb book" @click.stop="go($event)" v-if="show">
      <span class="vux-close book-close" @click.stop="close"></span>
      <div class="book-classification">
        <i class="fa fa-css3" aria-hidden="true"></i> 
        <span>来自分类:{{classification}}</span>
      </div>
      <div v-if="img" class="book-banner">
        <img :src="img" alt="">
      </div>
      <div class="book-title">
        <h3>
        {{title}}
        </h3>
      </div>
      <div class="book-text" :style="seemore">
        <p>{{text}}</p>
      </div>
      <div class="book-footer">
        <a class="book-footer-btn" @click.stop="more" >{{see?'点击收起':'查看更多'}}</a>
      </div>
    </article>
  </transition>
</template>

<script>

export default {
  name:'book',
  components: {
  },
  props:{
    img:String,
    title:{
      type: String,
      required: true
    },
    text:{
      type: String,
      required: true
    },
    classification:{
      type: String,
      default: 'JavaScript'
    },
    link:{
      type: String
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      seemore:{
        height:''
      },
      see:false,
      show:true
    }
  },
  methods:{
    go(e){
      console.log(e);
      if (this.link) {
        if (this.link.indexOf('http')>-1) {
          window.open(this.link)
        }else{
          this.$router.push(this.link)
        }
      }
    },
    more(){
      if (this.see) {
        this.seemore.height = '3em'
      }else {
        this.seemore.height = 'auto';
      }
      this.see = !this.see
    },
    close(){
      const _this = this
      this.$vux.confirm.show({
        title: '删除?',
        content: '确定删除该文章',
    onCancel () {
    },
    onConfirm () {
    _this.show = false
    _this.$vux.toast.show({
       text: '删除成功！',
       type:'success',
       isShowMask:true
      })
    }})
    },
    showtoast(){
      
    }
  }
}
</script>

<style scoped lang="less">
@Silver:#8492A6;
.book{
  position: relative;
  margin-top: 20px;
  padding: 20px;
  background: #ffffff;
  .book-close{
    position: absolute;
    right: 10px;
    top: 10px;
    color: #1F2D3D;
  }
  .book-classification{
    font-size: 14px;
    color: @Silver;
  }
  .book-title{
    margin: 10px 0;
    color: #1F2D3D;
    h3{
      font-weight: normal;
    }
  }
  .book-banner{
    margin: 0 auto;
    img{
      display: block;
      max-width: 100%;
      max-height: 100%;
      margin: 0 auto;
    }
  }
  .book-text{
    width: 100%;
    height: 3em;
    overflow: hidden;
    font-weight: 300;
    color: #99A9BF;
  }
  .book-footer{
    min-height: 2em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .book-footer-btn{
      display: block;
      width: 40%;
      text-align: center;
      height: 2em;
      line-height: 2em;
      background: #1D8CE0;
      color: #F9FAFC;
      border-radius: 2em;
      position: absolute;
      bottom: 10px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
