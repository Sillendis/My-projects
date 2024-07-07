import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        {/* <img src="https://desu.shikimori.one/uploads/poster/characters/238038/main_alt-4216d57eed2d52b3a9732761b031ad88.jpeg" />{" "} */}
      </div>
      <div className={s.avaDescription}>
        <img src={props.profile.photos.large} />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
