import { gql } from 'apollo-angular';

const GET_ARTICLES = gql`
  query GetArticleList($pageNumber: Int) {
    articles(pageNumber: $pageNumber) {
      coverImageUrl
      title
      content
      description
      subtitle
      url
    }
  }
`;

const GET_ARTICLES_DETAIL = gql`
  query GetArticleDetail($url: String!) {
    article(url: $url) {
      coverImageUrl
      title
      content
      description
      subtitle
      url
    }
  }
`;

export { GET_ARTICLES, GET_ARTICLES_DETAIL };
