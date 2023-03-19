import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="NotFoundPage">
      <h1>ページが見つかりません</h1>
      <p>
        お探しのページは見つかりませんでした。以下のボタンからトップページに戻ることができます。
      </p>
      <button onClick={goBack}>戻る</button>
    </div>
  );
};

export default NotFoundPage;
