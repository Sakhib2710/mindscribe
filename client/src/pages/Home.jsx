import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Button } from "flowbite-react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-row">
        <div className="flex p-28 px-3 max-w-6xl justify-between align-middle">
          <div className="my-auto mx-auto p-16 flex flex-col gap-6">
            <h1 className="text-7xl">
              <span className="text-cyan-500">Top Picks!</span> <br />
              Your Trusted Source for Informed Reading
            </h1>
            <p className="text-2xl mb-8"></p>
            <div className="flex items-center gap-5">
              <Button size="xl" gradientDuoTone="cyanToBlue">
                Explore Blogs
              </Button>
            </div>
          </div>
        </div>
        <div className="my-auto mr-20">
          <img
            src="https://static-web.grammarly.com/1e6ajr2k4140/75IFN2KXay95QcYR7usTWp/b23584807f2575942964c54bfcd6dfdf/Group_625989.png?w=1080&fm=webp"
            alt=""
          />
        </div>
      </div>
      {/* <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div> */}
      <div className="mx-32">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-14">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center mb-6"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
