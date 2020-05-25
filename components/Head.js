import Vue from 'vue'
export default Vue.component('Heading',{
  render(createElement){
    return createElement(`h${this.eType}`,this.$slots.default)
  },
  props:{
    eType:{
      type:Number,
      default:1
    }
  }
})