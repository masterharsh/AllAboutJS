export class Repo {
    name: string | undefined;
    description: string | undefined;
    url: string | undefined;
    size: number | undefined;
    forkCount: number;

    constructor(repo: any) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.html_url;
        this.size = repo.size;
        this.forkCount = repo.forks_count;
    }
}