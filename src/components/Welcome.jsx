function Welcome({ user }) {
  return <h1 data-testid="welcome-user">Welcome {user.username}</h1>;
}

export default Welcome;
