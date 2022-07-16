import VueRouter from "vue-router";
import PostsMain from "./components/PostsMain";
import PostMain from "./components/PostMain";

export default new VueRouter({
  routes:[
    {
      path:"/posts",
      component:PostsMain,
      name:"posts"
    },
    {
      path:"/post/:id",
      component:PostMain,
      name:"post"
    }
  ],
mode:"history"
})