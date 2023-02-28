export type RouteState = {
    pathname: string;
}

export type propsType = {
    videos: [],
    display: string
}

export type VideoType = {
    state: {
        id: string
        snippet: {
            title: string
            publishedAt: string
            channelTitle: string
            description: string
            thumbnails: {
                medium: {
                    url: string
                }
            }
        }
        statistics: {
            viewCount: any
            subscriberCount: any
        }
        channelInfo: {
            thumbnails: {
                medium: {
                    url: string
                }
            }
        }
    };
    pathname?: string;
    display?: string;
}