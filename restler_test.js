var rest = require('restler');

rest.get('http://cryptic-oasis-8730.herokuapp.com/').on('complete', function(data) {
    console.log(data);
});