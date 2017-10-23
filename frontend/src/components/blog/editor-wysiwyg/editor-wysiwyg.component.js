import abstractField from 'vue-form-generator';
import Quill from 'quill';

 export default {
  name: 'editor-wysiwyg',
  props: {
    doc: {
      required: false,
      default: true
    },
    model: {
      required: true
    },
    schema: {
      required: true
    },
    formOptions: {
      required: true
    }
  },
  mixins: [ abstractField ],
  data () {
  	return {
  		html: this.model[ this.schema['model'] ]
  	}
  },
  mounted () {
  	const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],       
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      
      [{ 'indent': '-1'}, { 'indent': '+1' }],          
      [{ 'direction': 'rtl' }],                         
      [{ 'size': ['small', false, 'large', 'huge'] }],  
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }, 'image'],          
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean']                                         
    ];

    const editor = new Quill('#editor-wysiwyg', {
      modules: {
        toolbar: toolbarOptions
      },
      theme: 'snow'
    });
	editor.on( 'text-change', () => {
    	let html = editor.container.firstChild.innerHTML;
    	this.model[ this.schema['model'] ] = html;
		this.setHtml( html );
    } );
  },
  methods: {
  	setHtml: ( html ) => {
  		this.html = html;
  	},	
  	validate: ( value ) => {
  		if( value == true ) {
	  		if (! this.html ) {
	  			return ["This field is required!."];
	  		} else {
	  			return []
	  		}
  		}
  	},
  	clearValidationErrors: ( e ) => {
  		return false;
  	}
  },
 };
   
// export default  {
//   components: {}, 
//   props: [],
//   data () {
//     return {

//     }
//   },
//   computed: {

//   },
//   mounted () {

//   },
//   methods: {

//   }
// }
