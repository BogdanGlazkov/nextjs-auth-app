import { getSession, useSession } from "next-auth/react";

function Blog({ data }) {
  const { data: session } = useSession();

  return (
    <>
      <h1>Blog Page - {data}</h1>
      {!session ? null : <p>for {session.user.name.split(" ")[0]}</p>}
    </>
  );
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      data: session
        ? "List of 100 personalized blogs"
        : "List of 100 free blogs",
    },
  };
}
