declare global {
    interface Window {
      Telegram: {
        WebApp: TelegramWebApp;
      };
    }
  }
  
  interface TelegramWebApp {
    initDataUnsafe: { user?: { id: number; username?: string; first_name?: string } };
    MainButton: { text: string; show: () => void };
    setBackgroundColor: (color: string) => void;
    ready: () => void;
  }
  