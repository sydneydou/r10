import React, {Component} from 'react';
import {createFave, deleteFave, queryFaves} from '../../config/models';

const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }

  getFavedSessionIds = async () => {
    const savedFaves = await queryFaves();
    const faveIds = savedFaves.map(fave => fave[0]);
    this.setState({faveIds});
  };

  addFaveSession = async sessionId => {
    try {
      console.log('adding fave');
      const newFave = await createFave(sessionId);
      this.setState({faveIds: [...this.state.faveIds, newFave]});
    } catch (error) {
      return error;
    }
  };

  removeFaveSession = async sessionId => {
    try {
      console.log('removing fave');
      await deleteFave(sessionId);
      this.getFavedSessionIds();
    } catch (error) {
      throw error;
    }
  };

  componentDidMount() {
    this.getFavedSessionIds();
  }

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export {FavesProvider};
export default FavesContext;
