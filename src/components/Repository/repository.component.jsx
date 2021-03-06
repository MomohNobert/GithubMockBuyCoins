import RepositoryItem from '../RepositoryItem/RepositoryItem.component';
import './repository.styles.css';

const Repository = ({ githubData }) => {
    const repos = githubData.repositories.nodes;
    return (
        <div className="repository-container">
            <div className="repository-content-container">
                <input className="repository-content-input" placeholder="Find a repository..." />
            </div>
            <hr className="repository-container-divider" />
            <p className="repository-container-p">20 results for public repositories</p>
            <br />
            {
                repos.map(repo => {
                    return (
                        <RepositoryItem key={repo.id} repo={repo} />
                    )
                })
            }
        </div>
    )
}

export default Repository;