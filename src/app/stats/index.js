import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Stats from './stats';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    user: state.account.player
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
  };
};

const StatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);

export default StatsContainer;
