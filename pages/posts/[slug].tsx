import Showdown from "showdown";
import { Content, Page } from "../../components/layout";
import { Card, Header } from "../../components";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Post, posts as data } from "../../data/posts_list";

export const getStaticPaths = (async () => {
  return {
    paths: Object.entries(data).map(([k, _]) => ({ params: { slug: k } })),
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps<{
  post: Post | undefined;
}> = (context) => {
  const slug = context.params ? context.params["slug"] : "";
  const post = typeof slug === "string" ? data[slug] : undefined;
  return { props: { post } };
};

export default function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!post) return <div>Post not found</div>;

  const converter = new Showdown.Converter();
  const postHtml = converter.makeHtml(post.content);
  return (
    <Page>
      <Content>
        <Header
          heading="Practicing Typescript: Generalized Algebraic Data Types"
          actions={{
            right: {
              src: "/assets/icons/home.svg",
              alt: "home icon link",
              href: "/",
            },
            left: {
              src: "/assets/icons/chevron-left.svg",
              alt: "back icon link",
              href: "/posts",
            },
          }}
        />
        <Card>
          <div dangerouslySetInnerHTML={{ __html: postHtml }} />;
        </Card>
      </Content>
    </Page>
  );
}
