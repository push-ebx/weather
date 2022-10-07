import React, {useEffect, useState} from 'react';
import styles from './index.module.css'

const InputLine = ({defaultCity, setCityCallback, weather}) => {
  const [city, setCity] = useState('')
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setCity(defaultCity)
    setInputValue(defaultCity)
  }, [])

  useEffect(() => {
    setCityCallback(city)
  }, [city])

  const handleDownKey = (e) => {
    let e_length = e.target.value.length
    if ((e.key === 'Backspace' || e.key === 'Delete') && e_length) e_length--
    e.target.style.width = ((e_length + 1) * 15 + 50) + 'px';
    (e.key === 'Enter' || e.code === 'NumpadEnter') && setCity(e.target.value)
  }

  const handleUpKey = (e) => {
    if ((e.key === 'Backspace' || e.key === 'Delete')) {
      e.target.style.width = ((e.target.value.length + 1) * 15 + 50) + 'px';
    }
  }

  return (
      <div>
        Right now in <input
          className={styles.input}
          onKeyDown={handleDownKey}
          onKeyUp={handleUpKey}
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
      />, {weather}
      </div>
  );
};

export default InputLine;