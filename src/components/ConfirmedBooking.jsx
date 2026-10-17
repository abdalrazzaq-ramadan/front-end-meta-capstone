import { useState } from "react";
import Button from "./Button";
export default function ConfirmedBooking() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setIsOpen(false)}
    >
      <main
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmation-title"
        className="relative w-full max-w-md rounded-card bg-surface p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close confirmation"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-xl"
        >
          &times;
        </button>

        <h1 id="confirmation-title" className="mb-3 text-xl font-bold">
          Your booking has been confirmed!
        </h1>

        <p>
          We look forward to seeing you at Little Lemon.
        </p>
        <div className="my-2.5">
          <Button onclick = {() => setIsOpen (false)} className={"w-full"} >Ok</Button>
        </div>
        
      </main>
    </div>
  );
}