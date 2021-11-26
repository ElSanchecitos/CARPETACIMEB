
var Cita=require("../models/Usuarios");

function prueba(req,res){
    // res.status(200).send({
    // message: 'probando la acción Satisfactoriamente......'
    // });
    res.status(200).send('probando la acción Satisfactoriamente......'
        );
    }

function saveCita(req,res){
    var miCita= new Cita(req.body);
    miCita.save((err,result)=>{
    res.status(200).send({message:result});
    });
    }

    function listarAllCita(req,res){
        var idCita=req.params.id;
        if(!idCita){
            var result=Cita.find({}).sort('nombre');
        }else{
            var result=Cita.find({_id:idCita});
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

function buscarCita(req,res){
    var idCita=req.params.id;
    Cita.findById(idCita).exec((err,result)=>{
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

module.exports={
    prueba,
    saveCita, 
    listarAllCita, 
    buscarCita
}