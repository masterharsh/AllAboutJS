import { Repo } from "./Repo";

export class User {
    login: string | undefined;
    fullName: string | undefined;
    repoCount: number | undefined;
    followerCOunt: number | undefined;
    repos?: Repo[] | undefined;

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCOunt = userResponse.followers;
        //this.repos = userResponse.name;
    }
}