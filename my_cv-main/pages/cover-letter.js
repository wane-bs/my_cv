import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import { useState } from "react";

const CoverLetter = ({ dataEn, dataVi }) => {
  const [lang, setLang] = useState("vi");
  const data = lang === "vi" ? dataVi : dataEn;
  const { frontmatter, mdxContent } = data;
  const { title, description } = frontmatter;

  return (
    <Base title={title} description={description}>
      <section className="section">
        <div className="container">
          <div className="flex justify-end mb-4">
            <button 
              onClick={() => setLang(lang === "vi" ? "en" : "vi")}
              className="btn btn-outline-primary btn-sm"
            >
              {lang === 'vi' ? 'English' : 'Tiếng Việt'}
            </button>
          </div>
          {markdownify(title, "h1", "h2 mb-8 text-center")}
          <div className="content prose mx-auto dark:prose-invert">
            <MDXRemote {...mdxContent} />
          </div>
        </div>
      </section>
    </Base>
  );
};

export const getStaticProps = async () => {
  const dataEn = await getListPage("content/cover-letter.en.md");
  const dataVi = await getListPage("content/cover-letter.vi.md");

  return {
    props: {
      dataEn,
      dataVi,
    },
  };
};

export default CoverLetter;
