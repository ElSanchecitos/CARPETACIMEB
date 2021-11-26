var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var CarreraSchema=Schema({
    nombre:String,
    escuela:String,
    universidad:String
});
const Estudiante = mongoose.model('estudiante',EstudianteSchema);
    module.exports = Estudiante;
