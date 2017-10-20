const coloredReindeerBuilder = function () {

    // Write a for loop that looks at each reindeer
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    for(i = 0; i < reindeer.length; i++) {
        currentReindeer = reindeer[i]
        console.log(currentReindeer); 
    }

    //Write a for loop that looks at each color
    const color = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]

    for(j = 0; j < color.length; j++) {
        currentColor = color[j]
        console.log(currentColor);
    }




    // Invoke factory function to create reindeer object

        // Put new reindeer object in coloredReindeer array


    // Return coloredReindeer array
}

coloredReindeerBuilder();