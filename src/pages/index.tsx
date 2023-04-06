import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const [embedCode, setEmbedCode] = React.useState("");

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmbedCode(event.target.value);
  };

  return (
    <main style={{ overflow: "hidden" }}>
      <div style={{ maxWidth: "100%" }}>
        <textarea
          placeholder="Paste your embed code here"
          value={embedCode}
          onChange={handleCodeChange}
          style={{
            width: "100%",
            height: "200px",
            padding: "12px",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            resize: "vertical",
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "56.25%",
          width: "100%",
          height: "0",
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: embedCode }}
          style={{
            position: "absolute",
            top: 100,
            left: "40%",
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Forkfacts consumer</title>;
