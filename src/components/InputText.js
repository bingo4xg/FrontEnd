import React, {useEffect} from "react";

function InputText({text, inputValue, handleInputFocus, handleInputChange, handleEnterPress, isModalOpen}) {

    useEffect(() => {
        const inputElement = document.querySelector('input');
        if (inputElement) {
            inputElement.disabled = isModalOpen;
        }
    }, [isModalOpen]);

    const renderHighlightedText = () => {
        let inputChars = Array.from(inputValue);

        return Array.from(text).map((char, index) => {
            if (index < inputChars.length) {
                if (inputChars[index] === char) {
                    return (
                        <span key={index} className="green-text">{char}</span>
                    );
                } else {
                    if (char === ' ') {
                        return (
                            <span key={index} className="red-text" style={{ fontSize: '12.5px'}}>*</span>
                        );
                    } else {
                        return (
                            <span key={index} className="red-text">{char}</span>
                        );
                    }
                }
            } else {
                return <span key={index}>{char}</span>;
            }
        });
    }

    return (
        <div className={"text-input-container"}>
            <p className={"current-text"}>{renderHighlightedText()}</p>
            <input
                className={"text-input"}
                type="text"
                placeholder={"Typing here..."}
                value={inputValue}
                onFocus={handleInputFocus}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleEnterPress();
                }}
            />
        </div>
    );
}

export default InputText;