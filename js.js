document.getElementById('filePicker').addEventListener('change', function(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const textArea = document.getElementById('textEditor');
            textArea.value = e.target.result;
        };
        reader.readAsText(file);
    }
});

function saveText() {
    const textArea = document.getElementById('textEditor');
    const content= textArea.value
    const  file=URL.createObjectURL(new Blob([content],{type: 'text/plain'}));
    const a =document.createElement('a');

    a.href=file;
    a.download="SzerkesztettFile.txt";
    document.body.appendChild(a);
    a.click();

    document.getElementById("feedbackMessage").innerText="Sikeres mentés";
}