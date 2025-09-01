import { View, SafeAreaView, Text, Pressable } from 'react-native';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTimes } from 'contexts/TimesContext';

export default function Timer() {

  interface timeMetadataInterface {
    id: number,
    time: number,
    scramble: string
  }
  
  const [time, setTime] = useState(0);
  const [currentScramble, setCurrentScramble] = useState("")
  const [isRunning, setIsRunning] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { times, setTimes, addTime, clearTimes } = useTimes();

  const startTimeRef = useRef<any>(null);
  const animationFrameRef = useRef<any>(null);
  const readyTimeoutRef = useRef<any>(null);

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = ms % 1000;

    // For times under 1 second, show "0.xxx" format
    if (seconds === 0) {
      return `0.${milliseconds.toString().padStart(3, '0')}`;
    }

    // For times over 1 second, show "ss.xxx" format
    return `${seconds}.${milliseconds.toString().padStart(3, '0')}`;
  };

  const createScramble = (moveCount: number): string => {

      const SCRAMBLE_MOVES = [
        "U", "U'", "U2",
        "D", "D'", "D2",
        "L", "L'", "L2",
        "R", "R'", "R2",
        "F", "F'", "F2",
        "B", "B'", "B2"
      ]

      let scramble = ""
      for (let i = 0; i < moveCount; i++) {
        const randomIndex = Math.floor(Math.random() * SCRAMBLE_MOVES.length)
        scramble = scramble + " " + SCRAMBLE_MOVES[randomIndex]
      }
      return scramble
  }

  const updateTimer = useCallback(() => {
    if (startTimeRef.current) {
      // Calculate elapsed time using high-precision timestamps
      // performance.now() provides microsecond accuracy vs Date.now()'s millisecond accuracy
      const elapsed = performance.now() - startTimeRef.current;

      // Floor to get clean millisecond values for display
      // Still maintains sub-millisecond internal precision
      setTime(Math.floor(elapsed));

      // Schedule next frame update - creates smooth 60fps animation
      // requestAnimationFrame automatically syncs with display refresh rate
      animationFrameRef.current = requestAnimationFrame(updateTimer);
    }
  }, []);

  const startTimer = useCallback(() => {
    // Only start if not already running or in ready state
    if (!isRunning && !isReady) {
      setIsReady(true);

      // 500ms ready delay matches official speedcubing timers
      // This prevents accidental starts and gives cuber time to prepare
      readyTimeoutRef.current = setTimeout(() => {
        setIsReady(false);
        setIsRunning(true);

        // Capture high-precision start timestamp
        // performance.now() returns DOMHighResTimeStamp with microsecond precision
        startTimeRef.current = performance.now();

        // Reset display timer and begin update loop
        setTime(0);
        updateTimer();
      }, 500);
    }
  }, [isRunning, isReady, updateTimer]);

  const stopTimer = useCallback(() => {
    // If user releases during ready state, cancel the timer start
    if (isReady) {
      clearTimeout(readyTimeoutRef.current);
      setIsReady(false);
      return;
    }

    // If timer is running, stop it and record the time
    if (isRunning) {
      setIsRunning(false);

      // Cancel the animation frame loop to stop updates
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Calculate final time with maximum precision
      // Using performance.now() ensures we capture the exact stop moment
      const finalTime = performance.now() - startTimeRef.current;
      const roundedTime = Math.floor(finalTime);

      // Update display with final time
      setTime(roundedTime);

      // Add to solve history for statistics
      // Each solve is stored as milliseconds for consistent calculations
      setTimes((prev) => [...prev, {
        id: times.length + 1,
        time: roundedTime,
        scramble: currentScramble,
      }]);

      setCurrentScramble(createScramble(20))

      // Clear start reference for next solve
      startTimeRef.current = null;
    }
  }, [isReady, isRunning]);

  /**
   * Resets timer to initial state and cleans up all active processes
   * Comprehensive cleanup ensures no memory leaks or orphaned processes
   */
  const resetTimer = useCallback(() => {
    // Reset all state variables
    setIsRunning(false);
    setIsReady(false);
    setTime(0);

    // Cancel animation frame if active (stops update loop)
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Cancel ready state timeout if active
    if (readyTimeoutRef.current) {
      clearTimeout(readyTimeoutRef.current);
    }

    // Clear start timestamp reference
    startTimeRef.current = null;
  }, []);

  const handleTimerPress = () => {
    if (isRunning || isReady) {
      stopTimer();
    } else {
      startTimer();
    }
  }

  useEffect(() => {
    setCurrentScramble(createScramble(20))
  }, [])

  return (
    <View className='relative flex-1 bg-black'>
    <Text className='absolute text-white text-3xl flex-1 mt-32  mx-auto px-10 text-center'>
      {currentScramble|| "Loading..."}
    </Text>
      <Pressable className="flex-1 justify-center items-center" onPress={handleTimerPress}>
        <Text className={`text-7xl font-light ${isReady ? 'text-green-500' : 'text-white'}`}>{formatTime(time)}</Text>
      </Pressable>
    </View>
  );
}
