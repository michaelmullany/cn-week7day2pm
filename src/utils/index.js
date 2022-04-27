exports.addMovie = async (collection, movieObj) => {
    console.log(movieObj);
    try {
        const addEntry = await collection.insertOne(movieObj);
        console.log(addEntry);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async (collection) => {
    try {
        const movieList = await collection.find().toArray();
        console.log(movieList);
    } catch (error) {
        console.log(error);
    }
}

exports.updateMovies = async (collection, title, newData) => {
    try {
        const updatedMovie = await collection.updateMany(title, newData);
        console.log(updatedMovie);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteMovies = async (collection, query) => {
    try {
        const cleanQuery = removeUndefinedFromObject(query);
        const deletedMovie = await collection.deleteMany(cleanQuery);
        console.log(deletedMovie);
    } catch (error) {
        console.log(error);
    }
}

// Take an object and remove keys with a value of undefined
// This allows us to delete using only the properties passed in on the CLI
function removeUndefinedFromObject(initialObject) {
    const cleanObject = {};
    Object.keys(initialObject).forEach(key => {
        if (initialObject[key] != undefined) {
            cleanObject[key] = initialObject[key];
        }
    });
    return cleanObject;
}