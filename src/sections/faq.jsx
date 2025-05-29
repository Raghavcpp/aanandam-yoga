import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const FAQ = () => {
  return (
    <section id="faq" className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-black text-center">Frequently <span className="text-black">Asked Questions</span></h2>

        {/* FAQ List */}
        <div className="mt-8 space-y-6">
          {["What are the benefits of yoga?", "What should I bring to class?", "Do I need prior experience?"].map((question, index) => (
            <div key={index} className="collapse bg-white shadow-md rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-semibold text-black">{question}</div>
              <div className="collapse-content text-gray-600">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Slider = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 24 },
        },
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 20 },
        },
        "(max-width: 767px)": {
          slides: { perView: 1, spacing: 16 },
        },
      },
      slides: {
        origin: "center",
        perView: 1,
        spacing: 16,
      },
      mode: "snap",
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div className="w-full px-4">
      <div
        ref={sliderRef}
        className="keen-slider
          h-48 sm:h-64 md:h-80 lg:h-[28rem] xl:h-[32rem]"
      >
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="keen-slider__slide flex items-center justify-center overflow-hidden"
          >
            <img
              src={`/images/client_${id}.jpg`}
              alt={`client_${id}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
const Slider2 = () => {
  const [sliderRef] = useKeenSlider(
    {
      mode: "snap",
      loop:true,
      slides: {
        origin: "center",
        perView: 5,
        spacing: 60,
      },
      breakpoints: {
        "(max-width: 768px)": {  // md: 768px and below
          slides: {
            perView: 3,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide max-h-71">
          <img src="/images/h2-insta-img1.jpg" alt="h2-insta-img1" className="transition-transform duration-500 hover:scale-110 max-h-71"/>
        </div>
        <div className="keen-slider__slide max-h-71">
          <img src="/images/h2-insta-img2.jpg" alt="h2-insta-img2" className="transition-transform duration-500 hover:scale-110 max-h-71"/>
        </div>
        <div className="keen-slider__slide max-h-71">
          <img src="/images/h2-insta-img3.jpg" alt="h2-insta-img3" className="transition-transform duration-500 hover:scale-110 max-h-71"/>
        </div>
        <div className="keen-slider__slide max-h-71">
          <img src="/images/h2-insta-img4.jpg" alt="h2-insta-img4" className="transition-transform duration-500 hover:scale-110 max-h-71"/>
        </div>
        <div className="keen-slider__slide max-h-71">
          <img src="/images/h2-insta-img5.jpg" alt="h2-insta-img5" className="transition-transform duration-500 hover:scale-110 max-h-71"/>
        </div>
      </div>
    </>
  )
}
export {FAQ, Slider, Slider2};
