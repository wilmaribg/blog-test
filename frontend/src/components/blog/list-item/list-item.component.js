import imageThumb from '@/components/blog/image-thumb/image-thumb';
import moment from 'moment';

export default  {
  name: 'list-item',
  components: {
    'image-thumb': imageThumb
  }, 
  props: {
    article: {
      type: Object,
      required: true 
    },
    doc: {
      required: false,
      default: true
    },
  },
  data () {
    return {
      fromNow : moment( this.article.updatedAt ).fromNow()
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
