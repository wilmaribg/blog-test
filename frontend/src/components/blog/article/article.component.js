import axios from 'axios';
import moment from 'moment';

export default  {
  name: 'article',
  components: {}, 
  props: {
    doc: {
      required: false,
      default: true
    }
  },
  data () {
    return {
      article: {}
    }
  },
  created () {
    let url = 'http://localhost:1337/article/' + this.$route.params.urlSlug;
    axios.get( url ).then( ( res ) => {
      if( res.status == 200 ) {
        console.log(res);
        this.article = res.data[0];
        this.article.updatedAt = moment( this.article.updatedAt ).format( 'MMMM DD YYYY' );
        console.log('res.data', res.data[0]);
      }
    } ).catch( ( err ) => {
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
