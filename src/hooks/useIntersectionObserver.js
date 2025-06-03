import { useState, useEffect, useRef, useCallback } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [activeElement, setActiveElement] = useState(null);
  const [entries, setEntries] = useState([]);
  const observerRef = useRef(null);
  const elementsRef = useRef(new Map());

  const defaultOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0,
    ...options,
  };

  // Callback for intersection observer
  const handleIntersection = useCallback((observerEntries) => {
    setEntries(observerEntries);

    // Find the most visible element
    const visibleEntries = observerEntries.filter((entry) => entry.isIntersecting);
    if (visibleEntries.length > 0) {
      // Sort by intersection ratio and pick the most visible one
      const mostVisible = visibleEntries.reduce((prev, current) =>
        current.intersectionRatio > prev.intersectionRatio ? current : prev
      );
      setActiveElement(mostVisible.target);
    }
  }, []);

  // Initialize observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, defaultOptions);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [
    handleIntersection,
    defaultOptions.root,
    defaultOptions.rootMargin,
    defaultOptions.threshold,
  ]);

  // Function to observe an element
  const observe = useCallback((element, id) => {
    if (!element || !observerRef.current) return;

    observerRef.current.observe(element);
    if (id) {
      elementsRef.current.set(id, element);
    }
  }, []);

  // Function to unobserve an element
  const unobserve = useCallback((element) => {
    if (!element || !observerRef.current) return;

    observerRef.current.unobserve(element);

    // Remove from elements map
    for (const [id, el] of elementsRef.current.entries()) {
      if (el === element) {
        elementsRef.current.delete(id);
        break;
      }
    }
  }, []);

  // Function to observe multiple elements by selector
  const observeElements = useCallback(
    (selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => observe(element, element.id));
    },
    [observe]
  );

  // Function to get element by id
  const getElement = useCallback((id) => {
    return elementsRef.current.get(id);
  }, []);

  // Function to check if element is visible
  const isElementVisible = useCallback(
    (element) => {
      return entries.some((entry) => entry.target === element && entry.isIntersecting);
    },
    [entries]
  );

  // Function to get intersection ratio for element
  const getIntersectionRatio = useCallback(
    (element) => {
      const entry = entries.find((entry) => entry.target === element);
      return entry ? entry.intersectionRatio : 0;
    },
    [entries]
  );

  // Cleanup function
  const disconnect = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      elementsRef.current.clear();
      setActiveElement(null);
      setEntries([]);
    }
  }, []);

  return {
    activeElement,
    entries,
    observe,
    unobserve,
    observeElements,
    getElement,
    isElementVisible,
    getIntersectionRatio,
    disconnect,
    observer: observerRef.current,
  };
};

export default useIntersectionObserver;
