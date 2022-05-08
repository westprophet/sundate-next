/**
 * Created by westp on 07.05.2022
 */

import React from 'react';
import s from './CustomButton.module.scss';
import cn from 'classnames';

import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CustomButton(p: ICustomButtonProps) {
  return (
    <Button
      className={cn(s.CustomButton, p.className)}
      endIcon={<ArrowForwardIcon />}
    >
      details
    </Button>
  );
}

CustomButton.defaultProps = {
  className: '',
};

interface ICustomButtonProps {
  className?: string;
}
