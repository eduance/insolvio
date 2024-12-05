import { ComponentType } from 'react';

const MIN_LOADING_TIME = 800; // 800ms for a subtle but noticeable loading state

// Track first load state
let isFirstLoad = true;

export function withMinLoadingTime<T>(importPromise: Promise<{ default: ComponentType<T> }>) {
  if (!isFirstLoad) {
    return importPromise;
  }

  return Promise.all([
    importPromise,
    new Promise(resolve => setTimeout(resolve, MIN_LOADING_TIME))
  ]).then(([module]) => {
    isFirstLoad = false;
    return module;
  });
}