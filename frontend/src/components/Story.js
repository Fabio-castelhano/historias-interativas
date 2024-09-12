// src/components/Story.js
import React from 'react';

const Story = ({ text, choices }) => {
    return (
        <div>
            <p>{text}</p>
            <div>
                {choices.map((choice, index) => (
                    <button key={index} onClick={() => choice.action()}>
                        {choice.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Story;
