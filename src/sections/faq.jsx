import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-green-100 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black text-center">Frequently <span className="text-black">Asked Questions</span></h2>

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
      mode: "snap",
      loop:true,
      slides: {
        origin: "center",
        perView: 2,
        spacing: 20,
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
    <div className="flex center">
      
    </div>
      <div ref={sliderRef} className="keen-slider">
        <img src="/images/h2-gallery1.jpg" alt="h2-gallery1" className="keen-slider__slide  max-h-116"/>
        <img src="/images/h2-gallery2.jpg" alt="h2-gallery2" className="keen-slider__slide  max-h-116"/>
        <img src="/images/h2-gallery3.jpg" alt="h2-gallery3" className="keen-slider__slide  max-h-116"/>
      </div>
    </>
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
        <img src="/images/h2-insta-img1.jpg" alt="h2-insta-img1" className="keen-slider__slide number-slide1 max-h-71"/>
        <img src="/images/h2-insta-img2.jpg" alt="h2-insta-img2" className="keen-slider__slide number-slide1 max-h-71"/>
        <img src="/images/h2-insta-img3.jpg" alt="h2-insta-img3" className="keen-slider__slide number-slide1 max-h-71"/>
        <img src="/images/h2-insta-img4.jpg" alt="h2-insta-img4" className="keen-slider__slide number-slide1 max-h-71"/>
        <img src="/images/h2-insta-img5.jpg" alt="h2-insta-img5" className="keen-slider__slide number-slide1 max-h-71"/>
      </div>
    </>
  )
}
export {FAQ, Slider, Slider2};
