import React from 'react';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import Select from 'react-select';

function Meme(){

  //UseState Hook
  //Linea1 is the variable
  //setLinea1 is a method that set linea1 value
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('');

  const images = [
    {value: ''}
  ];

  const onChangeLinea1 =(event)=>{
    setLinea1(event.target.value);
  }

  const onChangeLinea2 = (event) =>{
    setLinea2(event.target.value);
  }

  const onChangeImage =(event)=>{
    setImage(event.target.value);
  }

  const onClickExport =()=>{
    html2canvas(document.querySelector('.meme')).then(function(canvas) {
      let link = document.createElement('a');
      link.download = 'filename.png';
      link.href = canvas.toDataURL()
      link.click();
    });
  }

  return(
    //class are called className
    <div className="App">
      <select onChange={onChangeImage}>
        <option value=""></option>
        <option value="fire">Fire</option>
        <option value="futurama">Futurama</option>
        <option value="history">Aliens</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart guy</option>
      </select> <br />

      {/* OnChange method I must pass it a function*/}
      <input onChange={onChangeLinea1} type="text" placeholder="linea 1"/> <br />
      <input onChange={onChangeLinea2} type="text" placeholder="linea 2"/> <br />
      <button onClick={onClickExport}>Exportar</button>

      <div className='meme'>
        {/* Allways display the variable and not the method  */}
        <span>{linea1}</span> <br />
        <span>{linea2}</span> <br />
        <img src={"/assets/img/"+image+".jpg"}/>
      </div>
    </div> 
  );
}

export default Meme;
