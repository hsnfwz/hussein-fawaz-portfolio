import { useState, useEffect, useCallback, useRef } from 'react';

const useIntersection = (threshold = 0.1) => {
  const [intersectingElement, setIntersectingElement] = useState(null);
  const [elementNode, setElementNode] = useState(null);
  const [observer, setObserver] = useState(null);
  const elementNodeTimerRef = useRef(null);

  const elementRef = useCallback((node: any) => {
    if (node && node !== elementNode) {
      clearTimeout(elementNodeTimerRef.current);
      elementNodeTimerRef.current = setTimeout(() => {
        setElementNode(node);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    const intersectionObserver: any = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
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
