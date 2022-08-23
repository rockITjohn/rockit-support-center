import VideoItem from "../../atoms/video-item/video-item";
// import VideoSvg from "../../assets/video.svg";

// TODO: Create videos props from Kendra response
const VideoList = () => {
  const videos = [
    {
      title: "Video 1",
      id: "Video 1",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "../../assets/video.svg",
    },
    {
      title: "Video 2",
      id: "Video 2",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "../../assets/video.svg",
    },
    {
      title: "Video 3",
      id: "Video 3",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "../../assets/video.svg",
    },
    {
      title: "Video 4",
      id: "Video 4",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "../../assets/video.svg",
    },
  ];
  return (
    <div className="my-4">
      <div>Videos</div>

      <div className="grid grid-cols-4 gap-4 ">
        {videos.map((video) => {
          return <VideoItem video={video} key={video.id} />;
        })}
      </div>
    </div>
  );
};

export default VideoList;
