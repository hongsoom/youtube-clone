import axios from "axios";

class Youtube {
    httpClient: any;
    channelList: any;
    finalList: any;
    channels: any;
    relatedList: any;
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
        });
        this.channelList = [];
        this.finalList = [];
        this.channels = {};
    }
    async search(keyword: string) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async #searchByKeyword(keyword: string) {
        return this.httpClient
            .get('search', {
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    type: 'video',
                    q: keyword,
                },
            })
            .then((res: any) => res.data.items)
            .then((items: any) =>
                items.map((item: any) => ({ ...item, id: item.id.videoId }))
            );
    }

    async #mostPopular() {
        const response = await this.httpClient
            .get('videos', {
                params: {
                    part: 'snippet',
                    maxResults: 25,
                    chart: 'mostPopular',
                    regionCode: "KR",
                },
            })
        this.finalList = [];
        response.data.items.map((item: any) => {
            return this.finalList.push(this.channel(item.snippet.channelId, item));
        });
        return Promise.all(this.finalList).then((values) => values);
    }

    async relatedVideos(id: string) {
        const response = await this.httpClient
            .get('search', {
                params: {
                    part: 'snippet',
                    relatedToVideoId: id,
                    type: 'video',
                    maxResults: 15,
                    chart: 'mostPopular',
                },
            })

        this.relatedList = [];

        response.data.items.map((item: any) => {
            return this.relatedList.push({ ...item, id: item.id.videoId });
        });

        this.finalList = [];
        this.relatedList.map((item: any) => {
            return this.finalList.push(this.channel(item.snippet.channelId, item));
        });
        return Promise.all(this.finalList).then((values) => values);
    }

    async channel(id: string, videos: any) {
        const response = await this.httpClient.get("channels", {
            params: {
                part: "snippet, statistics",
                id,
            },
        });

        if (response.data.items[0].hasOwnProperty("snippet")) {
            response.data.items[0].channelInfo = response.data.items[0].snippet;
            delete response.data.items[0].snippet;
        }

        return (this.channels = { ...response.data.items[0], ...videos });
    }
}
export default Youtube;