function UserDropdown({ user }) {
  const username = user.username;
  const profile = username.charAt(0);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.replace("/");
  };

  return (
    <div className="header__container--user">
      <ul className="user__dropdown">
        <li>
          <span className="profile-name">{profile}</span>
          <ul>
            <li>
              <span onClick={handleLogout}>Logout</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default UserDropdown;
