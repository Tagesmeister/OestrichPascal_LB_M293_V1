 particlesJS('particles-js', {
            particles: {
                color: '#ff0000',
                shape: 'circle',
                opacity: 1,
                size: 3.5,
                size_random: true,
                nb: 200,
                line_linked: {
                    enable_auto: true,
                    distance: 100,
                    color: '#fff',
                    opacity: 1,
                    width: 1,
                    condensed_mode: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 600
                    }
                },
                anim: {
                    enable: true,
                    speed: 1
                }
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 250
                },
                detect_on: 'canvas',
                mode: 'grab',
                line_linked: {
                    opacity: .5
                },
                events: {
                    onclick: {
                        enable: true,
                        mode: 'push',
                        nb: 4
                    }
                }
            },
            retina_detect: true
        });