import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import { useEffect } from 'react'
import AnimationBacking from './components/AnimationBacking'

function App() {
  const animateOnObserver = new IntersectionObserver((entries) => {
    console.log("test")
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visibilityVisible')
        // entry.target.classList.remove('animateOn')
      }
    })
  })
  useEffect(() => {
    document.querySelectorAll('.animateOn').forEach((el) => {animateOnObserver.observe(el)})
  }, [])

  addEventListener("mousedown", (event) => {document.querySelectorAll(".tutorial")?.forEach((item) => {item.classList.add("opacity-0")}); console.log("hello world")});

  return (
    <div className='App flex flex-col text-justify items-center md:visible overflow-x-hidden'>
      <Canvas>
        <color attach="background" args={["#010101"]} />
        <fog attach="fog" args={['#010101', 4, 25]} />
        <Experience />
      </Canvas>
      <div className='absolute md:top-64 md:left-[80px] top-8 md:ml-0 notSmallWide -ml-20'>
        <h1 className='animateOn textFont text-white text-3xl md:text-6xl font-semibold'>The Transistor,</h1>
        <p className='textFont text-white animateOn md:w-fit w-4/5 md-ml-0 ml-3 mr-2 mt-4 text-left'>A marvel of digital computers, With each year the transistor<br /> grows smaller and computers get more powerful each time.<br /> <br /> Scroll down to find out more!</p>
      </div>
      <h1 className='absolute tutorial top-[400px] right-16 text-4xl textFont text-white hideIfSmall'><span className="material-symbols-outlined text-2xl mr-4">radio_button_checked</span>Click and drag to move</h1>
      <div className='bg-white flex flex-col textFont w-[100vw] absolute p-8 top-[100%] overflow-hidden z-10'>
        <p className='w-full text-center font-semibold text-xl'>Transistor History:</p>
        <div className='flex md:flex-col md:items-center md:mt-8'>
          <div className='rounded-full border-2 border-black md:w-[99%] md:h-1 border-solid h-[280px]'></div>
          <div className='flex flex-col ml-1 md:flex-row'>
            <p className='md:mt-2 text-left border-b-2 md:border-b-0 md:pt-2 relative pl-7 border-solid pr-2 border-black border-1'><span className="ml-2 md:mr-1 absolute -left-1 material-symbols-outlined">arrow_outward</span>1947 The first Transistor - the point-contact transistor</p>
            <p className='md:mt-2 text-left border-b-2 md:border-b-0 md:pt-2 relative pl-7 border-solid pr-2 border-black border-1'><span className="ml-2 md:mr-1 absolute -left-1 material-symbols-outlined">arrow_outward</span>1954 The first computer with transistors - <span><a href='https://en.wikipedia.org/wiki/TRADIC'>Tradic</a></span></p>
            <p className='md:mt-2 text-left border-b-2 md:border-b-0 md:pt-2 relative pl-7 border-solid pr-2 border-black border-1'><span className="ml-2 md:mr-1 absolute -left-1 material-symbols-outlined">arrow_outward</span>1955 The first Transistorised Car Radio</p>
            <p className='md:mt-2 text-left border-b-2 md:border-b-0 md:pt-2 relative pl-7 border-solid pr-2 border-black border-1'><span className="ml-2 md:mr-1 absolute -left-1 material-symbols-outlined">arrow_outward</span>1960 The first Transistor TV</p>
            <p className='md:mt-2 text-left md:pt-2 relative pl-7 pr-2'><span className="ml-2 md:mr-1 absolute -left-1 material-symbols-outlined">arrow_outward</span>1965 Moore's Law is created: The number of tranistors in an integrated circuit doubles every two years</p>
          </div>
        </div>
        <p className='font-semibold text-xl mt-4'>How do Transistors Work?</p>
        <p className='text-justify'>Transistors work by having three different sections of doped semiconductors, Each section represents either the emitter, the base or the collector, in between these sections there are junctions which are essentially areas with no free electrons. Now, when current flows the middle section gets holes in it, essentially making more areas with a lack of electrons. this makes it positively charged and it attracts the electrons from the junction near it shrinking the area of no free electrons (the junction) to make it possible for electron flow across it to the base, now that electrons are flowing across these holes they fill some of them and jump across to the next holes as the opposite section has a positively charged junction because the electrons left it earlier, so they flow through to the other side as well as the base. </p>
      </div>
      <div className='absolute top-[1930px] md:top-[1400px] w-[100vw] bg-white textFont'>
        <p></p>
        <p></p>
        <div className='App'>
          <div className='textFont rounded-md md:h-3/4 h-full md:w-1/4 md:absolute w-full z-10 top-[100px] md:top-16 left-6 p-3 bg-white'>
            <h1 className='text-2xl md:mt-0 mt-16'>What they do:</h1>
            <p>As demonstrated by the animation, the transistor works like a switch controlled by electricty, it has three pins, the emitter on the left, the collector on the right and the base in the middle, since it is like a switch it has to turn off, in its off state (When the green arrow does not flow all the way to the leftpin) it wont let current through, however should you pass a current through the base and collector the current from the emitter will also be allowed through amplifying the strength of the current, So not only does it act as a switch but also a tiny amplifier! Note that in the animation we are assuming current flows from positive to negative.<br /> <br /><span className='hideIfSmall'><span className='text-2xl'>Why is this useful?</span><br /> This is useful because it allows us to amplify electrical signals such as the ones present in a car radio, as the transistor acts as a switch it can selectively let a higher current through when a radios electrical signals are present and since it can switch on and off very quickly it allows for very precise amplification with little distortion which is vital for a car radio. As well as this the switching mechanism means that logic gates for boolean logic can be made of them, for example in the animation on the right, both the middle pin and rightmost pin must have a current to make a large output, this is the equivalent to AND gates.</span></p>
          </div>
          <div className='z-0 anim absolute top-[660px] h-64 md:h-full md:static md:top-0'>
            <h1 className='absolute tutorial top-[400px] z-10 right-16 text-4xl textFont text-white hideIfSmall'><span className="material-symbols-outlined text-2xl mr-4">radio_button_checked</span>Click and drag to move</h1>
              <Canvas>
                <color attach="background" args={["#010101"]} />
                <AnimationBacking />
              </Canvas>
            <p className='mt-2 p-4 md:collapse'><span className='text-2xl'>Why is this useful?</span><br /> This is useful because it allows us to amplify electrical signals such as the ones present in a car radio, as the transistor acts as a switch it can selectively let a higher current through when a radios electrical signals are present and since it can switch on and off very quickly it allows for very precise amplification with little distortion which is vital for a car radio. As well as this the switching mechanism means that logic gates for boolean logic can be made of them, for example in the animation on the Top, both the middle pin and rightmost pin must have a current to make a large output, this is the equivalent to an AND logic gate.</p>
            <div className='textFont flex ml-4 mb-8 p-2 md:collapse md:h-0'>
              <p className='w-full text-4xl mt-2'>Created by Jakub Szamuk</p>
              <p className='w-full text-right mt-2 mr-4'>For the 2023 Eurekas Competition</p>
            </div>
          </div>
        </div>
        <div className='textFont flex ml-4 mb-8 p-2 text-white md:text-black bg-white'>
          <p className='w-full text-4xl mt-2 md:mt-16'>Created by Jakub Szamuk</p>
          <p className='w-full text-right mt-2 md:mt-16 mr-4'>For the 2023 Eurekas Competition</p>
        </div>
      </div>
    </div>
  )
}

export default App
