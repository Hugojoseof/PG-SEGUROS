import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, RotateCcw } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
}

const VideoModal = ({ isOpen, onClose, videoSrc, title = "Conheça Nossa História" }: VideoModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Agrupar mudanças de estado para evitar múltiplos re-renders
      setIsPlaying(false);
      setCurrentTime(0);
      setIsLoading(true);
      setHasError(false);
      
      // Usar requestAnimationFrame para operações DOM
      requestAnimationFrame(() => {
        if (videoRef.current) {
          // Agrupar operações DOM para evitar reflow
          const video = videoRef.current;
          video.currentTime = 0;
          video.load();
        }
      });
    }
  }, [isOpen]);

  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          await videoRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Erro ao reproduzir vídeo:', error);
        setHasError(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    
    // Atualizar estado primeiro
    setCurrentTime(time);
    
    // Usar requestAnimationFrame para operação DOM
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = time;
      }
    });
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    onClose();
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Erro no vídeo:', e);
    setIsLoading(false);
    setHasError(true);
  };

  const retryVideo = () => {
    setHasError(false);
    setIsLoading(true);
    
    // Usar requestAnimationFrame para evitar reflow
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.load();
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[90vw] max-w-[400px] aspect-[9/16] p-0 bg-black border-0 rounded-2xl overflow-hidden">
        {/* Componentes de acessibilidade necessários para o Radix UI */}
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">
          Vídeo institucional da PG Seguros mostrando nossa história e valores
        </DialogDescription>
        
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-2 sm:p-3">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-xs sm:text-sm font-semibold truncate max-w-[150px] sm:max-w-[200px]">{title}</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-white hover:bg-white/20 rounded-full p-1 sm:p-1.5"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>

        {/* Video Container - Formato 9:16 fixo */}
        <div className="relative w-full h-full bg-black flex items-center justify-center aspect-[9/16]">
          {/* Loading State */}
          {isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-white mx-auto mb-2 sm:mb-3"></div>
                <p className="text-xs sm:text-sm">Carregando vídeo...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
              <div className="text-white text-center p-3 sm:p-4">
                <div className="text-red-400 mb-3">
                  <svg className="w-8 h-8 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm mb-3">Erro ao carregar o vídeo</p>
                <Button
                  onClick={retryVideo}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm flex items-center gap-2 mx-auto"
                >
                  <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                  Tentar Novamente
                </Button>
              </div>
            </div>
          )}
          
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onError={handleVideoError}
            onClick={togglePlay}
            preload="metadata"
            playsInline
            muted={isMuted}
            controls={false}
          />
          
          {/* Play Button Overlay */}
          {!isPlaying && !isLoading && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                onClick={togglePlay}
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-full p-3 sm:p-4 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
              </Button>
            </div>
          )}

          {/* Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
            {/* Progress Bar */}
            <div className="mb-2 sm:mb-3">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 sm:h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) 100%)`
                }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 sm:gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={togglePlay}
                  className="text-white hover:bg-white/20 rounded-full p-1 sm:p-1.5"
                >
                  {isPlaying ? (
                    <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
                  ) : (
                    <Play className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMute}
                  className="text-white hover:bg-white/20 rounded-full p-1 sm:p-1.5"
                >
                  {isMuted ? (
                    <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" />
                  ) : (
                    <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  )}
                </Button>

                <span className="text-white text-xs font-mono">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="text-white hover:bg-white/20 rounded-full p-1 sm:p-1.5"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : (
                  <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
