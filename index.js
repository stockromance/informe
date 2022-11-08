// INFO
const error = document.querySelector('#error');
const tipoInforme = document.querySelector('#tipo-informe');
const distribuidor = document.querySelector('#distribuidor');
const semana = document.querySelector('#semana');
// ESTADO ITEM
const estadoBueno = document.querySelector('#estado-bueno');
const estadoDefecto = document.querySelector('#estado-defecto');
const boxDefecto = document.querySelector('#box-defecto');
const defecto = document.querySelector('#defecto');
// ITEM
const codigo = document.querySelector('#codigo');
const botonBuscar = document.querySelector('#boton-buscar');
const nombre = document.querySelector('#nombre');
const cantidad = document.querySelector('#cantidad');
// OPCIONES
const botonLimpiar = document.querySelector('#boton-limpiar');
const botonCrear = document.querySelector('#boton-crear');
const botonBipear = document.querySelector('#boton-bipear'); 
const botonAgregar = document.querySelector('#boton-agregar'); 
// PDF
const pdf = document.querySelector('#pdf');
const pdfEncabezado = document.querySelector('#pdf-encabezado');
const tituloInforme = document.querySelector('#titulo-informe');
const tituloDistribuidor = document.querySelector('#titulo-distribuidor');
const tituloSemana = document.querySelector('#titulo-semana');
const tituloFecha = document.querySelector('#titulo-fecha'); 
// TABLA
const tabla = document.querySelector('table');
const tbody = document.querySelector('#tbody');
const botonEliminar = document.querySelectorAll(".boton-eliminar");
const total = document.querySelector('#total');
const itemEncabezado = document.querySelector('#item-encabezado');
// MODAL-1
const modal1 = document.querySelector('#modal-1');
const m1Consulta = document.querySelector('#m1-consulta');
const m1Buscar = document.querySelector('#m1-buscar');
const m1Cerrar = document.querySelector('#m1-cerrar'); 
const m1Tabla = document.querySelector('#m1-tabla'); 
const m1Tbody = document.querySelector('#m1-tbody');  
// MODAL-2
const modal2 = document.querySelector('#modal-2');
const m2Codigo = document.querySelector('#m2-codigo');
const m2Nombre = document.querySelector('#m2-nombre');
const m2Agregar = document.querySelector('#m2-agregar');
const m2Cerrar = document.querySelector('#m2-cerrar'); 
const m2Tabla = document.querySelector('#m2-tabla'); 
const m2Tbody = document.querySelector('#m2-tbody'); 
const m2Cod = document.querySelector('#m2-cod');
// MODAL-3
const modal3 = document.querySelector('#modal-3');
const m3Cantidad = document.querySelector('#m3-cantidad');
const m3Guardar = document.querySelector('#m3-guardar');
const m3Cerrar = document.querySelector('#m3-cerrar'); 
//ITEM ESTADO
estadoBueno.addEventListener('change', function() 
{ 
    if(estadoBueno.checked == true)
    {
        boxDefecto.style.display = 'none';
        defecto.selectedIndex = 0;
        codigo.focus();
    }
    else 
    {
        boxDefecto.style.display = 'flex';
    }   
});
estadoDefecto.addEventListener('change', function() 
{ 
    if(estadoDefecto.checked == true)
    {
        defecto.selectedIndex = 0;
        boxDefecto.style.display = 'flex';
        defecto.focus();
    }
    else 
    {
        boxDefecto.style.display = 'none';
    }   
});
defecto.addEventListener('change', function() 
{ 
    codigo.focus();  
});
//BUSCAR ITEM EN LISTA
function itemExiste(codigo)
{
    var filtro = items.filter(items => items.id == codigo);

    if(filtro.length > 0)
    {
        return true;
    }
    else
    {
        return false;              
    }
}
//BUSCAR NOMBRE DE ITEM
function itemNombre(codigo)
{
    var nombre ='';
    var filtro = items.filter(items => items.id == codigo);

    nombre = filtro[0].nombre.toUpperCase();        
    return nombre;
}
//TECLEO Y/O INGRESOS EN INPUT CODIGO
codigo.addEventListener('input', function()
{
    nombre.disabled = true;
    nombre.value = '';
    cantidad.value = '';

    var numeros = ['0','1','2','3','4','5','6','7','8','9'];
    var valor = codigo.value.toString();
    var nuevoValor = '';

    if(valor.length >= 5)
    {
        for(var i = 0; i < valor.length; i++)
        {
            if(numeros.includes(valor[i]))
            {
                nuevoValor += valor[i];
            }
            else
            {
                //...
            }
        }

        nuevoValor = nuevoValor.substring(0,5);
        codigo.value = nuevoValor;

        if(codigo.value.length == 5)
        {
            setTimeout(function()
                {
                    if(itemExiste(codigo.value))
                    {
                        nombre.value = itemNombre(codigo.value);        
                        nombre.disabled = true;                   
                        cantidad.focus();
                    }
                    else
                    {
                        nombre.disabled = false;
                        nombre.focus(); 
                    }
                },200);  //TIEMPO PARA LEER CODIGO LARGOS CON LECTOR DE BARRA      
        }
        else
        {
            //..
        }      
    }
    else
    {
        //...
    }
});
//TECLEO Y/O INGRESOS EN INPUT CANTIDAD
cantidad.addEventListener('input', function()
{    
    var numeros = ['0','1','2','3','4','5','6','7','8','9'];
    var entero = parseInt(cantidad.value);
    var valor = cantidad.value.toString();
    var nuevoValor = '';

    if(entero > 0)
    {
        if(valor.length >= 3) 
        {
            for(var i = 0; i < valor.length; i++) 
            {
                if(numeros.includes(valor[i])) 
                {
                    nuevoValor += valor[i];
                }
                else 
                {
                    //...
                }
            }
            nuevoValor = nuevoValor.substring(0,3);
            cantidad.value = nuevoValor;   
        }
        else 
        {
            //...
        }  
    }
    else
    {
        cantidad.value = nuevoValor; 
    }
}); 
//PRESIONAR ENTER & RESTRINGIR SOLO-NUMEROS
function siguienteFocus()
{
    if(codigo.value == '')
    {
        codigo.focus();
    }
    else if(nombre.value == '')
    {
        nombre.focus();
    }
    else if(cantidad.value == '')
    {
        cantidad.focus();
    }
    else if(estadoDefecto.checked == true && defecto.value == 0)
    {
        defecto.focus();
    }
    else
    {
        botonAgregar.focus();
    }
}
codigo.addEventListener('keydown', function(e)
{
    var key = e.keyCode;
    
    if(key == 13) //TECLA ENTER
    {
        if(codigo.value.length == 5)
        {
            siguienteFocus();
        }
        else
        {
            //...
        }
    }     
    else if((key >= 48 && key <= 57) || (key >= 96 && key <= 105))
    {
        //numeros: teclado y teclado numerico   
    }    
    else if(key == 37 || key == 39 || key == 8 || key == 46 || key == 9)
    {
        //izquierda, derecha, suprimir, borrar, tab
    }
    else
    {
        e.preventDefault();
    }
});
nombre.addEventListener('keydown', function(e)
{  
    var code = e.keyCode;
    
    if (code == 13) //tecla enter
    {
        if(nombre.value != '') 
        { 
            siguienteFocus();
        }
        else 
        {
            //...
        }       
    }
    else
    {
        //...
    }
});
cantidad.addEventListener('keydown', function(e)
{
    var key = e.keyCode;
    
    if(key == 13) //tecla enter
    {
        if(cantidad.value != '')
        {
            siguienteFocus();
        }
        else
        {
            //...
        }
    }     
    else if((key >= 48 && key <= 57) || (key >= 96 && key <= 105))
    {
        //numeros: teclado y teclado numerico   
    }    
    else if(key == 37 || key == 39 || key == 8 || key == 46 || key == 9)
    {
        //izquierda, derecha, suprimir, borrar, tab
    }
    else
    {
        e.preventDefault();
    }
});
//SUMAR ITEMS
function sumarItems()
{
    var suma = 0;
    var cantidades = document.querySelectorAll('.cantidad');
    cantidades.forEach(function(numero)
    {
        suma = parseInt(numero.innerHTML) + suma;            
    });
    total.innerHTML = 'TOTAL ITEM: '+suma;
}
//LIMPIAR
function limpiarDatos()
{
    estadoBueno.checked = true;
    boxDefecto.style.display = 'none';
    defecto.selectedIndex = 0;    
    codigo.value = '';    
    nombre.disabled = true;
    nombre.value = '';
    cantidad.value = '';
    codigo.focus();    
}
botonLimpiar.addEventListener('click', function()
{ 
    var filas = tbody.rows.length;
    
    if(filas > 0)
    {
        var confirmar = confirm('¿LIMPIAR TABLA?');

        if(confirmar == true)
        {
            tbody.innerHTML = '';
            sumarItems();
            limpiarDatos();
        }
        else
        {
            //...
        }
    }
    else
    {
        //...
    }
});
//AGREGAR ITEM
botonAgregar.addEventListener('click', function() 
{
    if(codigo.value !='' && codigo.value.length == 5 && nombre.value !='' && cantidad.value !='')
    {
        var nuevoNombre = nombre.value;

        if(nombre.disabled == true)
        {
            //..
        }
        else
        {
            nuevoNombre = nuevoNombre+' (*)';
        } 
        
        if(estadoDefecto.checked == true)
        {
            if(defecto.value != 0)
            {
                var tipoDefecto = defecto.options[defecto.selectedIndex].text;
                nuevoNombre = nuevoNombre+' (DEFECTO: '+tipoDefecto+')';
                agregarItem(codigo.value, nuevoNombre, cantidad.value, '1');
            }
            else
            {
                siguienteFocus();
            }            
        }
        else
        {
            validarItem(codigo.value, nuevoNombre, cantidad.value);
        }
    }
    else
    {
        siguienteFocus();
    } 
});
function validarItem(codigo, nombre, cantidad)
{
    var numeroFilas = tbody.rows.length;

    if(numeroFilas > 0)
    {
        var index;
        var duplicado = 0;

        for(var i = 0; i < numeroFilas; i++)
        {
            var codigoFila = tbody.rows[i].cells[0].innerHTML;
            var estadoFila = tbody.rows[i].cells[5].innerHTML;

            if(codigoFila == codigo && estadoFila == '0')
            {
                index = i;
                duplicado++;                    
            }              
        }

        if(duplicado > 0) 
        {
            var celdaCantidad = tbody.rows[index].cells[2];
            var nuevaCantidad = parseInt(celdaCantidad.innerHTML) + parseInt(cantidad);
            celdaCantidad.innerHTML = nuevaCantidad.toString();
            sumarItems();
            limpiarDatos();
        }
        else
        {
            agregarItem(codigo, nombre, cantidad, '0');
        }
    }
    else
    {
        agregarItem(codigo, nombre, cantidad, '0');
    } 
}
function agregarItem(codigo, nombre, cantidad, estado)
{
    var row = tbody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    
    cell1.innerHTML = codigo;
    cell1.classList.add('col-1');

    cell2.innerHTML = nombre;
    cell2.classList.add('col-2');

    cell3.innerHTML = cantidad;
    cell3.classList.add('col-3');
    cell3.classList.add('cantidad');

    cell4.innerHTML = '<button class="boton-accion" onclick="editarCelda(this)"><i class="far fa-edit"></i></button>';
    cell4.classList.add('col-4');

    cell5.innerHTML = '<button class="boton-accion" onclick="eliminarCelda(this)"><i class="far fa-trash-alt"></i></button>';
    cell5.classList.add('col-5');

    cell6.innerHTML = estado;
    cell6.classList.add('col-6');
    
    sumarItems();
    limpiarDatos();
}
//ELIMINAR FILA
function eliminarCelda(e)
{       
    var td = e.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr); 
    sumarItems();
}
itemEncabezado.addEventListener('click', function() 
{
    var filas = tbody.rows.length;
    
    if(filas > 2)
    {
        sortTable(tabla);
        codigo.focus();
    }   
    else
    {
        codigo.focus();
    } 
});
// MODAL-1
botonBuscar.addEventListener('click', function() 
{
    m1Tbody.innerHTML = '';        
    m1Consulta.value = ''; 

    modal1.style.display = 'flex';
    m1Consulta.focus(); 
});
m1Cerrar.addEventListener('click', function() 
{ 
    modal1.style.display = 'none';

    m1Tbody.innerHTML = '';        
    m1Consulta.value = ''; 
});
m1Buscar.addEventListener('click', function() 
{ 
    m1BuscarItem();  
});
m1Consulta.addEventListener('keydown', function(e)
{  
    var code = e.keyCode;
    
    if (code == 13)
    {
        m1BuscarItem();      
    }
});
function m1BuscarItem()
{    
    m1Tbody.innerHTML = ''; 
    var query = m1Consulta.value.toUpperCase();
    
    if(query.length > 2) 
    {
        var busqueda = items.filter(function(e)
        {
            return e.nombre.indexOf(query) > -1;
        });
                
        busqueda.forEach(function(e)
        {
            var row = m1Tbody.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = e.id;
            cell2.innerHTML = e.nombre;  
            cell3.innerHTML = '<td><button class="m1-agregar" onclick="m1Agregar(this)"><i class="fas fa-plus"></i></button></td>';
        });
    }
    else
    {
        m1Consulta.focus();
    }
}
function m1Agregar(e)
{
    var td = e.parentNode; 
    var tr = td.parentNode; 
    var cod = tr.cells[0].innerHTML;   
    codigo.value = cod;   
    nombre.value = itemNombre(cod);        
    nombre.disabled = true;                   
    cantidad.focus();
    modal1.style.display = 'none'; 
}



