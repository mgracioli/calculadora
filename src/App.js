import './App.css';
import React,{useState} from 'react';

function App() {

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operado,setOperado]=useState(false)

  //estilos
  const cssConteiner = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    width:240,
    border:'1px solid #000'
  }

  const cssBotoes = {
    flexDirection:'row',
    flexWrap:'wrap'
  }

  const cssTela = {
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start',
    flexDirection:'column',
    backgroundColor:'#333',
    width:240
  }

  const cssTelaOperacao = {
    fontSize:'20px',
    paddingLeft:10,
    color:'#fff',
    height:10
  }

  const cssTelaResultado = {
    fontSize:'45px',
    paddingLeft:10,
    color:'#fff',
    height:55
  }

  const cssBtn = {
    fontSize:'30px',
    height:'60px',
    width:'60px',
    padding:5,
    backgroundColor:'#444',
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
      <button style={cssBtn} onClick={onClick}>{label}</button>
    )
  }

  //funções
  const addDigitoTela = (d) => {
    if((d=='+' || d=='-' | d=='*' | d=='/') && operado){
      
      return
    }
    if(operado){
      setValorTela(d)
      setOperado(false)
      return
    }
    const valorDigitadoNatela=valorTela+d //valorTela+d é o valor que já está na tela mais o proximo digito digitado (pode ser um operador ou um outro numero), o operado só será true quando eu tiver uma expressão completa (Ex.: 5+3), nesse caso, o eval() vai pegar essa expressão, executar ela e, daí, setar operado para true
    setValorTela(valorDigitadoNatela)
  }

  const limparMemoria = () => {
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  const operacao = (operacao)=>{
    if(operacao == 'bs'){
      let vTela=valorTela

      vTela = vTela.substring(0,(vTela.length-1))
      setValorTela(vTela)
      setOperado(false)
      return
    }
    try{
      const r = eval(valorTela)  //eval() faz o cálculo a partir da expressão quee stiver digitada na tela, ele avalia a expressão digitada e executa ela
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    }catch{
      setResultado('Erro')
    }
  }

  return (
    <>
      <div style={cssConteiner}>
        <h1>Calculadora</h1>

        {Tela(valorTela,resultado)}

        <div style={cssBotoes}>
          {Btn('AC',limparMemoria)}
          {Btn('(', () => {addDigitoTela('(')})}
          {Btn(')', () => {addDigitoTela(')')})}
          {Btn('/', () => {addDigitoTela('/')})}
          {Btn('7', () => {addDigitoTela('7')})}
          {Btn('8', () => {addDigitoTela('8')})}
          {Btn('9', () => {addDigitoTela('9')})}
          {Btn('*', () => {addDigitoTela('*')})}
          {Btn('4', () => {addDigitoTela('4')})}
          {Btn('5', () => {addDigitoTela('5')})}
          {Btn('6', () => {addDigitoTela('6')})}
          {Btn('-', () => {addDigitoTela('-')})}
          {Btn('1', () => {addDigitoTela('1')})}
          {Btn('2', () => {addDigitoTela('2')})}
          {Btn('3', () => {addDigitoTela('3')})}
          {Btn('+', () => {addDigitoTela('+')})}
          {Btn('0', () => {addDigitoTela('0')})}
          {Btn('.', () => {addDigitoTela('.')})}
          {Btn('<', () => {operacao('bs')})}
          {Btn('=', () => {operacao('=')})}
        </div>
      </div>
    </>
  );
}

export default App;
