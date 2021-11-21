// INFO
const tipoInforme = document.getElementById('tipoInforme');
const semana = document.getElementById('semana');
const distribuidor = document.getElementById('distribuidor');
// ITEM
const codigo = document.getElementById('codigo');
const botonBuscar = document.getElementById('botonBuscar');
const nombre = document.getElementById('nombre');
const cantidad = document.getElementById('cantidad');
const boxObservacion = document.getElementById('boxObservacion');
const defecto = document.getElementById('defecto');
const observacion = document.getElementById('observacion');
const botonLimpiar = document.getElementById('botonLimpiar');
const botonCrear = document.getElementById('botonCrear');
const botonAgregar = document.getElementById('botonAgregar'); 
// PDF
const pdf = document.getElementById('pdf');
const tituloInforme = document.getElementById('tituloInforme');
const tituloDistribuidor = document.getElementById('tituloDistribuidor');
const tabla = document.getElementById('tabla');
const tbody = document.getElementById('tbody');
const tablaDefectos = document.getElementById('tablaDefectos');
const tbodyDefectos = document.getElementById('tbodyDefectos');
const total = document.getElementById('total');
// MODAL
const modal = document.getElementById('modal');
const consulta = document.getElementById('consulta');
const botonConsulta = document.getElementById('botonConsulta');
const tbodyConsulta = document.getElementById('tbodyConsulta');  
const botonCerrar = document.getElementById('botonCerrar'); 
//SELECT
tipoInforme.addEventListener('change', function() 
{ 
    var textoTipoInforme = tipoInforme.options[tipoInforme.selectedIndex].text;
    var textoSemana = semana.options[semana.selectedIndex].text;
    tituloInforme.innerHTML = 'Informe de '+textoTipoInforme+' - Semana N° '+textoSemana;
    habilitar(); 
});
semana.addEventListener('change', function() 
{
    var textoTipoInforme = tipoInforme.options[tipoInforme.selectedIndex].text;
    var textoSemana = semana.options[semana.selectedIndex].text;
    tituloInforme.innerHTML = 'Informe de '+textoTipoInforme+' - Semana N° '+textoSemana;
    habilitar(); 
});
distribuidor.addEventListener('change', function() 
{
    var textoDistribuidor = distribuidor.options[distribuidor.selectedIndex].text;
    tituloDistribuidor.innerHTML = 'Distribuidor: '+textoDistribuidor; 
    habilitar() 
});
//CHECK
defecto.addEventListener('change', function()
{
    if (defecto.checked == true)
    {        
        boxObservacion.style.display = 'flex'
        observacion.disabled = false;
        observacion.focus();        
    } 
    else
    {
        boxObservacion.style.display = 'none'
        observacion.disabled = true;
        observacion.value = '';
        
    }
});
function habilitar()
{
    if (tipoInforme.value != 0 && semana.value != 0 && distribuidor.value != 0 && distribuidor.value != 13)
    {
        codigo.disabled = false;
        defecto.disabled = false;
        
        if (tipoInforme.value == 2)
        {
            defecto.disabled = false;
        }
        else 
        {
            defecto.disabled = true;
        }
    }
    else 
    {
        codigo.value = '';
        codigo.disabled = true;
        nombre.value = '';
        nombre.disabled = true;
        cantidad.value = '';
        cantidad.disabled = true;
    }
}
//CODIGO
codigo.addEventListener('keydown', function(e)
{
    var key = e.keyCode;

    if(key == 13)
    {
        if(codigo.value.length == 5)
        {
            if(nombre.value == '') 
            {
                nombre.focus();
            }
            else if(cantidad.value == '')
            { 
                cantidad.focus(); 
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
    }
    else if((key >= 48 && key <= 57) || (key >= 96 && key <= 105))
    {
        //numeros teclado y teclado numerico       
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
codigo.addEventListener('input', function()
{
    nombre.disabled = true;
    nombre.value = '';
    cantidad.disabled = true;
    cantidad.value = '';

    var num = ['0','1','2','3','4','5','6','7','8','9'];
    var str = codigo.value.toString();
    var nuevoStr = '';

    if(str.length >= 5)
    {
        for(var i = 0; i < str.length; i++)
        {
            if(num.includes(str[i]))
            {
                nuevoStr += str[i];
            }
            else
            {
                //...
            }
        }
        nuevoStr = nuevoStr.substring(0,5);
        codigo.value = nuevoStr;

        if(codigo.value.length == 5)
        {
            buscarItem();
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
function buscarItem()
{
    var filtro = items.filter(items => items.id == codigo.value);

    if(filtro.length > 0)
    {
        nombre.value = filtro[0].nombre.toUpperCase();
        cantidad.disabled = false;                    
        cantidad.focus();
    }
    else
    {
        nombre.disabled = false;
        nombre.focus();                    
    }
} 
//NOMBRE ITEM
nombre.addEventListener('keydown', function(e)
{  
    var code = e.keyCode;
    
    if (code == 13)
    {
        if(cantidad.value == '') 
        { 
            cantidad.focus(); 
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
//CANTIDAD ITEM
cantidad.addEventListener('keydown', function(e)
{    
    var key = e.keyCode;

    if (key == 13)
    {
        if(defecto.disabled == true)
        {
            agregarItem();
        }
        else
        {
            if(defecto.checked == true) 
            {
                if(observacion.value == '')
                {
                    observacion.focus();
                }
                else
                {
                    agregarDefecto();
                }                
            } 
            else
            {
                defecto.focus();
            }
        }               
    }
    else if((key >= 48 && key <= 57) || (key >= 96 && key <= 105))
    {
        //numeros teclado y teclado numerico
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
cantidad.addEventListener('input', function()
{    
    var num = ['0','1','2','3','4','5','6','7','8','9'];
    var str = cantidad.value.toString();
    var nuevoStr = '';

    if(str.length >= 3) 
    {
        for(var i = 0; i < str.length; i++) 
        {
            if(num.includes(str[i])) 
            {
                nuevoStr += str[i];
            }
            else 
            {
                //...
            }
        }
        nuevoStr = nuevoStr.substring(0,3);
        cantidad.value = nuevoStr;   
    }
    else 
    {
        //...
    }       
}); 
//ITEM CON DEFECTO
defecto.addEventListener('keydown', function(e)
{  
    var code = e.keyCode;
    
    if (code == 13)
    {
        if(defecto.checked == true) 
        { 
            observacion.focus(); 
        }
        else 
        {
            agregarItem();
        }       
    }
    else
    {
        //...
    }
});
//OBSERVACION
observacion.addEventListener('keydown', function(e)
{  
    var code = e.keyCode;
    
    if (code == 13)
    {
        if(observacion.value != '')
        {
            agregarDefecto()
        }
        else
        {
            //...
        }      
    }
});
//AGREGAR ITEM NORMAL
function agregarItem()
{
    if(codigo.value !='' && codigo.value.length == 5 && nombre.value !='' && cantidad.value !='')
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
                var celdaCantidad = tbody.rows[index].cells[2].getElementsByTagName('div')[0];
                var nuevaCantidad = parseInt(celdaCantidad.innerHTML) + parseInt(cantidad.value);
                celdaCantidad.innerHTML = nuevaCantidad.toString();
                sumarItems();
                limpiarDatos();
            }
            else
            {
                agregarFilaItem();
            }
        }
        else
        {
            agregarFilaItem();
        }
    }
    else 
    {
        if(codigo.value == '') 
        { 
            codigo.focus() 
        }  
        if(nombre.value == '') 
        { 
            nombre.focus() 
        } 
        else if(cantidad.value == '') 
        { 
            cantidad.focus() 
        }                         
        else 
        {
            //...
        } 
    }
}
function agregarFilaItem()
{
    tabla.style.display = 'block';

    var row = tbody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = codigo.value;

    if(nombre.disabled)
    {
        cell2.innerHTML = nombre.value;
    }
    else
    {
        cell2.innerHTML = nombre.value+' (*)';
    }
    
    cell3.innerHTML = '<div class="cantidad">'+cantidad.value+'</div>';
    cell4.innerHTML = '<button class="eliminar" onclick="eliminarFila(this)"><i class="far fa-trash-alt"></i></button>';
    sumarItems();
    limpiarDatos();
}
//AGREGAR ITEM NORMAL O ITEM CON DEFECTO
function agregarDefecto()
{
    if(codigo.value !='' && codigo.value.length == 5 && nombre.value !='' && cantidad.value !='' && observacion.value != '')
    {
        agregarFilaDefecto();
    }
    else 
    {
        if(codigo.value == '') 
        { 
            codigo.focus() 
        }  
        if(nombre.value == '') 
        { 
            nombre.focus() 
        } 
        else if(cantidad.value == '') 
        { 
            cantidad.focus() 
        }   
        else if(observacion.value == '') 
        { 
            observacion.focus() 
        }                       
        else 
        {
            //...
        } 
    }
}
function agregarFilaDefecto()
{
    tablaDefectos.style.display = 'block';

    var row = tbodyDefectos.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = codigo.value;

    if(nombre.disabled)
    {
        cell2.innerHTML = nombre.value+' (DEFECTO: '+observacion.value+')';
    }
    else
    {
        cell2.innerHTML = nombre.value+' (DEFECTO: '+observacion.value+') (*)';
    }
    
    cell3.innerHTML = '<div class="cantidad">'+cantidad.value+'</div>';
    cell4.innerHTML = '<button class="eliminar" onclick="eliminarFila(this)"><i class="far fa-trash-alt"></i></button>';
    sumarItems();
    limpiarDatos();
}
// *****
function limpiarDatos()
{
    codigo.value = '';
    nombre.value = '';
    nombre.disabled = true;
    cantidad.value = '';
    cantidad.disabled = true;
    defecto.checked = false;
    observacion.value = '';
    observacion.disabled = true;
    boxObservacion.style.display = 'none';
    codigo.focus();
}
// CLIC BOTON
botonBuscar.addEventListener('click', function() 
{
    if(codigo.disabled == false)
    {
        tbodyConsulta.innerHTML = '';        
        consulta.value = ''; 
        modal.style.display = 'flex';
        consulta.focus(); 
    }
    else
    {
        modal.style.display = 'none'; 
    }
});
botonLimpiar.addEventListener('click', function()
{ 
    var filas = tbody.rows.length;
    var filasDefectos = tbodyDefectos.rows.length; 
    
    if(filas > 0 || filasDefectos > 0)
    {
        var confirmar = confirm('¿QUIERE BORRAR INFORMACION DE LA TABLA?');

        if(confirmar == true)
        {
            tbody.innerHTML = '';
            tabla.style.display = 'none';
            tbodyDefectos.innerHTML = '';
            tablaDefectos.style.display = 'none';
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
botonCrear.addEventListener('click', function() 
{ 
    crearPDF(); 
});
botonAgregar.addEventListener('click', function() 
{
    if(defecto.checked == true) 
    {
        agregarDefecto();
    } 
    else
    {
        agregarItem();
    }     
});
botonConsulta.addEventListener('click', function() 
{ 
    consultarItem();  
});
botonCerrar.addEventListener('click', function() 
{ 
    modal.style.display = 'none';
    tbodyConsulta.innerHTML = '';        
    consulta.value = ''; 
});
//CREAR PDF
function crearPDF()
{
    var filas = tbody.rows.length; 
    var filasDefectos = tbodyDefectos.rows.length;

    if(filas > 0 || filasDefectos > 0)
    {
        if(tipoInforme.value != 0 && semana.value != 0 && distribuidor.value != 0 && distribuidor.value != 13)
        {
            var element = pdf;
            var nombrePDF = tipoInforme.options[tipoInforme.selectedIndex].text;;
            var hoy = new Date();
            var fecha = hoy.getDate()+'-'+(hoy.getMonth()+1)+'-'+hoy.getFullYear();
            var hora = hoy.getHours()+'h'+hoy.getMinutes()+'m';
        
            var opt = 
            {
                margin:       0.5,
                filename:     nombrePDF+'_'+fecha+'_'+hora+'.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 3 },
                jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            
            if(filas > 0 )
            {
                sortTable('tabla');
                ocultarColumna(3, 'none', 'block', 'tabla');
            }
            if(filasDefectos > 0 )
            {
                sortTable('tablaDefectos');
                ocultarColumna(3, 'none', 'block', 'tablaDefectos');
            }
            
            html2pdf().set(opt).from(element).save().then(function()
            {
                if(filas > 0 )
                {
                    ocultarColumna(3, 'block', 'none', 'tabla');
                }
                if(filasDefectos > 0 )
                {
                    ocultarColumna(3, 'block', 'none', 'tablaDefectos');
                }
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
            else if(distribuidor.value == 0 || distribuidor.value == 13) 
            { 
                distribuidor.focus(); 
            }
            else if(codigo.value == '') 
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
//ORDENAR ITEM TABLA POR ABCEDARIO
function sortTable(idtabla)
{
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(idtabla);
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
// OCULTAR COLUMNA
function ocultarColumna(col, displayCol, displayTitulo, nombreTabla)
{
    var tabla = document.getElementById(nombreTabla);

    for(var i = 0; i < tabla.rows.length; i++)
    {
        for(var j = 0; j < tabla.rows[i].cells.length; j++)
        {            
            if(j == col)
            {
                tabla.rows[i].cells[j].style.display = displayCol;
            }
        }
    }
    tituloInforme.style.display = displayTitulo;
    tituloDistribuidor.style.display = displayTitulo;
}
// ****
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
function eliminarFila(e)
{       
    var td = e.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr); 
    sumarItems();

    if(tbody.rows.length < 1)
    {
        tabla.style.display = 'none';
    }

    if(tbodyDefectos.rows.length < 1)
    {
        tablaDefectos.style.display = 'none';
    }
}