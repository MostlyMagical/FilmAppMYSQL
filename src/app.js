const command = process.argv[2];
const {addFilm, listFilm, updateFilm, deleteFilm} = require("./film/film.methods");

const app = async () => {
    switch (command) {
        case "add":
            const filmObj = {
                name: process.argv[3],
                actor: process.argv[4],
                like: process.argv[5]
            }
            await addFilm(filmObj);
            break;
            // pass filmObj to add film
        case "list":
            await listFilm();
            break;
            //find all films from MYSQL DB
        case "delete":
            //delete film based on filmName
            await deleteFilm(process.argv[3])
            break;
            //delete selected film from MYSQL database
        case "update": 
            await updateFilm(process.argv[3], process.argv[4])
            break;
    }
}

app();
