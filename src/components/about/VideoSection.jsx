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

          {/* Video Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="card-modern p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Advanced Technology
              </h3>
              <p className="text-gray-600 text-sm">
                N-Type TopCon solar technology for maximum efficiency
              </p>
            </div>

            <div className="card-modern p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Sustainable Manufacturing
              </h3>
              <p className="text-gray-600 text-sm">
                Eco-friendly production processes in our UAE facility
              </p>
            </div>

            <div className="card-modern p-6 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600 text-sm">
                Rigorous testing and international certifications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
