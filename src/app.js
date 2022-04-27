const yargs = require('yargs');

const { connection, client } = require("./db/connection");
const { addMovie, listMovies, deleteMovies } = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    if (yargsObj.add) {
        await addMovie(collection, { title: yargsObj.title, actor: yargsObj.actor });
        console.log("successfully added new document to db");
    } else if (yargsObj.list) {
        await listMovies(collection);
    } else if (yargsObj.delete) {
        await deleteMovies(collection, { title: yargsObj.title, actor: yargsObj.actor });
    } else {
        console.log("Incorrect Command");
    }

    await client.close();
};

app(yargs.argv);