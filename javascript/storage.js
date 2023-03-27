function storeTheValue()
{
    var dataforSession =document.getElementById("sessionstoragedata").value
    var dataforLocal =document.getElementById("localstoragedata").value
    sessionStorage.setItem("dataS" , dataforSession)
    localStorage.setItem("dataL" , dataforLocal)

}

function retriveTheData()
{
    var sessionData = sessionStorage.getItem("dataS")
    document.getElementById("a").innerHTML=sessionData;
    var localData = localStorage.getItem("dataL")
    document.getElementById("b").innerHTML=localData;
    
}