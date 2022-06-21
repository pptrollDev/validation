import React from 'react';

export interface IModal {
  isVisible: boolean;
  children: React.ReactNode;
  onClick: (id: string) => void;
}
