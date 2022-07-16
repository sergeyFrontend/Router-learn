<template>
  <div>
    <h1> Post {{id}}</h1>

    <button @click="back">Назад</button>
  </div>

</template>

<script >
 export default{
  data(){
    return{
      id:this.$route.params['id']
    }
  },
  methods:{
    back(){
      this.$router.push({name:"posts"})
    }
  }
 }
</script>

<style scoped>

</style>