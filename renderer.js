// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const fs = require('fs');
const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password: 'Mognor19',
    database:'notas'
});

conexion.connect(function(error){
    if(error){
        console.log('La conexion no pudo ser establecida');
        return;
    }
    console.log('conexion Exitosa');
})
function createdDate (file) {  
  const { birthtime } = Fs.statSync(file)

  return birthtime
}

const titulo = document.getElementById('titulo');
const nota = document.getElementById('nota');
const agregar = documet.getElementById('agregar')
agregar.addEventListener('click', function(evt) {
  evt.preventeDefault();
  console.log(evt.code);
  fs.open("notas/"+titulo.value+".txt", 'a', function(err,archivo){
    if(err){
      return;
    }
    const linea = `${nombre.value}`;
    fs.write(archivo, linea, function(err,writeten,string){
    if(err){
      return;
    }
    })
  })
  const fecha = createdDate("notas/"+titulo.value+".txt")
  conexion.query(`Insert into nota(titulo,nota,fecha_creacion) values ?`,[`%(${titulo.value},${nota.value},${fecha.value})%`], function(err,filas,campos){
    if(err){
      console.log(`Algo salio mal: ${err}`);
    }else{
      console.log("exito");
    }
  })
})