const endDate= "24 March 2024 6:10 AM"; 
document.getElementById("date").innerText = endDate;
const input = document.getElementsByTagName("input");
console.log(input);

const clock = () => {
   const end = new Date(endDate);
   const now = new Date();
   const diff = (end - now)/1000;
   if(diff < 0) return;
  input[0].value = (Math.floor(diff/3600/24));
  input[1].value = (Math.floor((diff/3600) % 24));
  input[2].value = (Math.floor(diff/60) % 60);
  input[3].value = (Math.floor(diff % 60));
}

setInterval(()=>{
    clock();
},1000);