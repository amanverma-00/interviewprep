import React from 'react';
import Editor, { OnMount, Monaco } from '@monaco-editor/react';
import * as monacoEditor from 'monaco-editor';

// Language mapping for Monaco
const LANGUAGE_MAP: Record<string, string> = {
    'javascript': 'javascript',
    'python': 'python',
    'java': 'java',
    'cpp': 'cpp',
    'c++': 'cpp',
    'c': 'c',
    'typescript': 'typescript',
    'go': 'go',
    'rust': 'rust',
    'ruby': 'ruby',
};

interface CodeEditorProps {
    value: string;
    onChange: (value: string) => void;
    language: string;
    height?: string | number;
    theme?: 'vs-dark' | 'light' | 'hc-black';
    readOnly?: boolean;
    fontSize?: number;
    showMinimap?: boolean;
    showLineNumbers?: boolean;
    wordWrap?: 'on' | 'off' | 'wordWrapColumn' | 'bounded';
    onMount?: OnMount;
    className?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
    value,
    onChange,
    language,
    height = '100%',
    theme = 'vs-dark',
    readOnly = false,
    fontSize = 14,
    showMinimap = false,
    showLineNumbers = true,
    wordWrap = 'on',
    onMount,
    className = '',
}) => {
    const handleEditorDidMount: OnMount = (editor, monaco) => {
        // Add custom keybindings
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
            // Prevent browser save dialog
        });

        // Optional custom mount callback
        if (onMount) {
            onMount(editor, monaco);
        }
    };

    const handleChange = (newValue: string | undefined) => {
        onChange(newValue || '');
    };

    return (
        <div className={`monaco-editor-wrapper ${className}`} style={{ height }}>
            <Editor
                height="100%"
                language={LANGUAGE_MAP[language.toLowerCase()] || 'plaintext'}
                value={value}
                onChange={handleChange}
                theme={theme}
                onMount={handleEditorDidMount}
                options={{
                    fontSize,
                    minimap: { enabled: showMinimap },
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2,
                    wordWrap,
                    lineNumbers: showLineNumbers ? 'on' : 'off',
                    glyphMargin: false,
                    folding: true,
                    lineDecorationsWidth: 10,
                    lineNumbersMinChars: 3,
                    readOnly,
                    renderLineHighlight: 'all',
                    cursorBlinking: 'smooth',
                    cursorSmoothCaretAnimation: 'on',
                    smoothScrolling: true,
                    contextmenu: true,
                    quickSuggestions: true,
                    suggestOnTriggerCharacters: true,
                    acceptSuggestionOnEnter: 'on',
                    bracketPairColorization: { enabled: true },
                }}
            />
        </div>
    );
};

export default CodeEditor;

// Also export types for external use
export type { CodeEditorProps };
