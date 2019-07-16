// src/components/nav/navbar_container.js

import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {dispatchTurnOn} from '../../actions/ui_actions'

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
});
const mdtp = dispatch =>({
  modalOn : (modal)=>dispatch(dispatchTurnOn(modal)),
  logout: ()=>dispatch(logout())

})

export default connect(
  mapStateToProps,
  mdtp
)(NavBar);