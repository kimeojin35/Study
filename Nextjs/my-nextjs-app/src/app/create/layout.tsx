import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <form>
      <h2>Create</h2>
      {props.children}
    </form>
  );
}