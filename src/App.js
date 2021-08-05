import './App.css';
import React,{useState} from 'react';

function App() {

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operado,setOperado]=useState(false)

  //estilos
  const cssTela = {
    display:'flex',
    paddingLeft:'20',
    paddingRight:'20',
    justifyContent:'center',
    alignItems:'flex-start',
    flexDirection:'column',
    backgroundColor:'#444',
    width:'260'
  }

  const cssTelaOperacao = {
    fontSize:25,
    color:'#fff',
    height:20
  }

  const cssTelaResultado = {
    fontSize:50,
    color:'#fff',
    height:20
  }

  const cssBtn = {
    fontSize:30,
    height:75,
    width:75,
    padding:20,
    backgroundColor:'#000',
    color:"#fff",
    borderColor:"#000",
    textAlign:'center',
    outline:'none'
  }


  //componentes
  const Tela = (valor,res) => {
    return(
      <div style={cssTela}>
        <span style={cssTelaOperacao}>{valor}</span>
        <span style={cssTelaResultado}>{res}</span>
      </div>
    )
  }

  const Btn = (label,onClick) => {
    return(
      <button style={cssBtn} onClick={onClick}></button>
    )
  }

  //funções
  const addDigitoTela = (d) => {
    if((d=='+' || d=='-' | d=='*' | d=='/') && operado){
      
    }
  }

  return (
    <>
      
    </>
  );
}

export default App;
