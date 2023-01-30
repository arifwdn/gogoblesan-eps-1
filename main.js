let targetObject = document.getElementById('targetObject');
let inputHexa = document.getElementById('inputHexa');
let ubahLatar = ()=>{
    if(inputHexa.value ==''){
        alert('Warna yang diubah gak boleh kosong!');
    }

    targetObject.style.backgroundColor = inputHexa.value;
}
inputHexa.addEventListener('keyup', (e)=>{
    if(e.keyCode == 13){
        ubahLatar();
    }
});