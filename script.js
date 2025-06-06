const quotes = [
  "A journey of a thousand miles begins with a single step.",
  "Patience is the companion of wisdom.",
  "You are never too old to set another goal or to dream a new dream.",
  "Courage is not the absence of fear; it is the conquest of it.",
  "Great things never come from comfort zones.",
  "Each day is a fresh start.",
  "Push yourself, because no one else is going to do it for you.",
  "An exciting opportunity lies ahead of you.",
  "If you think nobody cares if you're alive, try missing a couple car payments.",
  "Luck is smiling upon you."
];
const quoteEl = document.querySelector('#quote');
const quoteTextEl = document.querySelector('#quoteText');
const luckyEl = document.querySelector('#lucky');
document.querySelector('#quoteBtn').addEventListener('click', () => {
  quoteEl.classList.remove('opacity-100');
  quoteEl.classList.add('opacity-0');
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteTextEl.textContent = quotes[randomIndex];
    const numbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 69 + 1)).join(' ');
    luckyEl.textContent = `🍀 Lucky Numbers: ${numbers}`;
    setTimeout(() => {
      quoteEl.classList.remove('opacity-0');
      quoteEl.classList.add('opacity-100');
    }, 50);
  }, 1000);
});