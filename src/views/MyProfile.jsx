import ProfileElementA from "../components/ProfileElementA";
import ProfileElementB from "../components/ProfileElementB";
import '../components/ProfileElement.css';

export default function MyProfile() {
  return (
    <>
      <div className="my-profile">
        <div className="profile-a">
          <ProfileElementA />
        </div>
          {/* <h1 className="flex justify-center mt-100px">My Profile</h1> */}
        <div className="profile-b">
          <ProfileElementB />
        </div>
      </div>
    </>
  )
}