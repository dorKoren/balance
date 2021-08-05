import { useEffect, useState } from "react";

const useKeyDown = (targetKey: string): [boolean, Function] => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  const downHandler = (e: KeyboardEvent): void => {
    if (e.key.toLowerCase() === targetKey) {
      setKeyPressed(true);
      // e.preventDefault();
    }
  };

  const resetKey = () => setKeyPressed(false);

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmountkeyPressed

  return [keyPressed, resetKey];
};

export { useKeyDown };