//////////////////////////////////////////////////////////////////////
// MODAL-2
botonBipear.addEventListener('click', function() 
{
    m2Codigo.value = '';
    m2Nombre.value = '';
    modal2.style.display = 'flex';
    m2Codigo.focus(); 
});
m2Cerrar.addEventListener('click', function() 
{ 
    modal2.style.display = 'none';       
    m2Codigo.value = ''; 
    m2Nombre.value = '';
    codigo.focus();
});
m2Agregar.addEventListener('click', function() 
{ 
    if(m2Codigo.value.length == 5 || m2Nombre.value != '')
    {
        m2AgregarItem(m2Codigo.value, m2Nombre.value, '1', true);            
    }  
    else
    {
        m2Codigo.focus();
    }   
});
function m2AgregarItem(codigo, nombre, cantidad, existe)
{
    m2Codigo.value = '';
    m2Nombre.value = '';

    var row = m2Tbody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    
    cell1.innerHTML = codigo;
    cell2.innerHTML = nombre;
    cell3.innerHTML = cantidad;

    if(existe == true)
    {
        validarItem(codigo, nombre, cantidad);
        m2Cod.value = '';
        m2Codigo.focus();
    }
    else
    {
        //no existe en items.js
        m2Codigo.focus();
    }  
}
m2Codigo.addEventListener('input', function()
{
    if(m2Codigo.value.length==5)
    {
        m2Cod.value = m2Codigo.value;
        setTimeout(function()
                {
                    if(itemExiste(m2Cod.value))
                    {
                        m2Nombre.value = itemNombre(m2Codigo.value);                   
                        m2AgregarItem(m2Codigo.value, m2Nombre.value, '1', true);
                    }
                    else
                    {
                        m2Codigo.value='';
                        m2Cod.value = '';
                        alert('ERROR LECTURA CODIGO');
                    }
                },200);  //TIEMPO PARA LEER CODIGO LARGOS CON LECTOR DE BARRA      
    }
});
m2Codigo.addEventListener('keydown', function(e)
{    
    var key = e.keyCode; 
    
    if(key == 13) //TECLA ENTER
    {
        if(m2Codigo.value.length == 5 || m2Nombre.value != '')
        {
            m2Agregar.focus();
        }        
    }     
    else if((key >= 48 && key <= 57) || (key >= 96 && key <= 105))
    {
        //numeros: teclado y teclado numerico   
    }    
    else if(key == 37 || key == 39 || key == 8 || key == 46 || key == 9)
    {
        //izquierda, derecha, suprimir, borrar, tab
    }
    else
    {
        e.preventDefault();
    }
});

