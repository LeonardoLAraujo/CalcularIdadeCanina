function calcular(){

    let raca = document.frm_idade.txt_raca.value;
    let porte = document.frm_idade.idadeCanina.value;
    let ano = parseFloat(document.frm_idade.txt_ano.value);
    let resultado;

    if(raca == "" || ano == ""){
        alert("Existe Campos em Branco, Preencha-os!!!");
    }else{
        if(porte == "pequeno"){
            resultado = (ano * 12.5);
        }else if(porte == "medio"){
            resultado = (ano * 10.5);
        }else{
            resultado = (ano * 9);
        }

        alert(`O seu ${raca} tem ${resultado} anos`);
    }

    

}
