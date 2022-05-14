// INFO
const boxError = document.querySelector('#boxError');
const tipoInforme = document.querySelector('#tipoInforme');
const semana = document.querySelector('#semana');
const distribuidor = document.querySelector('#distribuidor');
// ITEM
const codigo = document.querySelector('#codigo');
const botonBuscar = document.querySelector('#botonBuscar');
const nombre = document.querySelector('#nombre');
const cantidad = document.querySelector('#cantidad');
const observacion = document.querySelector('#observacion');
const botonLimpiar = document.querySelector('#botonLimpiar');
const botonCrear = document.querySelector('#botonCrear');
const botonAgregar = document.querySelector('#botonAgregar'); 
// PDF
const pdf = document.querySelector('#pdf');
const tituloInforme = document.querySelector('#tituloInforme');
const tituloSemana = document.querySelector('#tituloSemana');
const tituloDistribuidor = document.querySelector('#tituloDistribuidor');
const tabla = document.querySelector('table');
const tbody = document.querySelector('tbody');
const botonEliminar = document.querySelectorAll(".botonEliminar");
const total = document.querySelector('#total');
// MODAL
const modal = document.querySelector('#modal');
const consulta = document.querySelector('#consulta');
const botonConsulta = document.querySelector('#botonConsulta');
const tbodyConsulta = document.querySelector('#tbodyConsulta');  
const botonCerrar = document.querySelector('#botonCerrar'); 
//SELECT
function habilitar()
{
    codigo.value = '';
    codigo.disabled = true;
    nombre.value = '';
    nombre.disabled = true;
    cantidad.value = '';
    cantidad.disabled = true;
    observacion.value = '';
    observacion.disabled = true;

    if(tipoInforme.value != 0 && semana.value != 0 && distribuidor.value != 0 && distribuidor.value != 99)
    {
        codigo.disabled = false;
        codigo.focus();
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
tipoInforme.addEventListener('change', function() 
{ 
    if(tipoInforme.value == 3)
    {
        boxObservacion.style.display = 'flex';
    }
    else 
    {
        boxObservacion.style.display = 'none';
    }
    habilitar();    
});
semana.addEventListener('change', function() 
{
    habilitar(); 
});
distribuidor.addEventListener('change', function() 
{
    habilitar(); 
});
//TECLEO Y/O INGRESOS EN INPUT
function buscarItem()
{
    var filtro = items.filter(items => items.id == codigo.value);

    if(filtro.length > 0)
    {
        nombre.value = filtro[0].nombre.toUpperCase();        
        nombre.disabled = true;
        cantidad.disabled = false;                    
        cantidad.focus();
    }
    else
    {
        nombre.disabled = false;
        nombre.focus();               
    }
}
codigo.addEventListener('input', function()
{
    nombre.disabled = true;
    nombre.value = '';
    cantidad.disabled = true;
    cantidad.value = '';
    observacion.value = '';
    observacion.disabled = true;

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
            buscarItem();
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
nombre.addEventListener('input', function()
{
    cantidad.disabled = true;

    if(nombre.value.length > 0)
    {
        cantidad.disabled = false;
    }
    else
    {
        //...
    }
});
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

    if(cantidad.value.length > 0)
    {
        observacion.disabled = false;
    }
    else
    {
        observacion.disabled = true;
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
    else if(tipoInforme.value == 3 && observacion.value == '')
    {
        observacion.focus();
    }
    else
    {
        botonAgregar.focus();
    }
}
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
observacion.addEventListener('keydown', function(e)
{  
    var code = e.keyCode;
    
    if (code == 13) //tecla enter
    {
        if(observacion.value != '')
        {
            siguienteFocus();
        }
        else
        {
            //...
        }      
    }
});
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

        if(nombre.disabled)
        {
            //..
        }
        else
        {
            validarNombre = validarNombre+' (*)';
        }

        if(tipoInforme.value == 3)
        {
            agregarItemDefecto(validarNombre);
        }
        else
        {
            var numeroFilas = tbody.rows.length;

            if(numeroFilas > 0)
            {
                var index;
                var duplicado = 0;
    
                for(var i = 0; i < numeroFilas; i++)
                {
                    var codigoFila = tbody.rows[i].cells[0].innerHTML;
        
                    if(codigoFila == codigo.value)
                    {
                        index = i;
                        duplicado++;                    
                    }              
                }
                if(duplicado > 0) 
                {
                    var celdaCantidad = tbody.rows[index].cells[2];
                    var nuevaCantidad = parseInt(celdaCantidad.innerHTML) + parseInt(cantidad.value);
                    celdaCantidad.innerHTML = nuevaCantidad.toString();
                    sumarItems();
                    limpiarDatos();
                }
                else
                {
                    agregarItemNormal(validarNombre);
                }
            }
            else
            {
                agregarItemNormal(validarNombre);
            } 
        }
    }
    else
    {
        siguienteFocus();
    }
         
}
function agregarItemDefecto(validarNombre)
{
    var item = validarNombre;

    if(observacion.value != '')
    {
        item = item+' (DEFECTO: '+observacion.value+')';

        var row = tbody.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        
        cell1.innerHTML = codigo.value;
        cell1.classList.add('col-1');
        cell2.innerHTML = item;
        cell2.classList.add('col-2');
        cell3.innerHTML = cantidad.value;
        cell3.classList.add('col-3');
        cell3.classList.add('cantidad');
        cell4.innerHTML = '<button class="botonEliminar" onclick="eliminar(this)"><i class="far fa-trash-alt"></i></button>';
        cell4.classList.add('col-4');
        
        sumarItems();
        limpiarDatos();
    }
    else
    {
        siguienteFocus();
    }
}
function agregarItemNormal(validarNombre)
{
    var item = validarNombre;
    var row = tbody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell1.innerHTML = codigo.value;
    cell1.classList.add('col-1');
    cell2.innerHTML = item;
    cell2.classList.add('col-2');
    cell3.innerHTML = cantidad.value;
    cell3.classList.add('col-3');
    cell3.classList.add('cantidad');
    cell4.innerHTML = '<button class="botonEliminar" onclick="eliminar(this)"><i class="far fa-trash-alt"></i></button>';
    cell4.classList.add('col-4');

    sumarItems();
    limpiarDatos();
}
//LIMPIAR
function limpiarDatos()
{
    codigo.value = '';
    nombre.value = '';
    nombre.disabled = true;
    cantidad.value = '';
    cantidad.disabled = true;
    observacion.value = '';
    observacion.disabled = true;
    codigo.focus();
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
    total.innerHTML = 'Total Items: '+suma;
}
//ELIMINAR FILA
function eliminar(e)
{       
    var td = e.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr); 
    sumarItems();
}
botonLimpiar.addEventListener('click', function()
{ 
    var filas = tbody.rows.length;
    
    if(filas > 0)
    {
        var confirmar = confirm('¿BORRAR TODOS LOS DATOS?');

        if(confirmar == true)
        {
            tbody.innerHTML = '';
            sumarItems();
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

    if(codigo.disabled == false)
    {        
        modal.style.display = 'flex';
        consulta.focus(); 
    }
    else
    {
        modal.style.display = 'none'; 
    }
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
    
    if(query.length > 3) 
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
        sortTable(tablaConsulta);
    }
    else
    {
        //...
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
function sortTable(e)
{
    var table, rows, switching, i, x, y, shouldSwitch;
    table = e;
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
    var filas = tbody.rows.length; 

    if(filas > 0)
    {
        if(tipoInforme.value != 0 && semana.value != 0 && distribuidor.value != 0 && distribuidor.value != 99)
        {
            var textoTipoInforme = tipoInforme.options[tipoInforme.selectedIndex].text;
            var textoSemana = semana.options[semana.selectedIndex].text;
            var textoDistribuidor = distribuidor.options[distribuidor.selectedIndex].text;

            tituloInforme.innerHTML = 'Informe de '+textoTipoInforme;            
            tituloSemana.innerHTML = 'Semana N° '+textoSemana;            
            tituloDistribuidor.innerHTML = 'Distribuidor: '+textoDistribuidor; 
            
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
            else 
            {
                //...
            }
        }
    }
    else
    {
        //...
    }  
}
function ocultarColumna(displayCol, displayTitulo)
{
    var all = document.getElementsByClassName('col-4');
    
    for (var i = 0; i < all.length; i++) 
    {
        all[i].style.display = displayCol;
    }

    tituloInforme.style.display = displayTitulo;
    tituloSemana.style.display = displayTitulo;
    tituloDistribuidor.style.display = displayTitulo;
}
function semanaActual()
{
    var fechaActual = new Date();
    var primeroEnero = new Date(fechaActual.getFullYear(),0,1);
    var numeroDia = (Math.floor((fechaActual - primeroEnero) / (24 * 60 * 60 * 1000))+1);
    var numeroSemana = Math.floor((numeroDia+4)/7);
    semana.selectedIndex = numeroSemana;    
   
}
function cargarDistribuidores()
{
    
    distribuidores.sort();
    indice = 1;

    for (value in distribuidores)
    {
        var option = document.createElement('option');        
        option.value = indice; 
        option.text = distribuidores[value];
        distribuidor.add(option);
        indice++;
    }

    var option = document.createElement('option'); 
    option.value = '99'; 
    option.text = '';
    distribuidor.add(option);

    var option = document.createElement('option'); 
    option.value = '100'; 
    option.text = 'Stock';
    distribuidor.add(option);
}
//html load
window.onload = function(event) 
{
    semanaActual();
    cargarDistribuidores();
};

