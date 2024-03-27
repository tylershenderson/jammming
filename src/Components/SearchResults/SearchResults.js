import React from "react";
import styles from './SearchResults.module.css'
import Tracklist from "../Tracklist/Tracklist";
function SearchResults(props) {
    return (
        <div className={styles.SearchResults}>
        {/* <!-- 5. pass search results to tracklist component. it will turn object array into li items displayed on the page. OUTSOURCED BECAUSE WE USE IT ON 2 COMPONENTS --> */}
        <Tracklist userSearchResults={props.userSearchResults} isRemoval={false} onAdd={props.onAdd}/>
      </div>
        );
}

export default SearchResults;