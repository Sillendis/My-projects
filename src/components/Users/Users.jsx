import React from "react";
import styles from "./Users.module.css";
import UserPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            key={p}
            className={props.currentPage === p ? styles.selectedPage : ""}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : UserPhoto}
                  className={styles.userPhoto}
                  alt="User"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location?.country || "Country not available"}</div>
              <div>{u.location?.city || "City not available"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
