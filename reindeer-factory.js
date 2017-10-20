
//What do I want to  do? Uhhh, well create an object that cycles through the "reindeer" and "color" arrays, picks the current property of each and places in an individual object.

//Step 1:  Created a const named "coloredReindeerFactory" to generate my object.
const coloredReindeerBuilder = function () {

        //Step 2:  Create the "for" loop to loop through the "reindeer" array. Why just thru the "reindeer" array?  Because I only need a color for each reindeer even though the "color" array is longer.
        const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    
        const color = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    
        for(i = 0; i < reindeer.length; i++) {
            let currentReindeer = reindeer[i]
            let currentColor = color[i]

        }
        //Step ?:  Create the foundation of my object to include "reindeer" and "color"
        return object.create (null, {
            "Reindeer": {
                enumerable: true,
                value: currentReindeer
            },

            "Color": {
                enumerable: true,
                value: currentColor
            }
        })
}
