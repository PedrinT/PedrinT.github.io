document.getElementById('inputFile').addEventListener('change', handleFile, false);

function handleFile(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });

        var sheetName = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[sheetName];

        var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        var leituras = JSON.stringify(jsonData, null, 2);
        
    };
    console.log(leituras)
    reader.readAsArrayBuffer(file);
}


var leituraDosDias


fetch('../calendario.json')
  .then(response => response.json())
  .then(data => {
    
    console.log(data);
  

})
  .catch(error => {
    // Lida com erros, se houver algum
    console.error('Erro ao ler o arquivo JSON:', error);
  });
