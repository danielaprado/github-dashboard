import { useEffect, useState } from "react";
import { fetchUser } from "../../../api/Services";
import avatar from "../../../assets/avatar.png";
import star from "../../../assets/star.png";
import { UserDetailedInfo } from "../../../models/UserDetailedInfo";
import { UserInfoModel } from "../../../models/UserInfoModel";
import "./UserDetailsCard.css";

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

  return (
    <div className="user-card">
      <div className="user-card-inner">
        <div className="user-card-front">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          >
            <div className="user-thumbnail-mask"></div>
            <img
              className="user-thumbnail"
              src={user.avatar_url}
              alt="User's cover"
            />
          </div>
          <div style={{ zIndex: 3, marginTop: "6vh" }}>
            <img
              className="user-avatar"
              src={user.avatar_url}
              alt="User's avatar"
            />
          </div>
          <div className="user-text-info">
            <div className="user-personal-info">
              {!userDetails?.name ? (
                <div style={{ color: "#bcbeca" }}>
                  Ups, can't reach user's username 😔
                </div>
              ) : (
                userDetails?.name
              )}
            </div>
            <div className="user-personal-info">
              {!userDetails?.email ? (
                <div style={{ color: "#bcbeca" }}>
                  Ups, can't reach user's email 😔
                </div>
              ) : (
                userDetails?.email
              )}
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
            <div className="user-repo-card">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: "1rem",
                  height: "50%",
                  paddingLeft: "1rem",
                }}
              >
                <div
                  style={{
                    alignSelf: "center",
                    color: "#243a9c",
                  }}
                >
                  Hello world
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                    alignItems: "center",
                    paddingRight: "1rem",
                  }}
                >
                  <img src={star} className="start-avatar" alt="star avatar" />
                  <div className="user-follower-count">56</div>
                </div>
              </div>
              <div
                style={{
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  height: "50%",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                This is my hello world project!
              </div>
            </div>
          </div>
        </div>
        <div className="user-card-back">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: "10%",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={user.avatar_url}
              alt="User's cover"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              zIndex: 3,
              height: "100%",
            }}
          >
            <img
              className="user-back-avatar"
              src={user.avatar_url}
              alt="User's avatar"
            />
            <div className="user-text-info">
              <div className="user-personal-info">
                {!userDetails?.name ? (
                  <div style={{ color: "#bcbeca" }}>
                    Ups, can't reach user's username 😔
                  </div>
                ) : (
                  userDetails?.name
                )}
              </div>
              <div className="user-personal-info">
                {!userDetails?.email ? (
                  <div style={{ color: "#bcbeca" }}>
                    Ups, can't reach user's email 😔
                  </div>
                ) : (
                  userDetails?.email
                )}
              </div>
              <div className="user-followers-conatiner">
                <img src={avatar} className="icon-avatar" alt="icon avatar" />
                <div>
                  <b>{userDetails?.followers}</b> Followers
                </div>
              </div>
            </div>
            <div
              className="user-button"
              onClick={() => window.open(`https://github.com/${user.login}`)}
            >
              Open Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
