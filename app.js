var ipdate=document.querySelector("#birthday");
var ipluckyno=document.querySelector("#lucky");
var btn=document.querySelector("#find");

btn.addEventListener("click",() => {
  var dateval= ((ipdate.value).split('-')).join("");
  var sum=0;
  for(var i=0;i<dateval.length;i++){
    sum+=Number(dateval[i]);
  }
  var luckyno=Number(ipluckyno.value);
  
  if(sum%luckyno===0){
  document.querySelector("#unlucky").style.display="none"; document.querySelector("#lucky1").style.display="block";
    
  }
else{ 
  document.querySelector("#lucky1").style.display="none";
  document.querySelector("#unlucky").style.display="block";                
}
});
