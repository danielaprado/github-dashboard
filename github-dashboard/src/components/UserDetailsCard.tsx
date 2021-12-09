import { UserInfoModel } from "../models/UserInfoModel";
import "./UserDetailsCard.css";
import avatar from "../assets/avatar.png";

export const UserDetailsCard = ({
  user,
}: {
  user: UserInfoModel;
}): JSX.Element => {
  return (
    <div className="user-card">
      <img className="user-thumbnail" src={user.avatar_url} />
      <img className="user-avatar" src={user.avatar_url} />
      <div>Pedro Henriques</div>
      <div>pedro12@uphill.pt</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src={avatar} style={{ width: "15%" }} />
        <div>
          <b>346</b> Followers
        </div>
      </div>
    </div>
  );
};
