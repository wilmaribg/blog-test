import Vue from 'vue';
import Toasted from 'vue-toasted';
import VueFormGenerator from 'vue-form-generator';
import axios from 'axios';
import slugify from 'slugify';
import theme from 'quill/dist/quill.snow.css';
import validators from '../../../utils/validators';
import fieldWysiwyg from '@/components/blog/editor-wysiwyg/editor-wysiwyg';

Vue.component( 'fieldWysiwyg', fieldWysiwyg );
Vue.use(VueFormGenerator);
Vue.use(Toasted)

export default  {
  name: 'article-form',
  props: {
    doc: {
      required: false,
      default: true
    }
  },
  data () {
    return {
      categories: [],

      model: {},

      schema: {
        groups: [
          {
            fields: [
              {
                type: 'select',
                label: 'Category',
                model: 'category',
                required: true,
                validator: validators.integer,
                values: () => this.categories,
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Title',
                model: 'title',
                required: true,
                validator: validators.string,
              },
              {
                type: 'wysiwyg',
                label: 'Body',
                id: 'editor-wysiwyg',
                model: 'longDescription',
                required: true,
              },
              {
                type: 'textArea',
                label: 'Description',
                model: 'shortDescription',
                required: true,
                validator: validators.string,
              },
              {
                type: 'image',
                label: 'Image',
                model: 'imagen',
                hideInput: true,
                preview: true,
                required: true,
                validator: validators.string,
              },
              {
                type: 'submit',
                classes: 'btn btn-default',
                buttonText: 'Send',
                validateBeforeSubmit: true,
                onSubmit: ( data ) => {
                  const url = 'http://localhost:1337/article';
                  data.urlSlug = slugify(data.title);
                  axios.post( url, data ).then( (res) => {
                    this.model = {};
                    this.$toasted.show('Success!', { duration: 3000 });
                  } ).catch( ( err ) => {
                    console.log(err.response);
                    this.$toasted.show('Error: ' + err.response.data.message, 
                      { 
                        duration: 5000, 
                        position: 'top-right', 
                      }
                    );
                  } );
                },
              },
            ]
          }
        ]
      },

      formOptions: {
        
      },
    }
  },
  created () {
      axios.get( 'http://localhost:1337/category' ).then( ( res ) => {
        if( res.status === 200 ) {
          this.categories = [];
          res.data.map( ( cat ) => {
            this.categories.push( { id: cat.id,  name: cat.name } );
          } );
        }
      } ).catch( ( err ) => {
        console.log( err );
      } );
  },
  mounted () {
    
  },
  methods: {
    onValidated: (isValid, errors) => {
      console.log('Validation result: ', isValid, ', Errors:', errors);
    }
  }
}
