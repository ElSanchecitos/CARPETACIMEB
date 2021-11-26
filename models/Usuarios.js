var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var PacienteSchema = Schema({
    nombre: String,
    identificacion: String,
    telefono: String,
    edad: String,
    direccion: String,
    correo: String,
    tipoDeSangre: String,
    peso: String,
    estatura: String,
    genero: String
    
});

const Paciente = mongoose.model('paciente',PacienteSchema);
module.exports=Paciente;
