import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagPropsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  size?: 's' | 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}
