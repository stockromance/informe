// INFO
const error = document.querySelector('#error');
const tipoInforme = document.querySelector('#tipo-informe');
const distribuidor = document.querySelector('#distribuidor');
const semana = document.querySelector('#semana');
// ESTADO ITEM
const estadoBueno = document.querySelector('#estado-bueno');
const estadoDefecto = document.querySelector('#estado-defecto');
const boxDefecto = document.querySelector('#box-defecto');
const tipoDefecto = document.querySelector('#tipo-defecto');
// ITEM
const codigo = document.querySelector('#codigo');
const botonBuscar = document.querySelector('#boton-buscar');
const nombre = document.querySelector('#nombre');
const cantidad = document.querySelector('#cantidad');
// OPCIONES
const botonBorrar = document.querySelector('#boton-borrar');
const botonCrear = document.querySelector('#boton-crear');
const botonAgregar = document.querySelector('#boton-agregar'); 
// PDF
const pdf = document.querySelector('#pdf');
const encabezadoPdf = document.querySelector('#encabezado-pdf');
const tituloInforme = document.querySelector('#titulo-informe');
const tituloDistribuidor = document.querySelector('#titulo-distribuidor');
const tituloSemana = document.querySelector('#titulo-semana');
const tituloCreado = document.querySelector('#titulo-creado'); 
// TABLA
const tabla = document.querySelector('table');
const tbodyTabla = document.querySelector('#tbody-tabla');
const botonEliminar = document.querySelectorAll(".boton-eliminar");
const tituloTotal = document.querySelector('#titulo-total');
// MODAL
const modal = document.querySelector('#modal');
const consulta = document.querySelector('#consulta');
const botonConsulta = document.querySelector('#boton-consulta');
const botonCerrar = document.querySelector('#boton-cerrar'); 
const tablaConsulta = document.querySelector('#tabla-consulta'); 
const tbodyConsulta = document.querySelector('#tbody-consulta');  
//RADIO
estadoBueno.addEventListener('change', function() 
{ 
    if(estadoBueno.checked == true)
    {
        boxDefecto.style.display = 'none';
        tipoDefecto.selectedIndex = 0;
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
        tipoDefecto.selectedIndex = 0;
        boxDefecto.style.display = 'flex';
        tipoDefecto.focus();
    }
    else 
    {
        boxDefecto.style.display = 'none';
    }   
});
tipoDefecto.addEventListener('change', function() 
{ 
    codigo.focus();  
});
//TECLEO Y/O INGRESOS EN INPUT
codigo.addEventListener('input', function()
{
    nombre.disabled = true;
    nombre.value = '';
    cantidad.value = '';

    var num = ['0','1','2','3','4','5','6','7','8','9'];
    var texto = codigo.value.toString();
    var nuevoTexto = '';

    if(texto.length >= 5)
    {
        for(var i = 0; i < texto.length; i++)
        {
            if(num.includes(texto[i]))
            {
                nuevoTexto += texto[i];
            }
            else
            {
                //...
            }
        }

        nuevoTexto = nuevoTexto.substring(0,5);
        codigo.value = nuevoTexto;

        if(codigo.value.length == 5)
        {
            setTimeout(funtion(){buscarItem();},200);            
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
function buscarItem()
{
    var filtro = items.filter(items => items.id == codigo.value);

    if(filtro.length > 0)
    {
        nombre.value = filtro[0].nombre.toUpperCase();        
        nombre.disabled = true;                   
        cantidad.focus();
    }
    else
    {
        nombre.disabled = false;
        nombre.focus();               
    }
}
cantidad.addEventListener('input', function()
{    
    var num = ['0','1','2','3','4','5','6','7','8','9'];
    var entero = parseInt(cantidad.value);
    var texto = cantidad.value.toString();
    var nuevoTexto = '';

    if(entero > 0)
    {
        if(texto.length >= 3) 
        {
            for(var i = 0; i < texto.length; i++) 
            {
                if(num.includes(texto[i])) 
                {
                    nuevoTexto += texto[i];
                }
                else 
                {
                    //...
                }
            }
            nuevoTexto = nuevoTexto.substring(0,3);
            cantidad.value = nuevoTexto;   
        }
        else 
        {
            //...
        }  
    }
    else
    {
        cantidad.value = nuevoTexto; 
    }
}); 
//PRESIONAR ENTER & RESTRINGIR SOLO-NUMEROS
codigo.addEventListener('keydown', function(e)
{
    var key = e.keyCode;
    
    if(key == 13) //tecla enter
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
    else if(estadoDefecto.checked == true && tipoDefecto.value == 0)
    {
        tipoDefecto.focus();
    }
    else
    {
        botonAgregar.focus();
    }
}
//AGREGAR ITEM
botonAgregar.addEventListener('click', function() 
{
    agregarItem();  
});
function agregarItem()
{
    if(codigo.value !='' && codigo.value.length == 5 && nombre.value !='' && cantidad.value !='')
    {
        var validarNombre = nombre.value;

        if(nombre.disabled == true)
        {
            //..
        }
        else
        {
            validarNombre = validarNombre+' (*)';
        }

        if(estadoDefecto.checked == true)
        {
            agregarItemDefecto(validarNombre);
        }
        else
        {
            var numeroFilas = tbodyTabla.rows.length;

            if(numeroFilas > 0)
            {
                var index;
                var duplicado = 0;
    
                for(var i = 0; i < numeroFilas; i++)
                {
                    var codigoFila = tbodyTabla.rows[i].cells[0].innerHTML;
                    var estadoFila = tbodyTabla.rows[i].cells[4].innerHTML;
        
                    if(codigoFila == codigo.value && estadoFila == '0')
                    {
                        index = i;
                        duplicado++;                    
                    }              
                }

                if(duplicado > 0) 
                {
                    var celdaCantidad = tbodyTabla.rows[index].cells[2];
                    var nuevaCantidad = parseInt(celdaCantidad.innerHTML) + parseInt(cantidad.value);
                    celdaCantidad.innerHTML = nuevaCantidad.toString();
                    sumarItems();
                    limpiarDatos();
                }
                else
                {
                    agregarItemBueno(validarNombre);
                }
            }
            else
            {
                agregarItemBueno(validarNombre);
            } 
        }
    }
    else
    {
        siguienteFocus();
    }         
}
function agregarItemBueno(validarNombre)
{
    var item = validarNombre;
    var row = tbodyTabla.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    cell1.innerHTML = codigo.value;
    cell1.classList.add('col-1');
    cell2.innerHTML = item;
    cell2.classList.add('col-2');
    cell3.innerHTML = cantidad.value;
    cell3.classList.add('col-3');
    cell3.classList.add('cantidad');
    cell4.innerHTML = '<button class="boton-eliminar" onclick="eliminar(this)"><i class="far fa-trash-alt"></i></button>';
    cell4.classList.add('col-4');
    cell5.innerHTML = '0';
    cell5.classList.add('col-5');

    sumarItems();
    limpiarDatos();
}
function agregarItemDefecto(validarNombre)
{
    var item = validarNombre;
    var textoTipoDefecto = tipoDefecto.options[tipoDefecto.selectedIndex].text;

    if(tipoDefecto.value != 0)
    {
        item = item+' (DEFECTO: '+textoTipoDefecto+')';

        var row = tbodyTabla.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        
        cell1.innerHTML = codigo.value;
        cell1.classList.add('col-1');
        cell2.innerHTML = item;
        cell2.classList.add('col-2');
        cell3.innerHTML = cantidad.value;
        cell3.classList.add('col-3');
        cell3.classList.add('cantidad');
        cell4.innerHTML = '<button class="boton-eliminar" onclick="eliminar(this)"><i class="far fa-trash-alt"></i></button>';
        cell4.classList.add('col-4');
        cell5.innerHTML = '1';
        cell5.classList.add('col-5');
        
        sumarItems();
        limpiarDatos();
    }
    else
    {
        siguienteFocus();
    }
}
//SUMAR ITEMS
function sumarItems()
{
    var suma = 0;
    var cantidades = document.querySelectorAll('.cantidad');
    cantidades.forEach(function(num)
    {
        suma = parseInt(num.innerHTML) + suma;            
    });
    tituloTotal.innerHTML = 'TOTAL&nbsp;ITEM:&nbsp;'+suma;
}
//LIMPIAR
function limpiarDatos()
{
    estadoBueno.checked = true;
    boxDefecto.style.display = 'none';
    tipoDefecto.selectedIndex = 0;    
    codigo.value = '';    
    nombre.disabled = true;
    nombre.value = '';
    cantidad.value = '';
    codigo.focus();    
}
//ELIMINAR FILA
function eliminar(e)
{       
    var td = e.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr); 
    sumarItems();
}
botonBorrar.addEventListener('click', function()
{ 
    var filas = tbodyTabla.rows.length;
    
    if(filas > 0)
    {
        var confirmar = confirm('¿BORRAR TODOS LOS DATOS?');

        if(confirmar == true)
        {
            tbodyTabla.innerHTML = '';
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
// MODAL
botonBuscar.addEventListener('click', function() 
{
    tbodyConsulta.innerHTML = '';        
    consulta.value = ''; 

    modal.style.display = 'flex';
    consulta.focus(); 
});
botonCerrar.addEventListener('click', function() 
{ 
    modal.style.display = 'none';

    tbodyConsulta.innerHTML = '';        
    consulta.value = ''; 
});
botonConsulta.addEventListener('click', function() 
{ 
    consultarItem();  
});
consulta.addEventListener('keydown', function(e)
{  
    var code = e.keyCode;
    
    if (code == 13)
    {
        consultarItem();      
    }
});
function consultarItem()
{    
    tbodyConsulta.innerHTML = ''; 
    var query = consulta.value.toUpperCase();
    
    if(query.length > 2) 
    {
        var busqueda = items.filter(function(e)
        {
            return e.nombre.indexOf(query) > -1;
        });
                
        busqueda.forEach(function(e)
        {
            var row = tbodyConsulta.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = e.id;
            cell2.innerHTML = e.nombre;  
            cell3.innerHTML = '<td><button class="agregar" onclick="itemSeleccionado(this)"><i class="fas fa-plus"></i></button></td>';
        });
    }
    else
    {
        consulta.focus();
    }
}
function itemSeleccionado(e)
{
    var td = e.parentNode; 
    var tr = td.parentNode;    
    codigo.value = tr.cells[0].innerHTML;    

    buscarItem();
    modal.style.display = 'none'; 
}
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

    tituloInforme.innerHTML = 'informe&nbsp;de&nbsp;'+textoTipoInforme;                       
    tituloDistribuidor.innerHTML = 'distribuidor:&nbsp;'+textoDistribuidor;            
    tituloSemana.innerHTML = 'semana&nbsp;n°&nbsp;'+textoSemana;

    var fecha = new Date();

    tituloCreado.innerHTML = 'creado:&nbsp;'+fecha.toLocaleDateString()+'&nbsp;'+fecha.toLocaleTimeString();  

    var filas = tbodyTabla.rows.length;
    
    if(filas > 0)
    {
        if(tipoInforme.value != 0 && semana.value != 0 && distribuidor.value != 0 && distribuidor.value != 99)
        {   
            var element = pdf;            
            var nombrePDF = textoTipoInforme.substring(0,3).toUpperCase()+'-'+textoSemana+'-'+textoDistribuidor.toUpperCase();
                    
            var opt = 
            {
                margin:       [0.5, 1, 0.5, 1],
                filename:     nombrePDF+'.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 3 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            
            sortTable(tabla);
            ocultarColumna('none', 'block');

            html2pdf().set(opt).from(element).save().then(function()
            {
                ocultarColumna('block', 'none');                
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
    //implementar ocultar col-5
    
    var all = document.getElementsByClassName('col-4');
    
    for (var i = 0; i < all.length; i++) 
    {
        all[i].style.display = displayColumna;
    }

    encabezadoPdf.style.display = displayEncabezado;
}
//*******************************
function semanaActual()
{
    var fechaActual = new Date();
    var primeroEnero = new Date(fechaActual.getFullYear(),0,1);
    var numeroDia = (Math.floor((fechaActual - primeroEnero) / (24 * 60 * 60 * 1000))+1);
    var numeroSemana = Math.floor((numeroDia+4)/7);
    semana.selectedIndex = numeroSemana;    
   
}
//html load
window.onload = function(event) 
{
    semanaActual();
}
