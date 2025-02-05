import type { ComponentProps, FC } from 'react';
import { Floating } from '../Floating';

export const DropdownTrigger: FC<ComponentProps<'div'>> = ({ children }) => {
  return <Floating.Trigger>{children}</Floating.Trigger>;
};
