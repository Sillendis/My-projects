import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers,
} from "../../redux/users-reducer";
import React, { useEffect } from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersState
} from "../../redux/users-selectors";

function UsersContainer(props) {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, [props.currentPage, props.pageSize, props.getUsers]);

  const onPageChanged = (pageNumber) => {
    props.getUsers(pageNumber, props.pageSize);
  };

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        users={props.users}
        follow={props.follow}
        unfollow={props.unfollow}
        followingProgress={props.followingProgress}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    users: getUsersState(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers,
  })
)(UsersContainer);
