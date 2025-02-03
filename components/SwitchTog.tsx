"use client";

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: '2.438rem', // 39px for mobile/tablet (50% of original)
  height: '1.188rem', // 19px for mobile/tablet (50% of original)
  padding: 0,
  '@media (min-width: 1024px)': {
    width: '3.9rem', // 62.4px (80% of original 78px)
    height: '1.9rem', // 30.4px (80% of original 38px)
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '@media (min-width: 1024px)': {
      margin: 3,
    },
    '&.Mui-checked': {
      transform: 'translateX(20px)', // for mobile/tablet
      '@media (min-width: 1024px)': {
        transform: 'translateX(32px)', // 80% of original 40px
      },
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 15, // for mobile/tablet
    height: 15, // for mobile/tablet
    '@media (min-width: 1024px)': {
      width: 24, // 80% of original 30px
      height: 24, // 80% of original 30px
    },
    fontFamily: 'var(--font-work-sans)',
    fontWeight: 200,
  },
  '& .MuiSwitch-track': {
    borderRadius: 19, // for mobile/tablet
    '@media (min-width: 1024px)': {
      borderRadius: 30.4 / 2, // 80% of original
    },
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const SwitchTog = ({ onToggle }: { onToggle: (checked: boolean) => void }) => {
  return (
    <StyledSwitch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      onChange={(e) => onToggle(e.target.checked)}
    />
  );
};

export default SwitchTog;