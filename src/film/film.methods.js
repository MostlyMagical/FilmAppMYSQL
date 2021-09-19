const Film = require("./film.model");

exports.addFilm = async (filmObj) => {
    try{
        await Film.sync();
        await Film.create(filmObj);
    } catch (error) {
        console.log(error)
    }
};

exports.listFilm = async () => {
    try{
        const list = await Film.findAll();
        console.log(list);
    } catch(error) {
        console.log(error)
    }
}

exports.updateFilm = async (filmName, newLike) => {
    try{
        await Film.update({like: newLike},{
            where: {
                name: filmName
            }
        })
    } catch (error) {
        console.log(error)
    }
}

exports.deleteFilm = async (filmName) => {
    try{
        await Film.destroy({
            Where:{
                name: filmName
            }})
    } catch (error) {
        console.log(error)
    }
}