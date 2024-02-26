import Showdown from "showdown";

type Props = {
  content: string;
};

export const Markdown = (props: Props) => {
  const converter = new Showdown.Converter({
    extensions: [...bindings, supExt],
  });
  const postHtml = converter.makeHtml(props.content);
  return <div dangerouslySetInnerHTML={{ __html: postHtml }} />;
};

const classMap: Record<string, string> = {
  code: "font-monospace",
};

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
