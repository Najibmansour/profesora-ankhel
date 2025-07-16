"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
  };
}

export default function Search() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVideos = async () => {
    setLoading(true);
    setError(null);
    setVideos([]);
    try {
      const res = await fetch("/api/youtube");
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      setError("Failed to fetch videos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-bg-light flex flex-col items-center justify-start p-4">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900 drop-shadow-sm tracking-tight w-full text-center mt-4 sm:mt-8">
        YouTube Daily Recommendations
      </h1>
      {error && (
        <div className="text-red-500 mb-6 font-medium text-center w-full">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-md sm:max-w-2xl mb-4 overflow-y-auto max-h-[calc(100vh-220px)]">
        {videos.slice(0, 3).map((video) => (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-yellow-300/10 rounded-3xl shadow-xl hover:shadow-2xl transition p-3 border border-gray-100 hover:border-blue-200 group"
          >
            <div className="relative w-full aspect-[16/9] mb-2">
              <Image
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                fill
                className="object-cover rounded-2xl group-hover:scale-105 transition-transform"
                sizes="(max-width: 640px) 100vw, 320px"
                priority={true}
              />
            </div>
            <div className="font-semibold text-gray-800 text-base group-hover:text-blue-700 transition-colors">
              {video.snippet.title}
            </div>
          </a>
        ))}
      </div>
      <button
        className="w-full max-w-xs px-8 py-3 bg-accent-foreground text-white rounded-full shadow-lg hover:bg-accent-foreground/90 transition font-semibold text-lg mt-auto mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-60"
        onClick={fetchVideos}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Daily Recommendations"}
      </button>
    </main>
  );
}
