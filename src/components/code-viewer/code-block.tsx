import { Highlight, themes } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  className?: string;
}
const CodeBlock = ({ code, className = "" }: CodeBlockProps) => {
  return (
    <Highlight theme={themes.github} code={code} language="jsx">
      {({ className: prismClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${prismClassName} ${className}`.trim()} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;