import './mainContent.styles.css';

import Author from '../Author/author.component';
import Repository from '../Repository/repository.component';

const MainContent = () => {
    return (
        <div className="main-content-container">
            <Author />
            <Repository />
        </div>
    )
}

export default MainContent;