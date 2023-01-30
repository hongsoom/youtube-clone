import React from "react";
import { useYoutubeApi } from "../../contenxt/YoutubeAPIContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";

export default function RelatedVideos(id: any) {
    const { youtube } = useYoutubeApi();
    /*     const {
            isLoading,
            error,
            data: videos,
        } = useQuery(["related", id], () => youtube.relatedVideos(id), {
            staleTime: 1000 * 60 * 5,
        }); */

    return (
        <>
            {/*             {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😖</p>}
            {videos && (
                <ul>
                    {videos.map((video: any) => (
                        <VideoCard key={video.id} video={video} type="list" />
                    ))}
                </ul>
            )} */}
        </>
    );
}