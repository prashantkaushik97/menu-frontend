import { useState, useRef } from 'react';

export default function OrderButton() {
    const [holdTime, setHoldTime] = useState(0);
    const timeoutRef = useRef(null);

    const handleMouseDown = () => {
        timeoutRef.current = setTimeout(() => {
            setHoldTime(holdTime + 1);
            handleMouseDown();
        }, 1000);
    };

    const handleMouseUp = () => {
        clearTimeout(timeoutRef.current);
        setHoldTime(0);
    };

    return (
        <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
        >
            {holdTime > 0 ? `Held for ${holdTime} second${holdTime === 1 ? '' : 's'}` : 'Hold me!'}
        </button>
    );
}