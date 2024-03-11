import { useState } from 'react';
import css from './TruncatedText.module.css';
import { Button } from '@mui/material';

export default function TruncatedText({ originalText, maxLength }) {
  const [showFullText, setShowFullText] = useState(false);

  const shouldShowButton = originalText.length > maxLength;

  const truncatedText = showFullText
    ? originalText
    : originalText.slice(0, maxLength);

  return (
    <div>
      <p>{truncatedText}</p>
      {shouldShowButton && (
        <Button
          className={css.button}
          onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? 'Hide' : 'Show more'}
        </Button>
      )}
    </div>
  );
}
