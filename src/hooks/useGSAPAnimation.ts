import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimation = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const animateFrom = (elem: Element, direction: number) => {
    direction = direction || 1;
    let x = 0,
    y = direction * 100;
    if (elem.classList.contains('reveal_fromLeft')) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains('reveal_fromRight')) {
      x = 100;
      y = 0;
    }

    gsap.fromTo(elem,
      {
        x: x,
        y: y,
        autoAlpha: 0
      },
      {
        x: 0,
        y: 0,
        autoAlpha: 1,
        duration: 1.25,
        ease: "expo",
        overwrite: "auto"
      }
    );
  };

  const hide = (elem: Element) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  useEffect(() => {
    if (!componentRef.current) return;

    // Text split animation with enhanced effects
    const splitText = new SplitType('.split-text', {
      types: 'words,chars',
      tagName: 'span'
    });

    gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: '.split-text',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 20,
      scale: 0.9,
      stagger: 0.03,
      duration: 0.6,
      ease: 'back.out(1.7)'
    });

    // Enhanced reveal animations
    gsap.utils.toArray('.reveal').forEach((elem: Element) => {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem as Element,
        onEnter: () => animateFrom(elem, 1),
        onEnterBack: () => animateFrom(elem, -1),
        onLeave: () => hide(elem)
      });
    });

    // Newsletter grid animation
    gsap.from('.newsletter-item', {
      y: 50,
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.newsletter-grid',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Enhanced parallax effect
    gsap.utils.toArray('.parallax').forEach((elem: Element) => {
      gsap.to(elem, {
        scrollTrigger: {
          trigger: elem as Element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'play reverse play reverse'
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * (target.dataset.speed || 0.5),
        ease: 'none'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      splitText.revert();
    };
  }, []);

  return componentRef;
};