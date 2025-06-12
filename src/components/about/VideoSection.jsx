import videoPath from "../../assets/videos/homepage.mp4";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        {/* Heading Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Powering the Future with{" "}
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-amber-600 to-orange-600">
                Solar Energy
              </span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-48 md:w-64 mx-auto" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-8 leading-relaxed">
            High-efficiency solar panels engineered for sustainable living by
            Abundance Solar
          </p>
        </div>

        {/* Video Section */}
        <div className="relative group">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-auto object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              src={videoPath}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Video Controls */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 group/btn"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1 group-hover/btn:scale-110 transition-transform" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 group/btn"
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
                  )}
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                  <span className="text-white text-sm font-medium">
                    Manufacturing Excellence
                  </span>
                </div>
              </div>
            </div>

            {/* Play Button Overlay (shown when paused) */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  onClick={togglePlay}
                  className="flex items-center justify-center w-20 h-20 bg-white/90 backdrop-blur-md rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                  <Play className="w-8 h-8 text-gray-800 ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
