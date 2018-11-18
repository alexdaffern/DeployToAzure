
const classlist = function(req, res){
    res.render('class',{
        classes:
        [
            {class:'Intoduction To Spanish 1'},
            {class:'Web Development'},
            {class:'Organisational Management'},
            {class:'HOBO Project'},
            {class:'Research and Communication'},
            {class:'MEAN'},

        ]});
};

module.exports = {
    classlist
};