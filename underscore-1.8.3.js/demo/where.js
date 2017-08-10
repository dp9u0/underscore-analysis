var _ = require('../underscore-1.8.3-analysis');

var listOfPlays = [{ title: "Cymbeline", author: "Shakespeare", year: 1611 },
    { title: "The Tempest", author: "Shakespeare", year: 1611 }
];
var result = _.where(listOfPlays, { author: "Shakespeare", year: 1611 });
// => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
//     {title: "The Tempest", author: "Shakespeare", year: 1611}]

console.log(result);