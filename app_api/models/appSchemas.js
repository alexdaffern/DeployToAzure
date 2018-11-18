const mongoose = require('mongoose');

// Schemas define the document structure used in the app
const hobbySchema = new mongoose.Schema({hobby:String});
const classSchema = new mongoose.Schema({class:String});

/* Models will contain compiled instances of the schemas
 * so they can be used in the app later on
 */
mongoose.model('hobby', hobbySchema), 'hobbies';
mongoose.model('class', classSchema),'classes';



