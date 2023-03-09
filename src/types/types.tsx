export type RouteState = {
  pathname: string;
};

export type FormType = {
  icon: any;
  login: string;
  notlogin: string;
  notloginD: string;
};

export type propsType = {
  videos: [];
  display: string;
};

export type VideoType = {
  video: {
    id:
      | string
      | {
          videoId: string;
        };
    snippet: {
      title: string;
      publishedAt: string;
      channelTitle: string;
      description: string;
      thumbnails: {
        maxres?: {
          url: string;
        };
        high?: {
          url: string;
        };
      };
    };
    statistics: {
      viewCount: any;
      subscriberCount: any;
    };
    channelInfo: {
      description: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
    };
  };
  pathname?: string;
  display?: string;
};
