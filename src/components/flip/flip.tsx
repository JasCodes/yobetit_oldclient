// import React, {
//   SFC,
//   useState,
//   useEffect,
//   useLayoutEffect,
//   useCallback,
// } from 'react'
// import { gsap } from 'gsap'
// // import FlipMove from 'react-flip-move'
// // import { Flipper, Flipped } from 'react-flip-toolkit'
// import { useSimpleFlip, useFlipGroup } from 'react-easy-flip'

// interface FlipProp {}

// const Flip: SFC<FlipProp> = props => {
//   // let el
//   // // gsap.to(el, 0.5, {})
//   // const [a, sa] = useState(['a', 'b', 'c', 'd', 'e', 'f'])
//   // const [count, setCount] = useState(0)
//   // useLayoutEffect(() => {
//   //   gsap.to(el, { duration: 0.5, height: 'auto' })
//   // }, [a])
//   // return (
//   //   <>
//   //     <Flipper flipKey={a.toString()}>
//   //       <Flipped flipKey="hi">
//   //         <div
//   //           style={{ background: 'green' }}
//   //           onClick={() => {
//   //             const x = [...a]
//   //             x.pop()
//   //             sa(x)
//   //             gsap.to(el, { duration: 0.5, height: 'auto' })
//   //           }}
//   //           ref={e => {
//   //             el = e
//   //           }}
//   //         >
//   //           {a.map(x => (
//   //             <Flipped key={x} flipId={x}>
//   //               <div style={{ fontSize: 40 }}>{x}</div>
//   //             </Flipped>
//   //           ))}
//   //         </div>
//   //       </Flipped>
//   //     </Flipper>
//   //   </>
//   // )
//   // let el
//   const shuffle = function shuffle(arr: []) {
//     for (const i in arr) {
//       const j = Math.floor(Math.random() * (i + 1))
//       const tmp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = tmp
//     }
//     return arr
//   }

//   const itemCollection = [
//     { id: 'a', text: 'This is random string number 1' },
//     { id: 'b', text: 'This is random string number 2' },
//     { id: 'c', text: 'This is random string number 3' },
//     { id: 'd', text: 'This is random string number 4' },
//     { id: 'e', text: 'This is random string number 5' },
//     { id: 'f', text: 'This is random string number 6' },
//     { id: 'g', text: 'This is random string number 7' },
//     { id: 'h', text: 'This is random string number 8' },
//     { id: 'i', text: 'This is random string number 9' },
//   ]
//   const [items, setItems] = useState(itemCollection)
//   const [buttonClickable, setButtonClickable] = useState(true)
//   const flipId = 'flipRoot'
//   const onTransitionEnd = useCallback(() => {
//     setButtonClickable(true)
//   }, [])

//   useFlipGroup({
//     flipId,
//     opts: { duration: 700, easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' },
//     onTransitionEnd,
//     deps: items,
//   })

//   const shuffleItems = function shuffleItems() {
//     const result = shuffle([...items])
//     setItems(result)
//     setButtonClickable(false)
//   }

//   const sortItems = function sortItems() {
//     const result = [...items].sort(
//       (a, b) => a.id.charCodeAt(0) - b.id.charCodeAt(0)
//     )
//     setItems(result)
//     setButtonClickable(false)
//   }

//   return (
//     <div className="container">
//       <section>
//         <button
//           type="button"
//           disabled={!buttonClickable}
//           className="shuffle"
//           onClick={shuffleItems}
//         >
//           Shuffle
//         </button>
//         <button
//           type="button"
//           disabled={!buttonClickable}
//           className="shuffle"
//           onClick={sortItems}
//         >
//           Sort
//         </button>
//       </section>
//       <div id={flipId} className="vroot">
//         {items.map(item => {
//           return (
//             <div className="vitem" data-id={item.id} key={item.id}>
//               {item.text}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export { Flip }
