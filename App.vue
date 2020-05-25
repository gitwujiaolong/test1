<template>
  <div>
    <h1 v-demo ="{color:'red'}" ref='h1'>{{obj.arr[0]}}</h1>
    <h2>{{text}}</h2>
    <Heading :eType='1'>我</Heading>
    <!-- <input type="button" @click='changeObj' value='change' />
    <input type="text" v-focus /> -->
  </div>
</template>
<script>
import myMixin from "./mixins/test";
import Heading from './components/Head'
// import Immutable from 'immutable'
export default {
  mixins: [myMixin],
  data(){
      return {
          text:'123',
          obj:{
            arr:[1,2,3]
          }
      }
  },
  mounted(){
    //this.text = '789'
    // this.changeText()
  },
  components:{
    Heading
  },
  methods: {
      changeText(){
          //this.$refs.h1.innerText = '456'
      },
      changeObj(){
      //   // this.$set(this.obj.arr,0,5)
      //  let obj =  Immutable.Map(this.obj)
      //  let obj1 = obj.set(arr[0],5)
      //  console.log(obj1.toJS())
       // let s =Immutable.setIn(obj.arr,[0],5)
      
      }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    },
    demo: function(el, binding) {
        console.log(binding.value)
        el.style.color = binding.value.color;
      
    }
  }
};
</script>
