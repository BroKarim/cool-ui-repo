// api.ts
import type { GitHubUser } from "@/types/types";

// api.ts
export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub user data");
  }
  return response.json();
}
