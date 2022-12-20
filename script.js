function containerSizeFunc(containerDom, insideContainerDom, maxWidth, minWidth) {
    if (containerDom.offsetWidth < maxWidth & containerDom.offsetWidth > minWidth) {
        let transform = containerDom.offsetWidth / insideContainerDom.offsetWidth;
        let height = transform * insideContainerDom.offsetHeight

        containerDom.style.cssText = `
                    transform:scale(${transform});
                    transform-origin: top left;
                    height: ${height}px; 
                `
    } else {
        containerDom.style.cssText = ` 
                `
    }

    window.addEventListener('resize', () => {
        if (containerDom.offsetWidth < maxWidth & containerDom.offsetWidth > minWidth) {
            let transform = containerDom.offsetWidth / insideContainerDom.offsetWidth;
            let height = transform * insideContainerDom.offsetHeight

            containerDom.style.cssText = `
                        transform:scale(${transform});
                        transform-origin: top left;
                        height: ${height}px; 
                    `
        } else {
            containerDom.style.cssText = ` 
                    `
        }
    })

};

function getScript(source, callback) {
    var script = document.createElement('script');
    var prior = document.getElementsByTagName('script')[0];
    script.async = 1;

    script.onload = script.onreadystatechange = function (_, isAbort) {
        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = undefined;

            if (!isAbort && callback) setTimeout(callback, 0);
        }
    };

    script.src = source;
    prior.parentNode.insertBefore(script, prior);
}

// block 1

const block1Container = document.querySelector('.wedding2022-block1-container');
const block1 = document.querySelector('.wedding2022-block1');

containerSizeFunc(block1Container, block1, 1440, 768)
// block 2

const block2Container = document.querySelector('.wedding2022-block2-container');
const block2 = document.querySelector('.wedding2022-block2');

containerSizeFunc(block2Container, block2, 1440, 768)


// block 3

const block3Container = document.querySelector('.wedding2022-block3-container');
const block3 = document.querySelector('.wedding2022-block3');

containerSizeFunc(block3Container, block3, 1440, 768)

getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.2/jquery.min.js', () => {
    getScript('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', () => {
        $('.owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    center: true,
                },
                550: {
                    items: 2,
                    center: true,
                },
                769: {
                    items: 3,
                    loop: false
                }
            }
        })

        const prevArrow = document.querySelectorAll(".owl-prev");
        const nextArrow = document.querySelectorAll(".owl-next");

        for (let x = 0; x < 3; x++) {
            prevArrow[0].innerHTML = `
            <span class="material-symbols-outlined">
            arrow_back
            </span>
        
                `

            nextArrow[0].innerHTML = `
            <span class="material-symbols-outlined">
            arrow_forward
            </span>
        
                `
        }
    })
})

// block 4

const block4Container = document.querySelector('.wedding2022-block4-container');
const block4 = document.querySelector('.wedding2022-block4');

containerSizeFunc(block4Container, block4, 1440, 768)