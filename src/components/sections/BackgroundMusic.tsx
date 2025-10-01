import { useState, useEffect, useRef, useCallback } from 'react'
import { Button } from '../ui/button'
import { Volume2, VolumeX, Music } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

interface BackgroundMusicProps {
  autoPlay?: boolean
}

export function BackgroundMusic({ autoPlay = true }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [volume, setVolume] = useState(0.3) // Start with lower volume
  const [hasUserInteracted, setHasUserInteracted] = useState(false)

  // Create a simple ambient tone using Web Audio API as a fallback
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null)
  const [gainNode, setGainNode] = useState<GainNode | null>(null)

  // Music URL - You can replace this with your actual music file URL
  // For demo purposes, we'll create a simple ambient tone
  const musicUrl = "" // Leave empty to use generated audio

  // Initialize Web Audio API for generated ambient sound
  useEffect(() => {
    if (!musicUrl) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
        setAudioContext(ctx)
        
        const gain = ctx.createGain()
        gain.gain.setValueAtTime(volume * 0.5, ctx.currentTime) // Softer volume for ambient sound
        gain.connect(ctx.destination)
        setGainNode(gain)
      } catch (error) {
        console.warn('Web Audio API not supported:', error)
      }
    }

    const audio = audioRef.current
    if (!audio) return

    // Set initial audio properties
    audio.loop = true
    audio.volume = volume
    audio.muted = isMuted

    // Handle audio events
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleError = (e: Event) => {
      console.warn('Audio playback error:', e)
      setIsPlaying(false)
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('error', handleError)
    }
  }, [volume, isMuted, musicUrl])

  const playAudio = useCallback(async () => {
    try {
      if (musicUrl && audioRef.current) {
        await audioRef.current.play()
      } else if (audioContext && gainNode && !oscillator) {
        const osc = audioContext.createOscillator()
        const osc2 = audioContext.createOscillator()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(220, audioContext.currentTime)
        osc2.type = 'sine'
        osc2.frequency.setValueAtTime(330, audioContext.currentTime)

        const gain2 = audioContext.createGain()
        gain2.gain.setValueAtTime(0.3, audioContext.currentTime)

        osc.connect(gainNode)
        osc2.connect(gain2)
        gain2.connect(gainNode)

        osc.start()
        osc2.start()

        setOscillator(osc)
        setIsPlaying(true)
      }
    } catch (error) {
      console.warn('Could not play audio:', error)
    }
  }, [musicUrl, audioContext, gainNode, oscillator])

  // Handle user interaction to enable autoplay
  useEffect(() => {
    void hasUserInteracted
    const handleUserInteraction = () => {
      setHasUserInteracted(true)
      if (autoPlay && !isPlaying && audioRef.current) {
        playAudio()
      }
    }

    document.addEventListener('click', handleUserInteraction, { once: true })
    document.addEventListener('keydown', handleUserInteraction, { once: true })
    document.addEventListener('touchstart', handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }
  }, [autoPlay, isPlaying, playAudio, hasUserInteracted])


  const pauseAudio = () => {
    if (musicUrl && audioRef.current) {
      audioRef.current.pause()
    } else if (oscillator) {
      oscillator.stop()
      setOscillator(null)
      setIsPlaying(false)
    }
  }

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio()
    } else {
      playAudio()
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted
      audioRef.current.muted = newMutedState
      setIsMuted(newMutedState)
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
    if (gainNode) {
      gainNode.gain.setValueAtTime(newVolume * 0.5, audioContext?.currentTime || 0)
    }
  }

  return (
    <div className="fixed top-4 right-4 z-40">
      {/* Audio Element - Only used if musicUrl is provided */}
      {musicUrl && (
        <audio
          ref={audioRef}
          preload="auto"
        >
          <source src={musicUrl} type="audio/mpeg" />
          <source src={musicUrl} type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
      )}

      {/* Music Control Button */}
      <div className="relative">
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full w-12 h-12 p-0 shadow-lg bg-white/90 hover:bg-white border-2 border-primary/20"
          onClick={() => setShowControls(!showControls)}
          title={isPlaying ? "Music is playing" : "Music is paused"}
        >
          <div className="relative">
            <Music className="w-5 h-5 text-primary" />
            {isPlaying && (
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>
        </Button>

        {/* Expanded Controls */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute top-14 right-0 bg-white rounded-lg shadow-xl border p-4 min-w-[200px]"
            >
              <div className="space-y-3">
                {/* Play/Pause and Mute */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={togglePlay}
                    className="flex-1"
                  >
                    {isPlaying ? 'Pause' : 'Play'}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMute}
                    className="w-10 h-8 p-0"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Volume Slider */}
                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground">Volume</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-xs text-center text-muted-foreground">
                    {Math.round(volume * 100)}%
                  </div>
                </div>

                {/* Status */}
                <div className="text-xs text-center text-muted-foreground border-t pt-2">
                  {isPlaying ? 'Playing background music' : 'Music paused'}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}