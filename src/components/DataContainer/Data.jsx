import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import './Data.styles.css';

import Header from '../Header/Header.component';
import Content from '../Content/content.component';

const GET_DATA =  gql`
  query {
  user(login: "MomohNobert") {
    avatarUrl(size: 10)
    bio
    name
    login
    repositories(last: 20) {
      nodes {
        name
        updatedAt
        stargazerCount
        url
        forkCount
        description
        languages(first: 1) {
          nodes {
            name
            color
          }
        }
      }
    }
  }
}
`

const DataFetch = (props) => {
    const displayData = () => {
        let data = props.data;
        if(data.loading) {
            return (
                <div className="empty"><p>Loading Details...</p></div>
            )
        } else {
          const { avatarUrl, bio, name, login } = data.user;
          const repos = data.user.repositories.nodes;
          console.log(repos);
          console.log(avatarUrl, bio, name, login);
          return (
            <div className="main-container">
              <Header />
              <div className="content-container">
                <Content />
              </div>
            </div>
          )
        }
    }

    return displayData()
};

export default graphql(GET_DATA)(DataFetch);