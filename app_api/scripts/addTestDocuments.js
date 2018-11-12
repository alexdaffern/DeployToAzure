/* This script creates some initial test data (documents) to be used
 * in this app's database. It is assumed this script will be executed from within
 * a mongo shell session on your app's database using the load() command
 *
 * If you want to run this script on an empty database, run db.dropDatabase() on the mongo shell
 * before running the script
 */

/* Remove all collections and documents from the current database.
 * This will not delete the database.
 */
db.dropDatabase();

// Creating the 'Hobbies' collection and adding some documents
db.MyHobbies.save(
    [
        {hobbie:'Rugby'},
		{hobbie:'PC Building'},
		{hobbie:'Gaming'},
		{hobbie:'Skiing'},
		{hobbie:'Photography'},
		{hobbie:'Snowboarding'},
		{hobbie:'Cooking'}
        
    ]
);

// Creating the 'Classes' collection and adding some documents
db.MyClasses.save(
    [
        {mClass:'Cost Accounting'},
		{mClass:'Web Development with MEAN'},
		{mClass:'Research and Project Management'},
		{mClass:'Networking Security'},
		{mClass:'Infastructure Security'},
		
    ]
);

// Load command to be executed at mongo shell
// load("C:/antonius_mean_localdev/app_api/scripts/addTestDocuments.js")