import { Suspense } from "react";
import { EmbeddedTweet, TweetSkeleton } from "react-tweet";
import { type Tweet } from "react-tweet/api";

export default function Testimonials({ tweets }: { tweets: Tweet[] }) {
  return (
    <section id="testimonials">
      <div className="max-w-[1000px] mx-auto py-14">
        <div className="mx-auto max-w-md text-center sm:max-w-2xl">
          <h2 className="font-display text-4xl font-bold leading-tight text-black sm:text-5xl sm:leading-tight">
            Loved by{" "}
            <span className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
              2,500+ users
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
              companies
            </span>{" "}
            worldwide
          </h2>

          <p className="mt-5 text-gray-600 sm:text-lg">
            Here&apos;s what our users have to say
          </p>
        </div>

        <style>
          {`
            .react-tweet-theme {
              --tweet-container-margin: 0;
            }
            `}
        </style>
        <div className="space-y-6 py-8 sm:columns-2 lg:columns-3">
          {tweets?.map((t) => (
            <Suspense
              key={t.id_str}
              fallback={<TweetSkeleton key={t.id_str} />}
            >
              <div className="light">
                <EmbeddedTweet tweet={t} />
              </div>
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
}
