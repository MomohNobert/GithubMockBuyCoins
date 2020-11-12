import './author.styles.css';

const Author = ({ githubData }) => {
    console.log(githubData)
    return (
        <div className="author-container">
            <div className="author-content-container">
                <div className="author-image-container">
                    <img src="https://avatars3.githubusercontent.com/u/48828858?s=250&u=203020edbcc2d7cf088215829c5061e57344b3a6&v=4" alt="author" />
                </div>
                <div className="author-identity-container">
                    <h3>Momoh Nobert</h3>
                    <p>MomohNobert</p>
                </div>
                <div className="author-bio-container">
                    <p>Hacking and slashing through the web</p>
                </div>
            </div>
        </div>
    )
}

export default Author;