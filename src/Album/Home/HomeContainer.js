import Search from './Search';
import Comments from './Comments';

import './HomeContainer.scss';

const HomeContainer = () => {
  return (
    <div className="HomeContainer">
      <div className="HomeContainer_search">
        <Search />
      </div>
      {/* <div className="HomeContainer_comments">
        <Comments />
      </div> */}
    </div>
  )
}

export default HomeContainer;