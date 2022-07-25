import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

//компонент обертка для того что бы исопльзовать портал
export default function ClientOnlyPortal({ children, selector }: Props) {
  const ref = useRef<Element | null | undefined>();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
interface Props {
  children: any;
  selector: string;
}
