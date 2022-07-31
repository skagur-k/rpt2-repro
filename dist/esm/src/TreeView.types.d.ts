import React from 'react';
export interface TreeViewProps {
    children: React.ReactNode;
    title?: string;
}
export interface BaseProps {
    name: string;
}
export interface FolderProps extends BaseProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onToggle?: () => void;
}
export interface FileProps extends BaseProps {
    active?: boolean;
    type?: 'lambda';
    isSelected?: boolean;
    icon?: React.ReactElement;
}
