const mongoose = require('mongoose');

// Schemas define the document structure used in the app
const hobbiesSchema = new mongoose.Schema({hobbie:String});
const classesSchema = new mongoose.Schema({mClass:String});

/* Models will contain compiled instances of the schemas
 * so they can be used in the app later on
 */
mongoose.model('myHobbies', hobbiesSchema, 'MyHobbies');
mongoose.model('myClasses', classesSchema,'MyClasses');



