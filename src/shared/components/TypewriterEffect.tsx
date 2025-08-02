import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
  speed?: number;
  pauseTime?: number;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  speed = 150,
  pauseTime = 2000,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (!isDeleting) {
      // Digitando
      if (currentIndex < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        // Pausa antes de deletar
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        return () => clearTimeout(timer);
      }
    } else {
      // Deletando
      if (currentIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        }, speed / 2); // Deleta mais rápido
        return () => clearTimeout(timer);
      } else {
        // Próxima palavra
        setIsDeleting(false);
        setCurrentWordIndex(prev => (prev + 1) % words.length);
      }
    }
  }, [currentIndex, currentWordIndex, isDeleting, words, speed, pauseTime]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterEffect; 