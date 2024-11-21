export interface GitHubUser {
  name: string;
  login: string;
  bio: string | null;
  followers: number;
  following: number;
  avatar_url: string;
}
