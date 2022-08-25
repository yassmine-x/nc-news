import { fetchSingleArticle } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

export default function SingleArticleWithComments() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchSingleArticle(article_id).then((articleObject) => {
      setArticle(articleObject);
    });
  }, [article_id]);

  return (
    <div>
      <h2>
        <ul>
          <li className="no-bullet">
            <h2 className="article-title">{article.title}</h2>
          </li>
          <li className="no-bullet">
            <h3 className="author-name">{article.author}</h3>
          </li>
          <li className="no-bullet">{article.body}</li>
          <li className="no-bullet comments">
            comments:
            {article.comment_count}
          </li>
        </ul>
      </h2>
      <Comments article_id={article_id} />
    </div>
  );
}