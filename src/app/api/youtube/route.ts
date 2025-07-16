import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CONFIG_PATH = path.resolve(process.cwd(), 'youtube-recommend-config.json');


interface YouTubeVideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    // Add other fields as needed
  };
  // Add other fields as needed
}


function getConfig() {
  const raw = fs.readFileSync(CONFIG_PATH, 'utf-8');
  return JSON.parse(raw);
}

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export async function GET(req: NextRequest) {
  const config = getConfig();
  const topics = config.topics || ['psychoanalysis', 'psychology'];
  // Pick 3 random topics
  const randomTopics = shuffleArray(topics).slice(0, 3);
  // Combine topics into a single string separated by spaces
  const combinedTopicStr = randomTopics.map(String).join(' ');
  const results: YouTubeVideoItem[] = [];

  // Fetch only once with the combined topic string
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${config.maxResults || 10}&q=${encodeURIComponent(
    combinedTopicStr
  )}&type=video&order=${config.order || 'relevance'}&videoDuration=${config.videoDuration || 'any'}&safeSearch=${config.safeSearch || 'none'}&regionCode=${config.regionCode || 'US'}&key=${API_KEY}`;
  const res = await fetch(url, {cache: "no-cache"});
  const data = await res.json();
  console.log(data);

  if (data.items) {
    results.push(...data.items);
  }

  // Remove duplicates by videoId
  const unique = Array.from(
    new Map(results.map((item) => [item.id.videoId, item])).values()
  );

  return NextResponse.json(shuffleArray(unique).slice(0, config.maxResults || 10));
} 