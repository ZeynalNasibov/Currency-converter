const leftbuttons=document.querySelectorAll('.left button')
const rightbuttons=document.querySelectorAll('.rigth button')
const info1=document.querySelector('.left .info')
const info2=document.querySelector('.rigth .info')
const input=document.querySelector('input')
const answer=document.querySelector('.answer')
 
let pul1='RUB'
let pul2='USD'
 
input.addEventListener('change', (e)=>{
    input.value=e.target.value
})
fetch(`https://api.exchangerate.host/latest?base=${pul1}&symbols=${pul2}`)
            .then(res=>res.json())
            .then(data=>{
                input.addEventListener('keyup', ()=>{
                    answer.innerHTML=input.value*data.rates[pul2]
                })
                info1.innerHTML=`1 ${pul1} = `+data.rates[pul2]+` ${pul2}`
            })
fetch(`https://api.exchangerate.host/latest?base=${pul2}&symbols=${pul1}`)
            .then(res=>res.json())
            .then(data=>
            info2.innerHTML=`1 ${pul2} = `+data.rates[pul1]+` ${pul1}`
)

leftbuttons.forEach(item=>{
    item.addEventListener('click', (e)=>{
        input.value=''
        answer.innerHTML=''
        leftbuttons.forEach(button=>{
            button.className='normal'
        })
        e.target.className='active'
        pul1=item.innerHTML
        fetch(`https://api.exchangerate.host/latest?base=${pul1}&symbols=${pul2}`)
            .then(res=>res.json())
            .then(data=>{
                input.addEventListener('keyup', ()=>{
                    answer.innerHTML=input.value*data.rates[pul2]
                })
                info1.innerHTML=`1 ${pul1} = `+data.rates[pul2]+` ${pul2}`
            })
        fetch(`https://api.exchangerate.host/latest?base=${pul2}&symbols=${pul1}`)
            .then(res=>res.json())
            .then(data=>
            info2.innerHTML=`1 ${pul2} = `+data.rates[pul1]+` ${pul1}`
            )
    })
})
rightbuttons.forEach(item=>{
    item.addEventListener('click', (e)=>{
        input.value=''
        answer.innerHTML=''
        rightbuttons.forEach(button=>{
            button.className='normal'
        })
        e.target.className='active'
        pul2=item.innerHTML
        fetch(`https://api.exchangerate.host/latest?base=${pul1}&symbols=${pul2}`)
            .then(res=>res.json())
            .then(data=>{
                input.addEventListener('keyup', ()=>{
                    answer.innerHTML=input.value*data.rates[pul2]
                })
                info1.innerHTML=`1 ${pul1} = `+data.rates[pul2]+` ${pul2}`
            })
        fetch(`https://api.exchangerate.host/latest?base=${pul2}&symbols=${pul1}`)
            .then(res=>res.json())
            .then(data=>
            info2.innerHTML=`1 ${pul2} = `+data.rates[pul1]+` ${pul1}`
            )
    })
})