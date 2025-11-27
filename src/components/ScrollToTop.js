'use client';

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button id="to-top" onClick={handleClick}>
      &#9650;
    </button>
  );
}
