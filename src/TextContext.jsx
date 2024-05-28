import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const TextContext = createContext();

const TextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : [],
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const addText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <TextContext.Provider value={{ texts, addText }}>
      {children}
    </TextContext.Provider>
  );
};

TextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TextContext, TextProvider };
