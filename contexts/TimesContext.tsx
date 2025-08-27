import React, { useState, createContext, useContext } from 'react'

interface TimesContextInterface {
  times: number[]
  setTimes: React.Dispatch<React.SetStateAction<number[]>>
  addTime: (time: number) => void
  clearTimes: () => void
}

const TimesContext = createContext<TimesContextInterface | undefined>(undefined)

export function TimesProvider({ children }: any) {
  const [times, setTimes] = useState<number[]>([])

  const addTime = (time: number) => {
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
