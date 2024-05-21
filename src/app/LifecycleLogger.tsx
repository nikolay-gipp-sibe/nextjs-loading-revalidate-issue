'use client';
import { useEffect } from 'react';

export const LifecycleLogger = () => {
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      <h1>Lifecycle Logger Component</h1>
    </div>
  );
};