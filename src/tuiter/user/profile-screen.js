import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../services/auth-thunks";

function ProfileScreen() {
  const userState = useSelector((state) => state.user);
  const currentUser = userState && userState.currentUser;
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = async () => {
    try {
      const updatedProfile = {
        username: profile.data.username,
        password:profile.data.password,
        firstName: profile.firstName,
        lastName: profile.lastName,
        _id: profile.data._id
      };
      await dispatch(
        updateUserThunk(updatedProfile));
        console.log("updated profile",updatedProfile);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.log("Conflict error: User already exists");
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { payload } = await dispatch(profileThunk());
        setProfile(payload);
      } catch (error) {
        console.log("Error fetching profile:", error.message);
      }
    };

    fetchProfile();
  }, [dispatch]);

  console.log("profile1", profile);

  return (
    <div>
      <h1>Profile Screen</h1>
      {profile && (
        <div>
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={profile.firstName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  firstName: event.target.value,
                };
                setProfile(newProfile);
              }}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              value={profile.lastName}
              onChange={(event) => {
                const newProfile = {
                  ...profile,
                  lastName: event.target.value,
                };
                setProfile(newProfile);
                console.log(newProfile);
              }}
            />
          </div>
        </div>
      )}
      <button
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/tuiter/login");
        }}
      >
        Logout
      </button>
      <button onClick={save}>Save</button>
    </div>
  );
}

export default ProfileScreen;