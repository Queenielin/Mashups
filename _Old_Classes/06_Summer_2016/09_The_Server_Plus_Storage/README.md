### The Server Plus Storage 

#### I. Node-Express Intro Redux
* Review Express Basic Examples  
	* [Understanding Module.exports & exports in NodeJS](http://www.sitepoint.com/understanding-module-exports-exports-node-js/)
	* [Exports vs Module.exports in NodeJS](http://www.hacksparrow.com/node-js-exports-vs-module-exports.html)
	* [EJS for Node](https://github.com/tj/ejs)
	* [Embedded Javascript](http://www.embeddedjs.com/)
* Dynamic Routes  
* API Calls on the Server    
	* [Request Library](https://www.npmjs.org/package/request) 
	* [Request Library Documentation](https://github.com/request/request)
	* [JSON Parse](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) & [JSON Stringify](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 

#### II. Creating your own API
 * Main Page, Input Page, Data Page
 * [CORS Enabled Routes](http://enable-cors.org/server.html)
 * [BodyParser Library](https://github.com/expressjs/body-parser)

#### III. Storage with CouchDB
* Download Code Examples - [HERE](https://dl.dropboxusercontent.com/u/9648298/Mashups_DB_Examples.zip)
* [CouchDB](http://couchdb.apache.org/) + [CouchDB Docs](http://docs.couchdb.org/en/1.6.1/)
* [Couch DB - The Definitive Guide](http://guide.couchdb.org/editions/1/en/index.html)
* [Cloudant](https://cloudant.com)
* [Cloudant CRUD Docs](https://docs.cloudant.com/tutorials/crud/index.html)

#### IV. Homework
* Create - a  Node-Express app that runs locally on your computer that has **4 routes**
	* '/' - the landing page
	* '/:term' - a page with an api request based on the url  
	* '/api/:term' - a page that shows json data based on the url
	* '*' - a catch all page
