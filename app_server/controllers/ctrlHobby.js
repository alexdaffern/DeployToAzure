
const hobbylist = function(req, res){
    res.render('hobby',{
        hobbies:
        [
            {hobby:'Skiing', desc:'I\'ve been downhill skiing since I was 2.' },
            {hobby:'Snowboarding', desc:'I started snowboarding 5 years ago. '},
            {hobby:'Gaming', desc:'I\'ve been an avid game for the last 4 years.'},
            {hobby:'PC Building', desc:'I fell in love with hadware 5 years ago so I built my first computer 4 years ago.'},

        ]});
};
module.exports = {
    hobbylist
};