// App.tsx
import React, { useEffect } from 'react';

// Mock the Telegram object if not running in Telegram environment
if (!window.Telegram) {
  window.Telegram = {
    WebApp: {
      ready: () => console.log("Mock ready"),
      setBackgroundColor: (color: string) => console.log(`Mock setBackgroundColor: ${color}`),
      MainButton: {
        text: "Play Again",
        show: () => console.log("Mock MainButton shown")
      },
      initDataUnsafe: {
        user: { id: 1, username: "testuser", first_name: "Test" }
      }
    }
  };
}

const App: React.FC = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    // Set background color and show main button
    tg.setBackgroundColor("#f3f4f6");
    tg.MainButton.text = "Play Again";
    tg.MainButton.show();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the Telegram Game</h1>
      <button onClick={() => alert("Game logic here!")}>Start Game</button>
    </div>
  );
};

export default App;
