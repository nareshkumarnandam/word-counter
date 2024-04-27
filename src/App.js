import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [paraCount, setParaCount] = useState(0);

  const countHandler = () => {
    const words = text.split(/\s+/).filter((word) => word !== '');
    const characters = text.length;
    const paras = text.split('\n').filter((para) => para.trim() !== '').length;
    setWordCount(words.length);
    setCharCount(characters);
    setParaCount(paras);
  }

  const clearText = () => {
    setText('');
    setWordCount(0);
    setCharCount(0);
    setParaCount(0);
  }

  return (
    <div className='App'>
      <h1>Word Counter</h1>
      <textarea value={text} placeholder='Enter your text here...' onChange={(e) => setText(e.target.value)} />
      <div>
        <p>Words: {wordCount}</p>
        <p>Characters: {charCount} </p>
        <p>Paras: {paraCount} </p>
        <button onClick={countHandler} >Count</button>
        <button onClick={clearText} >Clear</button>
      </div>
    </div>
  )
}

export default App