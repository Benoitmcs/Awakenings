'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ExpandableArticles() {
  const [expanded, setExpanded] = useState(false);

  const olderArticles = [
    {
      href: '/articles/screen-time',
      title: 'Navigating Screen Time: How Digital Habits Shape Mental Health',
    },
    {
      href: '/articles/exercise-nutrition',
      title: 'How Exercise and Nutrition Transform Psychiatry',
    },
  ];

  return (
    <div style={{ marginTop: '1rem', marginBottom: '1rem', textAlign: 'center' }}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="btn"
        style={{ cursor: 'pointer', border: 'none' }}
        aria-expanded={expanded}
      >
        {expanded ? 'Show Less' : 'View Older Articles'}
      </button>

      {expanded && (
        <div
          data-aos="fade-up"
          style={{
            marginTop: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
          }}
        >
          {olderArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="btn"
              style={{
                display: 'block',
                textAlign: 'center',
              }}
            >
              {article.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
