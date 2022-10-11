function guardarInformacion(){

    $("#resultado").empty();

    let myData ={startDate:$("#startdate").val(),devolutionDate:$("#devolutiondate").val(),client:{idClient:$("#clientId").val()},car:{idCar:$("#carId").val()}}
    let dataToSend = JSON.stringify(myData);

    $.ajax (
        {

            url          : 'http://localhost:8080/api/Reservation/save',
            type         : 'POST',
            data         :  dataToSend,
            datatype     :  "JSON",
            contentType  : 'application/json',
            success      :  function(respuesta){
                            console.log(dataToSend);
                            alert("Inserción exitosa");
                            },
            error       :   function(xhr,status){
                                alert('Operacion no satisfactoria,'+ xhr.status );
                            }

        }
    );
}
