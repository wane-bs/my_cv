import Base from "@layouts/Baseof";
import { getSinglePage } from "@lib/contentParser";
import parseMDX from "@lib/utils/mdxParser";
import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ProjectSingle = ({ frontmatter, content, mdxContent }) => {
  const { title, image, categories, tags, date } = frontmatter;

  return (
    <Base title={title}>
      <section className="section">
        <div className="container">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline">
              <FaArrowLeft /> Quay lại trang chủ
            </Link>
          </div>
          
          <article className="row justify-center">
            <div className="md:col-10 text-center">
              {markdownify(title, "h1", "h2 mb-4")}
              <ul className="mb-8 flex flex-wrap items-center justify-center space-x-4 text-light dark:text-darkmode-light">
                <li>
                  <span className="font-primary text-sm">
                    {date && new Date(date).toLocaleDateString()}
                  </span>
                </li>
                {categories && categories.length > 0 && (
                  <li>
                    <span className="font-primary text-sm">
                      {categories.join(", ")}
                    </span>
                  </li>
                )}
              </ul>
              
              {image && (
                <div className="mb-8">
                  <Image
                    src={image}
                    height={500}
                    width={1000}
                    alt={title}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>

            <div className="md:col-10">
              <div className="content mb-16 text-left dark:prose-invert">
                <MDXRemote {...mdxContent} />
              </div>
              
              {tags && tags.length > 0 && (
                <div className="mb-8 flex flex-wrap gap-2">
                  <strong className="mr-2 flex items-center">Tags:</strong>
                  {tags.map((tag, i) => (
                    <span key={i} className="rounded bg-theme-light px-3 py-1 text-sm dark:bg-darkmode-theme-light">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        </div>
      </section>
    </Base>
  );
};

export default ProjectSingle;

export const getStaticPaths = () => {
  const allProjects = getSinglePage("content/projects");
  const paths = allProjects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const allProjects = getSinglePage("content/projects");
  const project = allProjects.find((p) => p.slug === slug);
  const mdxContent = await parseMDX(project.content);

  return {
    props: {
      frontmatter: project.frontmatter,
      content: project.content,
      mdxContent: mdxContent,
    },
  };
};
