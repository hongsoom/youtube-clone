import React, { createContext, useContext } from 'react';
import Youtube from '../components/api/youtube';

export const YoutubeAPIContext = createContext<any>(null);

const youtube = new Youtube();

export const YoutubeAPIProvider = ({
    children,
}: {
    children: any;
}) => {
    return (
        <YoutubeAPIContext.Provider value={youtube}>
            {children}
        </YoutubeAPIContext.Provider>
    );
}

export function useYoutubeApi() {
    return useContext(YoutubeAPIContext);
}