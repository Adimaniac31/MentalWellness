import React,{useState} from 'react';
// import { useHistory } from 'react-router-dom';
import psychiatrist from "../assets/psychiatrist.png";
import send from "../assets/send.png";

const ClassifyPage = () => {
  const [inputText, setInputText] = useState('');
  // const history = useHistory();

  // const handleSendClick = async () => {
  //   try {
  //     // Send the input to the API
  //     const response = await fetch('http://127.0.0.1:5000/predict', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ post_text: inputText }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data from the server');
  //     }

  //     // Parse the JSON response
  //     const result = await response.json();

  //     // Redirect to the result page with the result data
  //     history.push('/result', { result });
  //   } catch (error) {
  //     console.error('Error:', error);
  //     // Handle errors or display an error message to the user
  //   }
  // };
  return (
    <div>
      <div>
        <img src={psychiatrist}></img>
        <span>Hey! How are you feeling today?</span>
      </div>
      <div className=''>
      <div>
        <textarea id="input" rows="10" cols="100" value={inputText}
            onChange={(e) => setInputText(e.target.value)}></textarea>
      </div>
      <div>
        <img src={send}></img>
      </div>
      </div>
    </div>
  )
}

export default ClassifyPage