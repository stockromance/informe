var input = document.getElementById('input');
var list = document.getElementById('list'); 

input.addEventListener('change', function() 
    {
        readXlsxFile(input.files[0]).then(function(data) 
            {
                var row = data.length-1;

                list.innerHTML += "const items = [<br/>";

                for(var i = 0; i < row; i++)
                {
                    list.innerHTML += "<br/>{id:'"+data[i][0]+"', nombre:'"+data[i][1]+"'},";             
                }                
                
                list.innerHTML += "<br/>{id:'"+data[row][0]+"', nombre:'"+data[row][1]+"'}";
                list.innerHTML += "<br/>];";

                data.forEach(([key, value]) => {
                console.log("{id:'"+key+"', nombre:'"+value+"'},");});
            }
        );
    }
);
