import React, { useState } from 'react';
import './App.css';

function App() {
  // 定義state來存儲輸入的值
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);
  
  const handleButtonClick = async () => {
    try {
        // 打 POST 請求
        let response = await fetch('http://127.0.0.1:5000/get_result', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // 假設你要傳的資料是 { data: 'example' }
            body: JSON.stringify({ text: inputValue }) 
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let data = await response.json();
        // 將回傳值設到 state 中
        setResponseData(data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error.message);
    }
};
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
   
  return (
    <div className="App">
      <h2>AI 法律摘要</h2>

    <div>
    <div className="container">
        <div className="inputSection">
          <textarea type="text" id="inputField" className="inputBox" value={inputValue} onChange={handleInputChange} />
        </div>
        
        <div className="outputSection">
          <div className="outputBox">{responseData && <div>Response: {JSON.stringify(responseData)}</div>}</div>
        </div>
      </div>



    </div>
    <button onClick={handleButtonClick}>轉化</button>
    </div>
  );
}

export default App;
