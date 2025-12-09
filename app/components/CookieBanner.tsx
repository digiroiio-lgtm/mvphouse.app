import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = typeof window !== "undefined" && localStorage.getItem("cookieAccepted");
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookieAccepted", "true");
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex flex-col sm:flex-row items-center justify-between text-sm">
      <span>
        We use cookies to enhance your experience, analyze site usage, and show relevant ads. By clicking "Accept All", you consent to our use of cookies.{' '}
        <a href="/privacy.html" className="underline">Privacy Policy</a> | <a href="/cookies.html" className="underline">Cookie Policy</a>
      </span>
      <div className="mt-2 sm:mt-0 flex gap-2">
        <button className="px-3 py-1 rounded border text-gray-700 hover:bg-gray-100" onClick={() => alert('Cookie settings modal açılacak.')}>Cookie Settings</button>
        <button className="px-3 py-1 rounded bg-[#0066FF] text-white font-semibold" onClick={acceptCookies}>Accept All</button>
      </div>
    </div>
  );
}
