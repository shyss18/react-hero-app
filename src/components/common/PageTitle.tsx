import "../../styles/page-title.css";

interface PageTitleProps {
  text: string;
}

const PageTitle = (props: PageTitleProps) => {
  return <div className="page-title">{props.text}</div>;
};

export default PageTitle;
