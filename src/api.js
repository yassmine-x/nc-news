import axios from "axios";

export const fetchArticles = (topic) => {
  return axios
    .get(`https://yassmine-app.herokuapp.com/api/articles`, {
      params: { topic: topic },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://yassmine-app.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

export const fetchSingleArticle = (article_id) => {
  return axios
    .get(`https://yassmine-app.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};

export const patchVotes = (article_id) => {
  return axios
    .patch(`https://yassmine-app.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then(({ data }) => {
      return data;
    });
};

export const patchDownVotes = (article_id) => {
  return axios
    .patch(`https://yassmine-app.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: -1,
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchComments = (article_id) => {
  return axios
    .get(
      `https://yassmine-app.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};
