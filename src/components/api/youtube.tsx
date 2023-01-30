import axios from "axios";

export default class Youtube {
    httpClient: any;
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
        });
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
        return this.httpClient
            .get('videos', {
                params: {
                    part: 'snippet, contentDetails, statistics',
                    maxResults: 25,
                    chart: 'mostPopular',
                    regionCode: "KR",
                },
            })
            .then((res: any) => res.data.items);
    }
    async channelImgURL(id: string) {
        return this.httpClient
            .get('channels', {
                params: {
                    part: 'snippet',
                    id,
                },
            })
            .then((res: any) => res.data.items[0].snippet.thumbnails.default.url)
    }
    async relatedVideos(id: string) {
        return this.httpClient
            .get('search', {
                params: {
                    part: 'snippet',
                    relatedToVideoId: id,
                    type: 'video',
                    maxResults: 25,
                    regionCode: "KR",
                },
            })
            .then((res: any) => res.data.items);
    }
}
