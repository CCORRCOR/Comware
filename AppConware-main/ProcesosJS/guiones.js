function selecionGuiones(){

    let opcion = document.getElementById("guionesGuion").value;
    let nombre = document.getElementById("Nombre").value;
    let celular = document.getElementById("Celular").value;
    let idLlamada = document.getElementById("IdLlamada").value;
    let idServicio = document.getElementById("Legado").value;
    let idSerial = document.getElementById("Legado2").value;
    let idNE = document.getElementById("NE").value;
    let switch1 = document.getElementById("switch1").value;


  /*input.focus();*/
  /*copyToClipBoard("observaciones");*/
  switch(opcion){
    case "0":
      document.getElementById("observacionesGiones").value ="Usuario "+ nombre +"Se comunica el cliente informando fallas en el servicio de internet. Se verificó que el servicio está activo con el identificador "+ idServicio +", con el número de serie del equipo "+ idSerial +". Se comprobó que el enlace está operativo con parámetros óptimos y que las VLANs están correctamente configuradas en modo bridge. Se accedió al equipo NE con IP "+ idNE +" y se confirmó el levantamiento de capa 3, con el equipo MAC X. Se confirma operatividad dentro de la red de Tigo,";
      
      break;  

  case "1":
      document.getElementById("observacionesGiones").value ="Usuario "+ nombre +"Se comunica el cliente informando fallas en el servicio de internet.Indica que realizó las pruebas de primer nivel,no se ha realizado cmabios en la red interna,sin fallas de energia,notifica que en el equipo terminal Huawei de tecnología GPON registra el Led de LOS encendiod en rojo. Se valida que el servicio está activo con el ID "+ idServicio +". Se confirma con el cliente  el serial del equipo terminal "+ idSerial +", donde se identifica una ruptura de la fibra. Por lo tanto se  genera una revisión a campo para solucionar la falla al cliente.";
      
      break; 

  case "2":
      document.getElementById("observacionesGiones").value ="Buenos días/tardes nos intentamos comunicar para darle gestión al requerimiento Número REQ00000xxx pero no hay respuesta las llamadas se van  buzón correo de voz, los invitamos a que se comunique por las líneas de atención 01 8000 513 287 o #513 desde líneas Tigo.";
      
      break; 

  case "3":
    document.getElementById("observacionesGiones").value ="Usuario "+ nombre +"Se comunica el cliente  reportando fallas en el servicio de internet. Se verificó que el servicio está activo con el identificador "+ idServicio +", se confirma MAC del equipo "+ idSerial +" en estado Online o Sincronizado, con parámetros óptimos y portadoras dentro del rango óptimo de operatividad, Se le indicó al cliente que realice una prueba directa el cual confirma el correcto funcionamiento del servicio.";
    
    break;

    case "4":
    document.getElementById("observacionesGiones").value ="Usuario "+ nombre +"Se comunica el cliente reportando fallas en el servicio de internet. Se verificó que el servicio está activo con el identificador "+ idServicio +", se confirma MAC del equipo "+ idSerial +" en estado Offline, se realiza descartes de primer nivel con el usuario, valida las conexiones internas,equipo energizado correctamente ,el cual nos informa que no recibe navegación por parte del equipo, el Led de online queda apagado, no se tiene gestión ,se verifica que equipo tenga perfil en el LDAP correctamente configurado, por lo que se genera visita técnica, para revisión del equipo o la red en terreno.";
    
    break;
     
    case "5":
    document.getElementById("observacionesGiones").value ="Usuario "+ nombre +" Se comunica el cliente reportando fallas en el servicio de internet. Se verificó que el servicio está activo con el identificador "+ idServicio +", tiene gestión del switch "+ switch1 +" se ingresa al NE "+idNE+"el cual se evidencia levantamiento en capa 3 con la MAC x, equipo administrado por el usuario, se le informa que debe verificar sus equipos internos, ya que no se detectó afectación dentro de la red de Tigo.";
    
    break;

    case "6":
      document.getElementById("observacionesGiones").value ="Usuario "+ nombre +" Se comunica el cliente reportando fallas en el servicio de internet. Se verificó que el servicio está activo con el identificador "+ idServicio +", con el número de serie del equipo "+ idSerial +". Se comprobó que el enlace está operativo con parámetros óptimos y que las VLANs están correctamente configuradas en modo Router. Se confirma operatividad dentro de la red de Tigo,";
    
    break;
    case "7":
      document.getElementById("observacionesGiones").value ="El cliente informa que ha estado experimentando interrupciones en el servicio de Internet desde el día XXX. Indica que no ha modificado la red interna ni ha tenido problemas con la red eléctrica, ha realizado los descartes de primer nivel, pero la falla persiste.";
      case "8":
        document.getElementById("observacionesGiones").value ="Se comunica el cliente reportando fallas con el servicio de XXX e indica que se presentó desde XXXX del día XXX, desconociendo el motivo de esta afección ,no ha presentado fallas anteriormente no ha realizado cambios o modificaciones que afecten el servicio .";
      break;

      case "9":
        document.getElementById("observacionesGiones").value ="El cliente informa que ha tenido problemas con el servicio de Internet Móvil empresarial desde la fecha XXXX. Informa que los datos no funcionan o son muy intermitentes. Ha realizado los descartes de primer nivel, pero la falla persiste.";
        break;
        case "10":
          document.getElementById("observacionesGiones").value ="El cliente informa que desde la fecha XXXX, ha habido problemas con el servicio de Internet Móvil de la empresa. Informa que no salen ni recibe llamadas y que los datos no funcionan. Aunque ha realizado los descartes de primer nivel, la falla sigue presente.";
  break;
  case "11":
    document.getElementById("observacionesGiones").value ="El cliente indica que requiere configurar un puerto lógico específico en el equipo terminal.  El cliente indica que requiere establecer un DMZ en el equipo terminal para una dirección IP privada.";
    break;
    
    case "12":
      document.getElementById("observacionesGiones").value ="Se comunica el cliente   indicando que no tiene servicio de internet, se evidencia que el servicio con "+ idServicio +" se encuentra activo, y el equipo Terminal  Huawei con Serial S/N:"+ idSerial +" no tiene gestión, se evidencia falla masiva registrada en Service Desk con TT:  y con el estado solución en proceso:";
      break;
case "13":
      document.getElementById("observacionesGiones").value ="Se valida servicio con ID:"+ idServicio +" de fibra y está activo, se valida IP SW:" + switch1 + " correspondiente al Anillo: " + idNE +" sin gestión de monitoreo; se valida led GIGAS  están Down, se validan vecinos y central confirmando que las conexiones están caídas, se confirma equipo encendido o energizado por parte del cliente, sin falla eléctrica en la zona.";
      break;
      case "14":
      document.getElementById("observacionesGiones").value ="Se valida el servicio con ID:"+ idServicio +"el cual se encuentra activo, el cual es de tecnología GPON con el ONT S/N:"+ idSerial +"  se valida en el NCE y registra Sincronizado con parámetros estables ,las VLAN están configuradas de acuerdo al plan del usuario, por ser servicio GPON avanzado ,se verifica en la MPLS  con la interfaz XXX y NE IP: logrando establecer levantamiento de Capa 3 y se evidencia Mac: XXX la cual es un equipo: XXXX";
      break;
      default: false;
    }}