import fetch from "isomorphic-unfetch";

const Name = ({ user }) => {
  console.log(user);
  const username = user && user.name;
  return <div>{username}</div>;
};

Name.getInitialProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { user };
    }
    return { props: {} };
  } catch (e) {
    console.log(e);
    return {};
  }
};

export default Name;
