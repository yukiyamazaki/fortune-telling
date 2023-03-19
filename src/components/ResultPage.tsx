import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResultPage.css';

// Dummy data, replace with actual Bazi fortune results
const baziFortune = {
  overall: '運勢が良い時期です。',
  wealth: '財運も上昇しています。',
  career: '仕事運も安定しています。',
  love: '恋愛運も良好です。',
};

const ResultPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="ResultPage">
      <h1>占い結果</h1>
      <p>{baziFortune.overall}</p>
      <p>{baziFortune.wealth}</p>
      <p>{baziFortune.career}</p>
      <p>{baziFortune.love}</p>
      <button onClick={goBack}>戻る</button>
    </div>
  );
};

export default ResultPage;
