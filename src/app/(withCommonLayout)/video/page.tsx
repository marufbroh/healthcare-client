import VideoCall from "@/components/UI/VideoCall/VideoCall";

const VideoCalling = ({
  searchParams,
}: {
  searchParams: { videoCallingId: string };
}) => {

  return <VideoCall videoCallingId={searchParams.videoCallingId} />;
};

export default VideoCalling;
