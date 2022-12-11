<script>  
export default {
    data() {
      return {
        listItems: []
      }
    },
    methods: {
      async getData() {
        const res = await fetch("https://www.raymondcamden.com/.netlify/functions/get-cats");
        const finalRes = await res.json();
        this.listItems = finalRes;
      }      
    }
    ,mounted() {
      this.getData()
    }
  }
</script>
