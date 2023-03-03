import { Helmet } from 'react-helmet-async';
import { VideoType } from '../types/types';

const MetaTag = ({ video }: VideoType) => {

    const { id, snippet, channelInfo } = video;

    return (
        <Helmet>
            <title>{snippet.title}</title>

            <meta name="description" content={channelInfo.description} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={snippet.title} />
            <meta property="og:site_name" content={snippet.title} />
            <meta property="og:description" content={snippet.description} />
            <meta property="og:image" content={snippet.thumbnails.maxres!.url} />
            <meta property="og:url" content={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`} />

            <meta name="twitter:title" content={snippet.title} />
            <meta name="twitter:description" content={channelInfo.description} />
            <meta name="twitter:image" content={snippet.thumbnails.maxres!.url} />

            <link rel="canonical" href={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`} />
        </Helmet>
    );
};

export default MetaTag;