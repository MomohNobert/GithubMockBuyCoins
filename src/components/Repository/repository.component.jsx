import './repository.styles.css';

const Repository = ({ githubData }) => {
    console.log(githubData)
    return (
        <div className="repository-container">
            <div className="repository-content-container">
                <input className="repository-content-input" placeholder="Find a repository..." />
            </div>
            <hr className="repository-container-divider" />
            <p className="repository-container-p">20 results for public repositories</p>
        </div>
    )
}

export default Repository;