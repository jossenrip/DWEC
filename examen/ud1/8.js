function mayor(){
    let nums = [
        document.getElementById("n1").value,
        document.getElementById("n2").value,
        document.getElementById("n3").value
    ]

    for(let i = 0; i < nums.length; i++){
        if(isNaN(nums[i])){
            alert("Numero no valido")
        }
    }
    nums.sort((a, b) => b - a)
    let mayor = nums[0]
    alert(mayor) 
}