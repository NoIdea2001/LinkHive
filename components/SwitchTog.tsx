"use client";

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: '4.875rem', // 78px
  height: '2.375rem', // 38px
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 4,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(40px)', // Adjusted for new width
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
    width: 30,
    height: 30,
    fontFamily: 'var(--font-work-sans)', // Add font family
    fontWeight: 200, // Use available font weight
  },
  '& .MuiSwitch-track': {
    borderRadius: 38 / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Changed to white with 5% opacity
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