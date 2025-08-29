import React, { useState, createContext, useContext } from 'react'

interface timeMetadataInterface {
  id: number,
  time: number,
  ao5: number | null,
  ao12: number | null,
  ao100: number | null,
}

interface TimesContextInterface {
  times: timeMetadataInterface[]
  setTimes: React.Dispatch<React.SetStateAction<timeMetadataInterface[]>>
  addTime: (time: timeMetadataInterface) => void
  clearTimes: () => void
}

const TimesContext = createContext<TimesContextInterface | undefined>(undefined)

export function TimesProvider({ children }: any) {
  const [times, setTimes] = useState<timeMetadataInterface[]>([])

  const addTime = (time: timeMetadataInterface) => {
    setTimes([...times, time])
  }

  const clearTimes = () => {
    setTimes([])
  }

  return (
    <TimesContext.Provider value={{ times, setTimes, addTime, clearTimes }}>
      {children}
    </TimesContext.Provider>
  )
}

export function useTimes() {
  const context = useContext(TimesContext)
  if (!context) {
    throw new Error('useTimes must be used within a TimesProvider')
  }
  return context
}
