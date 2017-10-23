import Vue from 'vue';
import Router from 'vue-router';
import BlogList from '@/components/blog/list/list';
import Article from '@/components/blog/article/article';
import ArticleForm from '@/components/blog/article-form/article-form';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: BlogList,
    },
    {
      path: '/article/create',
      name: 'article-form',
      component: ArticleForm,
    },
    {
      path: '/article/:urlSlug',
      name: 'article',
      component: Article,
    },
  ],
});
