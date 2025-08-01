import React, { useEffect, useRef } from 'react'
import audioFile from '../assets/audio/goetia.mp3'

export const BackgroundAudio = () => {

  const audioRef = useRef(null)

  useEffect(() => {
    if(audioRef.current){
      audioRef.current.volume = 0.4
    }

  }, [])

  return (
    <div className='audio-container'>
      <audio ref={audioRef} controls autoPlay loop style={{ width: '150px', opacity: 0.5, position: 'absolute', bottom: '10px', right: '10px' }}>
        <source src={audioFile} type='audio/mp3' />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
