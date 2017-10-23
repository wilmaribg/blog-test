import Axios from 'axios';
import Moment from 'moment';
import blogArticle from '@/components/blog/list-item/list-item';

export default  {
  name: 'list',
  components: { 'blog-article': blogArticle }, 
  props: {
    doc: {
      required: false,
      default: true
    },
  },
  data () {
    return {
      posts: []
    }
  },
  created () {
    let _this = this;
    Axios.get( 'http://localhost:1337/article/' ).then( (res) => {
      if(res.status == 200 &&  res.data.length > 0) {
        _this.posts = [];
        res.data.map( ( post ) => {
          _this.posts.push( post );
        } )
      }
    } ).catch( (err) => {
      console.log(err);
    } );
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
