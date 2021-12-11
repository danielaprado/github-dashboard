import "./UserDetailsCard.css";
import avatar from "../../../assets/avatar.png";
import { UserInfoModel } from "../../../models/UserInfoModel";
import { useEffect, useState } from "react";
import { fetchUser } from "../../../api/Services";
import { UserDetailedInfo } from "../../../models/UserDetailedInfo";
import { numberFormatter } from "../../../utils/numberFormatter";

export const UserDetailsCard = ({
  user,
}: {
  user: UserInfoModel;
}): JSX.Element => {
  const [userDetails, setUserDetails] = useState<UserDetailedInfo>();

  const getUserDetails = async () => {
    const userInfo = await fetchUser(user.login);
    setUserDetails(userInfo);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  return (
    <div className="user-card">
      <img
        className="user-thumbnail"
        src={user.avatar_url}
        alt="User's thumbnail"
      />
      <div className="user-avatar-container">
        <img
          className="user-avatar"
          src={user.avatar_url}
          alt="User's avatar"
        />
      </div>
      <div className="user-text-info">
        <div className="user-personal-info">{userDetails?.name}</div>
        <div className="user-personal-info">
          {!userDetails?.email ? "null@email.com" : userDetails?.email}
        </div>
        <div className="user-followers-conatiner">
          <img src={avatar} className="icon-avatar" alt="icon avatar" />
          <div>
            <b>{userDetails?.followers}</b> Followers
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="user-repo-card-container">
        <div className="user-repo-card"></div>
      </div>
    </div>
  );
};
