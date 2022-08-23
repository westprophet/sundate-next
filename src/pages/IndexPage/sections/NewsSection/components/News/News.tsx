/**
 * Created by westp on 07.05.2022
 */

import React from "react";
import s from "./News.module.scss";
import cn from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import useBreakpoint from "../../../../../../hooks/useBreakpoint";
import Link from "next/link";
import { Button } from "@mui/material";

const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {}
  },
  hidden: {
    opacity: 0,
    y: "-30%"
  }
};

export default function News({ className, title, children, cover, date }: INewsProps) {
  const b = useBreakpoint();
  return (
    <motion.div variants={variants} className={cn(s.News, className)}>
      <div className={cn(s.cover)}>
        <Image
          src={cover}
          layout={"responsive"}
          objectFit="cover"
          placeholder="blur"
          width="100%"
          height="100%"
        />
      </div>
      <h3 className={cn(s.title)}>{title}</h3>
      <h4>{date}</h4>
      <p className={cn(s.description)}>{children.slice(0, 100)}...</p>
      <Link href="/news/0">
        <Button className={cn(s.readMore)}>
          Read More
        </Button>
      </Link>
    </motion.div>
  );
}

News.defaultProps = {
  className: ""
};

interface INewsProps {
  className?: string;
  title: string;
  cover: any;
  date: string;
  children: string;
}
