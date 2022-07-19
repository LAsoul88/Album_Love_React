import Search from './Search';
import Comments from './Comments';

import './HomeContainer.scss';

const HomeContainer = () => {
  return (
    <div className="HomeContainer">
      <Search className="HomeContainer_search" />
      <Comments className="HomeContainer_comments" />
    </div>
  )
}

export default HomeContainer;