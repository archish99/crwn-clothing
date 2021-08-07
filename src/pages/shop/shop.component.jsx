import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from '../../firebase/firebase.utils';

// import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();

    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');

    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/crwn-db-c7daf/databases/(default)/documents/collections'
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));

    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
