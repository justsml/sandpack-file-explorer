import { SandpackFiles } from '@codesandbox/sandpack-react';
import { DropOptions } from '@minoru/react-dnd-treeview';
import React, { FC, PropsWithChildren } from 'react';

type Item = {
    children?: Item[];
    data: {
        path: string;
    };
    droppable: boolean;
    id: string;
    parent: string;
    text: string;
};

declare const useSandpackFiles: () => {
    addFile: (pathOrFiles: Record<string, string> | SandpackFiles, code?: string | undefined) => Promise<void>;
    buildPath: (item: Item, arr: Item[]) => string;
    deleteFile: (file: string | string[]) => Promise<void>;
    moveFiles: (fileMap: Record<string, string>) => void;
    onFileMoved: ({ node, newTree, }: {
        newTree: Item[];
        node: DropOptions<{
            path: string;
        }>;
    }) => Promise<void>;
    openDirs: string[];
    setOpenDirs: React.Dispatch<React.SetStateAction<string[]>>;
    setTreeData: React.Dispatch<React.SetStateAction<any[]>>;
    treeData: any[];
};
declare const SandpackFilesProvider: FC<PropsWithChildren & {
    onMoveFile?: (fileMap: Record<string, string>) => void;
}>;

declare const SandpackFileTree: () => JSX.Element;
type Props = {
    onMoveFile?: ((fileMap: Record<string, string>) => void) | undefined;
};
declare const SandpackFileExplorer: (props: Props) => JSX.Element;

export { SandpackFileExplorer, SandpackFileTree, SandpackFilesProvider, useSandpackFiles };
