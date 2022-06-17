// import VideoSvg from "../../assets/video.";
const VideoItem = ({ video }) => {
  const { title, id, link, thumbnail } = video;
  return (
    <a href={link}>
      <div className="h-28 w-34 border">
        <p className="">{title}</p>
        {/* <img src={thumbnail} alt="" /> */}
      </div>
    </a>
  );
};

export default VideoItem;
