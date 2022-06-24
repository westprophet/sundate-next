/**
 * Created by westp on 08.05.2022
 */

import React from 'react';
import s from './LinkButton.module.scss';
import cn from 'classnames';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function LinkButton({ className, title }: ILinkButtonProps) {
  return (
    <Button
      className={cn(s.LinkButton, className)}
      endIcon={<ArrowForwardIcon />}
    >
      {title}
    </Button>
  );
}

LinkButton.defaultProps = {
  className: '',
};

interface ILinkButtonProps {
  className?: string;
  title: string;
}
