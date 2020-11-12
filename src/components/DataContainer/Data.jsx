import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import Header from '../Header/Header.component';
import './Data.styles.css';

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
            <Header />
          )
        }
    }

    return displayData()
};

export default graphql(GET_DATA)(DataFetch);