 const url = "https://api.github.com/users";
const srchBtnEl = document.getElementById('srchbtn')

const imgEL = document.getElementById('avImg')

srchBtnEl.addEventListener('click' , ()=>{
    try {
        const data =  fetch(`${url}/anshuopinion`)
        .then((res)=>{
            return  res.json()
            
        })
        console.log(data)


    } catch (error) {
        console.log(error)
    }
       
  


})