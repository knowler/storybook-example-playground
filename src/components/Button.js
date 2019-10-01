/* @jsx jsx */
import { jsx } from 'theme-ui';

export const Button = ({ children, iconBefore, iconAfter, ...props }) => (
  <button
    sx={{
      bg: 'green',
      border: 0,
      borderRadius: '0.125rem',
      color: 'blue',
      display: 'flex',
      fontFamily: 'sans',
      fontWeight: 600,
      fontSize: 1,
      alignItems: 'center',
      lineHeight: 1,
      px: 3,
      py: 2,
    }}
    {...props}
  >
    {iconBefore && (
      <span sx={{ mr: 1, position: 'relative', top: '1px' }}>
        <img
          src={`https://icon.now.sh/${iconBefore}/12/046`}
          alt={iconBefore}
        />
      </span>
    )}
    <span>{children}</span>
    {iconAfter && (
      <span sx={{ ml: 1, position: 'relative', top: '1px' }}>
        <img src={`https://icon.now.sh/${iconAfter}/12/046`} alt={iconAfter} />
      </span>
    )}
  </button>
);
