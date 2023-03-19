import React, { useState } from 'react';
import './InputPage.css';

const InputPage = () => {
  const [birthInfo, setBirthInfo] = useState({ year: '', month: '', day: '', hour: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthInfo({ ...birthInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const [birthYear, birthMonth, birthDay, birthHour] = e.target;
    const { name, value } = e.target as { name: string };

    console.log('AAAAA', name, value);
    // Validate and calculate Bazi fortune
    // Redirect to ResultPage with results
    const luckLevels = ['非常に良い', '良い', '普通', '悪い', '非常に悪い'];

    const adviceList = [
      '注意して行動する',
      'チャレンジを試みる',
      '忍耐が大切',
      '新しい出会いを楽しむ',
      '変化に適応する',
      '自分を信じて進む',
      '計画を立てて行動する',
      '周りの意見を聞く',
      'リラックスする時間を作る',
      '目標に向かって努力する',
    ];

    // const totalValue = birthYear + birthMonth + birthDay + birthHour;
    // const luckIndex = totalValue % luckLevels.length;
    // const adviceIndex = totalValue % adviceList.length;

    // return { luck: luckLevels[luckIndex], advice: adviceList[adviceIndex] };
  };

  return (
    <div className="InputPage">
      <h1>私の四柱推命</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="year">年: </label>
        <input type="number" id="year" name="year" value={birthInfo.year} onChange={handleChange} />
        <br />
        <label htmlFor="month">月: </label>
        <input
          type="number"
          id="month"
          name="month"
          value={birthInfo.month}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="day">日: </label>
        <input type="number" id="day" name="day" value={birthInfo.day} onChange={handleChange} />
        <br />
        <label htmlFor="hour">時: </label>
        <input type="number" id="hour" name="hour" value={birthInfo.hour} onChange={handleChange} />
        <br />
        <button type="submit">占う</button>
      </form>
    </div>
  );
};

export default InputPage;
