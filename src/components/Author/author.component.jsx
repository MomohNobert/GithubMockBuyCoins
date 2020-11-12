import './author.styles.css';

const Author = ({ githubData }) => {
    const {avatarUrl, bio, login, name } = githubData;
    const newAvatarUrl = avatarUrl.replace("s=10", "s=250");
    return (
        <div className="author-container">
            <div className="author-content-container">
                <div className="author-image-container">
                    <img src={newAvatarUrl} alt="author" />
                </div>
                <div className="author-identity-container">
                    <h3 className="author-identity__name">{name}</h3>
                    <p  className="author-identity__login">{login}</p>
                </div>
                <div className="author-bio-container">
                    <p  className="author-identity__bio">{bio}</p>
                </div>
            </div>
        </div>
    )
}

export default Author;