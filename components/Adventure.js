import React, { useState } from 'react';

const Adventure = ({ story }) => {
  const [currentChapter, setCurrentChapter] = useState(
    story.chapters.find((chapter) => chapter.id === "1")
  );

  const handleChoice = (nextId) => {
    const nextChapter = story.chapters.find((chapter) => chapter.id === nextId);
    setCurrentChapter(nextChapter);
  };

  return (
    <div style={{ fontFamily: 'Georgia, serif', lineHeight: '1.8', padding: '20px', background: '#fdf4e3' }}>
      <h1 style={{ textAlign: 'center', color: '#2a6f97' }}>{story.title}</h1>
      <p style={{ fontStyle: 'italic', textAlign: 'center' }}>By {story.author}</p>
      <div style={{ maxWidth: '800px', margin: '20px auto', color: '#444', textAlign: 'justify' }}>
        <h2>{currentChapter.headline}</h2>
        <p>{currentChapter.body}</p>
        {currentChapter.choices && (
          <div>
            <h3>What will you do?</h3>
            {currentChapter.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice.next)}
                style={{
                  display: 'block',
                  margin: '10px 0',
                  padding: '10px 15px',
                  background: '#2a6f97',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}
        {currentChapter.ending && (
          <div>
            <h3>The End</h3>
            <p>{currentChapter.ending}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adventure