import App from './App'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

const { changeFirstName, changeLastName } = actions

const putStateToProps = (state) => ({
  firstName: state.firstName,
  lastName: state.lastName,
})

const putActionsToProps = (dispatch) => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeLastName: bindActionCreators(changeLastName, dispatch),
  }
}

export default connect(putStateToProps, putActionsToProps)(App)
