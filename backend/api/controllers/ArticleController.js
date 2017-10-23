/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {

  index: ( req, res ) => {
    return Article.find().exec( ( err, articles ) => {
      if(err) {
        return res.serverError(err);
      }
      return res.json( articles );
    } );
  },

  create: ( req, res ) => {
    return Article.create( req.body ).exec( ( err, records ) => {
      if(err) {
        return res.serverError(err);
      }
      return res.json( records );
    } );
  },

  get: ( req, res ) => {
    let params = { urlSlug: req.param( 'urlSlug' ) };
    return Article.find( params ).exec( ( err, records ) => {
      if(err) {
        return res.serverError(err);
      }
      return res.json( records );
    } );
  },

  truncate: ( req, res ) => {
    return Article.destroy( {} ).exec( ( err ) => {
      if(err) { 
        return res.negotiate(err); 
      }
      return res.ok;
    } );
  },

};

