var L1,L2,L3,P,S,A

function captural1() {
    L1=document.getElementById("l1").value
    L1=parseFloat(L1)
}
function captural2() {
    L2=document.getElementById("l2").value
    L2=parseFloat(L2)
}
function captural3() {
    L3=document.getElementById("l3").value
    L3=parseFloat(L3)
    
}
function condicion(){
    return(L1+L2>L3 || L1 + L3 > L2 || L2 + L3 > L1)   
}

function area_semiperimetro(){
  
    const parent=document.getElementById("resultado")
    parent.innerHTML=""
    const h2_a_r=document.createElement("h2")
    const h2_sp_r=document.createElement("h2")
    const h2_p_r=document.createElement("h2")

    
    P=(L1+L2+L3)
    h2_p_r.textContent=("El perimetro es: " + P)
    

    S= (L1+L2+L3)/2;
    h2_sp_r.textContent=("El semiperimetro es: " + S)

    A = (Math.sqrt(S*((S-L1)*(S-L2)*(S-L3))))
    checkNaN(A)
    function checkNaN(value) {
        if (isNaN(value)) {
            alert("Ingresa un valor numérico válido");
        }
    }
    h2_a_r.textContent=("El area es: " + A)
    
    parent.append(h2_p_r, h2_sp_r, h2_a_r);
   
}

function erase(){
    var erase=document.getElementById("resultado")
    erase.innerHTML=""    
}

