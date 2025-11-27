export default function Separator({ variant = 'top' }) {
  const paths = {
    top: "M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z",
    bottom: "M0,100 C300,0 900,100 1200,0 L1200,100 L0,100 Z"
  };

  return (
    <svg className="separator" viewBox="0 0 1200 100" preserveAspectRatio="none">
      <path d={paths[variant]} fill="var(--bg-light)" />
    </svg>
  );
}
