import React, { useEffect, useMemo } from "react";
import Profile from "../Profile";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../../redux/profile-reducer";
import { compose } from "redux";

function ProfileContainer(props) {
  let { userId } = useParams();
  const navigate = useNavigate();
  let currUserId = userId ? parseInt(userId) : props.authorizedUserId || 31275;

  useEffect(() => {
    if (!currUserId) {
      navigate("/login");
      return;
    }
    props.getUserProfile(currUserId);
    props.getStatus(currUserId);
  }, [currUserId]);

  return (
    <div>
      <Profile
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })
)(ProfileContainer);
