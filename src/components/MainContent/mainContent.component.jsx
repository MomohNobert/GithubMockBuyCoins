import './mainContent.styles.css';

import Author from '../Author/author.component';
import Repository from '../Repository/repository.component';

const MainContent = ({ githubData }) => {
    return (
        <div className="main-content-container">
            <Author githubData={githubData} />
            <Repository githubData={githubData} />
        </div>
    )
}

export default MainContent;