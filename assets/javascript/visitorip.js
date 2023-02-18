let ipurl = 'https://ifconfig.me/'

const getIP=async()=>{
   let IPData= await fetch(ipurl) 
   document.getElementById('ip').innerHTML=IPData;
}
