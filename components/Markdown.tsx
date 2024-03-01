"use client";

import Showdown from "showdown";
import "highlight.js/styles/vs2015.css";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import plaintext from "highlight.js/lib/languages/plaintext";
import diff from "highlight.js/lib/languages/diff";
import { useEffect } from "react";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("diff", diff);
hljs.configure({
  languages: ["typescript", "plaintext", "diff"],
});

type Props = {
  content: string;
};

const classMap: Record<string, string> = {};

const bindings = Object.keys(classMap).map((key) => ({
  type: "output",
  regex: new RegExp(`<${key}(.*)>`, "g"),
  replace: `<${key} class="${classMap[key]}" $1>`,
}));

const supExt = {
  type: "output",
  regex: /\$\^\{([^\s]+)\}\$/g, // $^{1}$
  replace: "<sup>$1</sup>",
};

export const Markdown = (props: Props) => {
  const converter = new Showdown.Converter({
    extensions: [...bindings, supExt],
  });
  const postHtml = converter.makeHtml(props.content);

  useEffect(() => hljs.highlightAll(), []);
  return <div dangerouslySetInnerHTML={{ __html: postHtml }} />;
};
