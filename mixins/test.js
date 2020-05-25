var myMixin = {
    data(){
      return {
        text:'111'
      }
    },
    created: function () {
      this.hello()
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!')
      }
    }
  }
  export default myMixin