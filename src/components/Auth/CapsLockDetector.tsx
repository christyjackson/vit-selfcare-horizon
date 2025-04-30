
import React, { useState, useEffect } from 'react';

interface CapsLockDetectorProps {
  children: React.ReactNode;
}

const CapsLockDetector: React.FC<CapsLockDetectorProps> = ({ children }) => {
  const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.getModifierState && typeof e.getModifierState === 'function') {
        setIsCapsLockOn(e.getModifierState('CapsLock'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      {children}
      {isCapsLockOn && (
        <div className="caps-lock-warning">
          Caps Lock is on
        </div>
      )}
    </div>
  );
};

export default CapsLockDetector;
