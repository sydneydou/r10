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
    try {
      const savedFaves = await queryFaves();
      const faveIds = savedFaves.map(fave => fave[0]);
      this.setState({faveIds});
    } catch (error) {
      return error;
    }
  };

  addFaveSession = async sessionId => {
    try {
      const newFave = await createFave(sessionId);
      this.setState({faveIds: [...this.state.faveIds, newFave]});
      this.getFavedSessionIds();
    } catch (error) {
      return error;
    }
  };

  removeFaveSession = async sessionId => {
    try {
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
