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
        console.log(data)
        if(data.loading) {
            return (
                <div class="empty"><p>Loading Details...</p></div>
            )
        } else {
          return (
            <div class="main-container">
              <Header />
              <div class="content-container">
                <Content />
              </div>
            </div>
          )
        }
    }

    return displayData()
};

export default graphql(GET_DATA)(DataFetch);