import { useState, useEffect, useCallback, useRef } from 'react';

const useIntersection = (threshold = 0.1) => {
  const [intersectingElement, setIntersectingElement] = useState<IntersectionObserverEntry | null>(null);
  const [elementNode, setElementNode] = useState<Element | null>(null);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  // const elementNodeTimerRef = useRef();

  const elementRef = useCallback((node: HTMLElement) => {
    if (node && node !== elementNode) {
      // window.clearTimeout(elementNodeTimerRef.current);
      // elementNodeTimerRef.current = window.setTimeout(() => {
        setElementNode(node);
      // }, 1000);
    }
  }, []);

  useEffect(() => {
    const intersectionObserver: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            setIntersectingElement(entry);
          } else {
            setIntersectingElement(null);
          }
        });
      },
      { threshold }
    );

    setObserver(intersectionObserver);
  }, []);

  useEffect(() => {
    if (!observer || !elementNode) return;

    observer.observe(elementNode);

    return () => {
      observer.unobserve(elementNode);
    };
  }, [elementNode]);

  return [elementRef, intersectingElement];
};

export default useIntersection;
