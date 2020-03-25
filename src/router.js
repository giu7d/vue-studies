import Vue from "vue";
import Router from "vue-router";
import Feed from "pages/Feed";
import Channel from "pages/Channel";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Feed
  },
  {
    path: "/channel/:id",
    component: Channel
  }
];

export default new Router({ routes });
