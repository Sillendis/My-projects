import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://cdn.picrew.me/app/image_maker/112842/icon_iSBiZxgHkBMeQTym.png" />
        {props.message}
        <div>
          <button>
            <span>Like</span> {props.likesCount}
          </button>
          <button>
            <span>Dislike</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
