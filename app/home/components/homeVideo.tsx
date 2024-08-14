"use client";
import { FC, useEffect, useRef } from "react";
import classes from "../style/homeVideo.module.scss";

const HomeVideo: FC = () => {
    const useVideoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        if (useVideoRef.current) {
            useVideoRef.current.play();
        }
    }, []);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden" && useVideoRef.current) {
                useVideoRef.current.play();
            }
        };

        const handleScroll = () => {
            if (useVideoRef.current && useVideoRef.current.paused) {
                useVideoRef.current.play();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={classes["home_main"]}>
            <div className={classes["home_section"]}>
                <div className={classes["blur_div"]}></div>
                <h1 className={classes["home_title"]}>VLD-Specconst</h1>
                <video
                    ref={useVideoRef}
                    className={classes["home_video"]}
                    src="/video/homeVideo.mp4"
                    muted
                    loop
                ></video>
                <h2 className={classes["swipe_down"]}>
                    Սահեցրեք վար
                    <img src="/img/arrow.png" alt="img" />
                </h2>
            </div>
        </div>
    );
};

export default HomeVideo;
