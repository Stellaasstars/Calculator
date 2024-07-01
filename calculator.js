const display=document.getElementById("display");
function appendtoDisplay(input){
        display.value += input;


}

function ClearDisplay(){
      display.value="";

}
  
function Calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(Error){
        display.value = "Error";

    }
}