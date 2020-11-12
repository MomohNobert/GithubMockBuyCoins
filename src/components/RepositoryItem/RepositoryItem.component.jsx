import './RepositoryItem.styles.css';

const RepositoryItem = ({ repo }) => {
    const month = repo.updatedAt.getUTCMonth() + 1;
    const day = repo.dateObj.getUTCDate();
    console.log(month, day)
    return (
        <div className="repository-item-container">
            <div className="repository-item-header">
                <h3 className="repository-item-header__h3">{repo.name}</h3>
                <button className="repository-item-header__button">
                    <svg className="repository-item-header__svg" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                    <p className="repository-item-header__p">Star</p>
                </button>
            </div>
            <p className="repository-item-content__desc">{repo.description}</p>
            <div className="repository-item-footer">
                {
                    repo.languages.nodes[0] ? (
                        <div className="repository-item-footer__language">
                            <div className="repository-item-footer__language_color" style={{ backgroundColor: `${repo.languages.nodes[0].color}`}} />
                            <p className="repository-item-footer__language_p">{repo.languages.nodes[0].name}</p>
                        </div>
                    )
                    :
                    null
                }
                <div className="repository-item-stars">
                    <div className="repository-item-stars__img">
                        <svg height="16" version="1.1" width="16" aria-hidden="true"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                    </div>
                    <p className="repository-item-stars__count">{repo.stargazerCount}</p>
                </div>
                <div className="repository-item-fork">
                    <div className="repository-item-fork__img">
                        <svg aria-label="fork" version="1.1" width="16" height="16" role="img"><path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                    </div>
                    <p className="repository-item-fork__count">{repo.forkCount}</p>
                </div>
                <div className="repository-item-updated">
                    <p className="repository-item-updated__p">{repo.updatedAt}</p>
                </div>
            </div>
        </div>
    )
};

export default RepositoryItem;