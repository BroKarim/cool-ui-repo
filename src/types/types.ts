export interface GitHubUser {
  name: string;
  login: string; // ini adalah username/nickname (contoh: @brokariim)
  bio: string | null;
  followers: number;
  following: number;
  avatar_url: string;
}
