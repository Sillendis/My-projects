import { connect } from "react-redux";
import { sendMessageCreator } from "../../redux/dialogues-reducer";
import Dialogues from "./Dialogues";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialoguesPage: state.dialoguesPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Dialogues);
