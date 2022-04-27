const yargs = require('yargs');

const { connection, client } = require("./db/connection");
const { addMovie, listMovies, listMoviesFilter, updateMovies, deleteMovies } = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    const movie = { title: yargsObj.title, actor: yargsObj.actor, year: yargsObj.year, director: yargsObj.director };

    if (yargsObj.add) {
        await addMovie(collection, movie);
    } else if (yargsObj.list) {
        await listMovies(collection);
    } else if (yargsObj.listby) {
        await listMoviesFilter(collection, movie)
    } else if (yargsObj.update) {
        await updateMovies(collection, { title: yargsObj.title }, { actor: yargsObj.actor, year: yargsObj.year, director: yargsObj.director });
    } else if (yargsObj.delete) {
        await deleteMovies(collection, movie);
    } else {
        console.log("Incorrect Command");
    }

    await client.close();
};

app(yargs.argv);