import React, { useState } from 'react';
import './InputPage.css';

const InputPage = () => {
  const [birthInfo, setBirthInfo] = useState({ year: '', month: '', day: '', hour: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthInfo({ ...birthInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate and calculate Bazi fortune
    // Redirect to ResultPage with results
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
