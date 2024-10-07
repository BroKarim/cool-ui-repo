import { useEffect, useState } from "react";
import { ShikiMagicMove } from "shiki-magic-move/react";
import { getHighlighter } from "shiki";

import "shiki-magic-move/dist/style.css";

function ShikiMove() {
  const [code, setCode] = useState(`const hello = 'world'`);
  const [highlighter, setHighlighter] = useState(null);

  useEffect(() => {
    async function initializeHighlighter() {
      const highlighter = await getHighlighter({
        themes: ["nord"],
        langs: ["javascript", "typescript"],
      });
      setHighlighter(highlighter);
    }
    initializeHighlighter();
  }, []);

  function animate() {
    setCode(`
    const pizza = 'delicious';
    const isHungry = true;

    if (isHungry) {
      order(pizza);
    } else {
      console.log('Keep coding!');
    }
  `);
  }

  return (
    <div className="h-[100vh] w-[1400px] flex items-center justify-center">
      {highlighter && (
        <>
          <div className="gap-y-7 flex flex-col items-center justify-center">
            <ShikiMagicMove lang="ts" theme="nord" highlighter={highlighter} code={code} options={{ duration: 800, stagger: 0.3, lineNumbers: true }} />
            <button onClick={animate}>Animate</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShikiMove;
