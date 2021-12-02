
var Paciente=require("../models/pacientes");


function prueba(req,res){
    // res.status(200).send({
    // message: 'probando la acción Satisfactoriamente......'
    // });
    res.status(200).send('probando la acción Satisfactoriamente......'
        );
    }

function savePaciente(req,res){
    var miPaciente= new Paciente(req.body);
    miPaciente.save((err,result)=>{
    res.status(200).send({message:result});
    });
    }

    function listarAllPaciente(req,res){
        var idPaciente=req.params.id;
        if(!idPaciente){
            var result=Paciente.find({}).sort('nombre');
        }else{
            var result=Paciente.find({_id:idPaciente});
        }
        result.exec(function(err,result){
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
            res.status(200).send({result});
                }
            }
        })
        }

function buscarPaciente(req,res){
    var idPaciente=req.params.id;
    Paciente.findById(idPaciente).exec((err,result)=>{
    if(err){
        res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
    }else{
        if(!result){
            res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
        }else{
            res.status(200).send({result});
            }
        }
    });
    }

    function updatePaciente(req,res){
        //var id = mongoose.Types.ObjectId(req.query.productId);
        var idPaciente = req.params.id;
        Paciente.findOneAndUpdate({_id: idPaciente}, req.body, {new: true}, function(err, Paciente) {
            if (err)        
            res.send(err);
            res.json(Paciente);
        });
        };
    
    
    
    function deletePaciente(req,res){
        var idPaciente=req.params.id;
        Paciente.findByIdAndRemove(idPaciente, function(err, Paciente){
        if(err) {
        return res.json(500, {
        message: 'Error al momento de ejecutar la solicitud'
        })
        }
        return res.json(Paciente)
        //return res.status(200).send('Paciente eliminado con exito')
        });
    }
    


module.exports={
    prueba,
    savePaciente, 
    listarAllPaciente, 
    buscarPaciente,
    updatePaciente,
    deletePaciente

}