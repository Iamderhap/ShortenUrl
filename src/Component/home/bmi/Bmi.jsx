import React, {useState} from 'react'


function Bmi() {

    function handleSubmit(e){
    e.preventDefault();
    // alert({w, h});
    if(w = ''){
      alert('Input something dont be shy')
    }
    else alert('processed')
   if(w < 4){
    alert('Reduce your junks consumption')
   }
   else alert('you should be proud of your health')

   if (h > 5){
    alert('reduce the way you jump up!')
}
else alert('well, the universe can manage your height')
    }
    

    const[w, setW] = useState("")
    const[h, setH] = useState("")
  return (
    <form onSubmit={Bmi}>
        <input type="number" name="" id="" value={w}onChange={(e)=> setW(e.target.value)}/>
        <input type="number" name="" id="" value={h}onChange={(e)=> setH(e.target.value)}/>
        <button onClick={handleSubmit}>Check your bmi</button>
    </form>
  )
}

export default Bmi