////////////////////////////////////////////////////////////////////////////
// MODAL-3
var m3Tr;

function editarCelda(e)
{       
    m3Cantidad.value = '';
    var td = e.parentNode; 
    var tr = td.parentNode;
    m3Tr = tr;
    var cantidad = tr.cells[2].innerHTML;
    m3Cantidad.value = cantidad;

    modal3.style.display = 'flex';
    m3Cantidad.focus();
}
m3Cerrar.addEventListener('click', function() 
{ 
    modal3.style.display = 'none';
    m3Cantidad.value = '';
    m3Tr = '';
});
m3Guardar.addEventListener('click', function() 
{ 
    actulizarCantidad();
});
m3Cantidad.addEventListener('keydown', function(e)
{  
    var code = e.keyCode;
    
    if (code == 13)
    {
        actulizarCantidad();      
    }
});
function actulizarCantidad()
{
    m3Tr.cells[2].innerHTML = m3Cantidad.value;
    sumarItems();

    modal3.style.display = 'none';
    m3Cantidad.value = '';
    m3Tr = '';
}
////////////////////////////////////////////////////////
//ORDENAR ITEM TABLA POR ABCEDARIO
function sortTable(nombreTabla)
{
    var table, rows, switching, i, x, y, shouldSwitch;
    table = nombreTabla;
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching)
    {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for(i = 1; i < (rows.length - 1); i++)
      {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("td")[1];
        y = rows[i + 1].getElementsByTagName("td")[1];
        // Check if the two rows should switch place:
        if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
        {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if(shouldSwitch)
      {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}
//CREAR PDF
botonCrear.addEventListener('click', function() 
{ 
    crearPDF(); 
});
function crearPDF()
{
    var textoTipoInforme = tipoInforme.options[tipoInforme.selectedIndex].text;
    var textoSemana = semana.options[semana.selectedIndex].text;
    var textoDistribuidor = distribuidor.options[distribuidor.selectedIndex].text;

    tituloInforme.innerHTML = 'informe de '+textoTipoInforme;                       
    tituloDistribuidor.innerHTML = 'distribuidor: '+textoDistribuidor;            
    tituloSemana.innerHTML = 'semana n° '+textoSemana;

    var fecha = new Date();

    tituloFecha.innerHTML = 'creado: '+fecha.toLocaleDateString()+' '+fecha.toLocaleTimeString();  

    var filas = tbody.rows.length;
    
    if(filas > 0)
    {
        if(tipoInforme.value != 0 && semana.value != 0 && distribuidor.value != 0 && distribuidor.value != 99)
        {   
            var element = pdf;            
            var nombrePDF = textoTipoInforme.substring(0,3).toUpperCase()+'-'+textoSemana+'-'+textoDistribuidor.toUpperCase();
                    
            var opt = 
            {
                margin:       [0.5, 1.5, 0.5, 1.5],
                filename:     nombrePDF+'.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 3 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            
            sortTable(tabla);
            ocultarColumna('none', 'block');

            html2pdf().set(opt).from(element).save().then(function()
            {
                ocultarColumna('', 'none');                
                codigo.focus();
            });
        }
        else
        {
            if(tipoInforme.value == 0) 
            { 
                tipoInforme.focus(); 
            }
            else if(semana.value == 0) 
            { 
                semana.focus(); 
            }
            else if(distribuidor.value == 0 || distribuidor.value == 99) 
            { 
                distribuidor.focus(); 
            }
            else 
            {
                //...
            }
        }
    }
    else
    {
        codigo.focus();
    }  
}
function ocultarColumna(displayColumna, displayEncabezado)
{
    var col4 = document.getElementsByClassName('col-4');
    var col5 = document.getElementsByClassName('col-5');
    
    for (var i = 0; i < col4.length; i++) 
    {
        col4[i].style.display = displayColumna;
        col5[i].style.display = displayColumna;
    }    

    pdfEncabezado.style.display = displayEncabezado;
}
//NUMERO DE SEMANA DEL AÑO 2022
function semanaActual()
{
    var fechaActual = new Date();
    var primeroEnero = new Date(fechaActual.getFullYear(),0,1);
    var numeroDia = (Math.floor((fechaActual - primeroEnero) / (24 * 60 * 60 * 1000))+1);
    var numeroSemana = Math.floor((numeroDia+4)/7);
    semana.selectedIndex = numeroSemana; 
}
//HTML TERMINA DE CARGAR
window.onload = function(event) 
{
    semanaActual();
}
