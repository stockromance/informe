var input = document.getElementById('input');
var list = document.getElementById('list'); 


input.addEventListener('change', function() 
    {
        readXlsxFile(input.files[0]).then(function(data) 
            {
                var row = data.length-1;

                list.innerHTML += "const items = [";

                for(var i = 0; i < row; i++)
                {
                    list.innerHTML += "<br/>{id:'"+data[i][0]+"', nombre:'"+data[i][1]+"'},";             
                }                
                
                list.innerHTML += "<br/>{id:'"+data[row][0]+"', nombre:'"+data[row][1]+"'}";
                list.innerHTML += "<br/>];";
            }
        );
    }
);


// EXPORTAR JS

var botonJS = document.getElementById('botonJS'); 

function exportar (data, fileName) 
{
    const a = document.createElement("a");
    const contenido = data,
        blob = new Blob([contenido], {type: "octet/stream"}),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);    
};

botonJS.addEventListener('click', function() 
    {
        const data = document.querySelector('#list').textContent;
        const nombreArchivo = 'items.js'
        exportar(data, nombreArchivo);
    }
);

// EXPORTAR XLSX

var botonXLSX = document.getElementById('botonXLSX'); 

function fnExportToExcel (fileExtension, fileName)
{
       var elt = document.getElementById('tabla');
       var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
       return XLSX.writeFile(wb, fileName+"."+fileExtension || ('MySheetName.' + (fileExtension || 'xlsx')));
};

botonXLSX.addEventListener('click', function()     
    {       
        fnExportToExcel('xlsx', 'factura');
    }
);