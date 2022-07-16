<template>
<div>
<ul>
<router-link tag="li" v-for="post in 5" :key="post" :to="`/post/${post}`">
  <a> Post {{post}}</a>
</router-link>
</ul>

</div>


</template>