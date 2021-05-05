//Code your solution here
function findMatching(array, q) {
   return array.filter(x => x.toUpperCase() === q.toUpperCase());
} 

function fuzzyMatch(array, s) {
    return array.filter(x => x.toUpperCase()[0] === s.toUpperCase()[0]);
        }

function matchName(array) {
    return(array.filter(x => x.name === "Bobby"))
}