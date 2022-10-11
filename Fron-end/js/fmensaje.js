function traerInformacion(){
$.ajax({
    
    url:"https://g2946cd5b611e8f-reto1misiontic.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
    type:"GET",
    datatype:"JSON",
    success:function(respuesta){
        pintarRespuesta(respuesta.items);
        
    }





});



}
function pintarRespuesta(items){

    $("#resultado").empty();

   //declarar variables js
   let myTable="<table>";
   myTable += "<tr><th>Codigo</th><th>Mensaje</th></tr>";
   for(i=0;i<items.length;i++){
       myTable+="<tr>";
       myTable+="<td>"+items[i].id+"</td>";
       myTable+="<td>"+items[i].messagetext+"</td>";               
       myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
       myTable+="</tr>";
   }
   myTable +="</table>";
   $("#resultado").append(myTable);
}

function guardarInformacion(){

    $("#resultado").empty();

    let myData ={messageText:$("#messagetext").val(),client:{idClient:$("#clientId").val()},car:{idCar:$("#carId").val()}}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://localhost:8080/api/Message/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            //console.log(respuesta);
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}


function editarInformacion() {
    
    let myData ={id:$("#id").val(),messagetext:$("#messagetext").val()}
    let dataToSend = JSON.stringify(myData);
    
    $.ajax (
                {

                    url          : 'https://g2946cd5b611e8f-reto1misiontic.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
                    type         : 'PUT',
                    data         :  dataToSend,
                    datatype     :  "JSON",
                    contentType  : 'application/json',                    
                    success      :  function(respuesta){
                                        //console.log(respuesta);
                                        alert("Actualizacion exitosa");
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    }

                }
            );

}

function borrarElemento(idElemento){

    
    let myData ={id:idElemento}
    let dataToSend   = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'https://g2946cd5b611e8f-reto1misiontic.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message',
            type         : 'DELETE',
            data         :  dataToSend,
            contentType  : 'application/json',
            datatype     :  "JSON",
            success      :  function(respuesta){
                                // console.log(respuesta);
                                alert("Borrado exitoso");
                            },
            error       :   function(xhr,status){                                
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }
        }
    );


}


function consultarId() {

    let codigo = $("#id").val();

    $.ajax (
                {

                    url          : 'https://g2946cd5b611e8f-reto1misiontic.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message/' + codigo ,
                    type         : 'GET',
                    dataType     : 'json',
                    success      :  function(respuesta){
                                       pintarRespuesta(respuesta.items);
                                    },
                    error       :   function(xhr,status){
                                        alert('Operacion no satisfactoria,'+ xhr.status );
                                    },



                }
            );
}