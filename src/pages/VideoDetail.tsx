import React from "react";
import { useLocation } from "react-router-dom";
import RelatedVideos from "../components/Video/RelatedVideos";

export default function VideoDetail() {
    const {
        state: { video },
    } = useLocation();
    const { title, channelId, channelTitle, description } = video.snippet;
    console.log(video);
    return (
        <section className="flex flex-col lg:flex-row">
            <article className="basis-4/6">
                {/*                 <iframe
                    id="player"
                    type="text/html"
                    width="100%"
                    height="640"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={title}
                /> */}
                <div className="p-8">
                    <h2 className="text-xl font-bold">{title}</h2>

                    <pre className="whitespace-pre-wrap">{description}</pre>
                </div>
            </article>
            <section className="basis-2/6">
                <RelatedVideos id={video.id} />
            </section>
        </section>
    );
}