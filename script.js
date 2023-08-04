 function executaWhile(){
    let num = (document.getElementById("entrada").value)
    let i = 0;
    while(i < num){
        alert(i);
        i ++;
    }
 }
 function executaFor(){
    let num = (document.getElementById("entrada").value)
    for(let i = 0; i < num; i++){
        alert(i);
    }
 }
function primos(){
    let num = Number(document.getElementById("entrada").value)
    let qtd = 0;
    let i = 1;
    while(i < num){
        let divisores = 0;
        let c = 1;
        while(c <= 1){
            if(i % c == 0){
                divisores ++;
            }
        }
        if divisores == 2{
            qtd ++;
        }
    }
    alert(qtd);
}