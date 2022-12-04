export default {
    props: {
      title: String,
      subtitle: String,
      data: Array,
      width: {
          type: String,
          default: '150px'
      },
      height: String
    },
    data() {
      return {
          info: this.data
      }
    },
    mounted() {
      M.AutoInit(); 
    },
  }