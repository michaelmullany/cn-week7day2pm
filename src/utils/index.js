exports.addMovie = async (collection, movieObj) => {
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

exports.deleteMovies = async (collection, filter) => {
    try {
        const submittedFilter = {};
        Object.keys(filter).forEach(key => {
            if (filter[key] != undefined) {
                submittedFilter[key] = filter[key];
            }
        });
        const deletedMovie = await collection.deleteMany(submittedFilter);
    } catch (error) {
        console.log(error);
    }
}