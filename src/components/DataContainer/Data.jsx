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
          id
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
          const githubData = data.user;
          return (
            <div className="main-container">
              <Header githubData={githubData} />
              <div className="content-container">
                <Content githubData={githubData} />
              </div>
            </div>
          )
        }
    }

    return displayData()
};

export default graphql(GET_DATA)(DataFetch);