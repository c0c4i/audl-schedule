export class Game {
    id: number;
    awayTeam: string;
    homeTeam: string;
    status: string;
    date: string;
    url: string;

    constructor(id: number, awayTeam: string, homeTeam: string, status: string, date: string, url: string) {
        this.id = id;
        this.awayTeam = awayTeam;
        this.homeTeam = homeTeam;
        this.status = status;
        this.date = date;
        this.url = url;
    }

    static fromJson(json: any): Game {
        return new Game(
            json.gameID,
            json.awayTeamName,
            json.homeTeamName,
            json.status,
            json.startTimestamp,
            json.streamingURL
        );
    }
}