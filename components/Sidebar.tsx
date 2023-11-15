import React from "react";
import Link from "next/link";

export default function SideBar({
  posts,
}: {
  posts: { slug: string; id: number; title: string; date: Date }[];
}) {
  return (
    <div>
      <ul className="sticky top-36">
        <li className="mb-5 text-2xl font-bold">All blogs</li>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-1xl text-white underline transition-colors hover:text-gray-400"
            >
              {post.title} - {post.date.toLocaleDateString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
