// import React, { useRef, useState } from 'react'
// import { data } from '../assets/data'
// import './quiz.css'


// function Quiz() {

//   const [index, setIndex] = useState(0)
//   let [questions, setQuestions] = useState(data[index])
//   let [lock, setLock] = useState(false)
//   let [score, setScore] = useState(0)
//   // let [result, setResult] = useState(false)
  

//   // correct and wrong dono work
//    let option1 = useRef(null);
//    let option2 = useRef(null);
//    let option3 = useRef(null);
//    let option4 = useRef(null);

//   let option_arry = [option1, option2, option3, option4];


//   let cheackans = (e,ans)=>{
//     if (lock === false) {
      
//       if (questions.Ans === ans) {
//           e.target.classList.add('correct')
//          setLock(true);  
//           setScore(prev => prev + 1);
//       }
//       else{
//         e.target.classList.add('wrong')
//         setLock(true);
//         option_arry[questions.Ans -1].current.classList.add('correct');
//       }

//     }
//   }

//   const next = () => {
//     if (lock === true) {
        
//       // if (index < data.length - 1) {
//       //   setResult(true)
//       //   return 0;
//       // }

//         setIndex((prevIndex) => {
//             const newIndex = prevIndex + 1;
//             setQuestions(data[newIndex]);
//             return newIndex;
//         });
//         setLock(false);
//         option_arry.map((option)=> {
//           option.current.classList.remove('correct');
//           option.current.classList.remove('wrong');
//         })
//     }
// }




//   return (
//     <>
//     <div className='h-screen w-full flex justify-center items-center'>
//           <div className='w-[40vw] border bg-white border-black min-h-32 flex justify-center flex-col items-center'>
//              <h1 className='text-3xl mb-10 mt-5 font-bold'>Quiz App</h1> 
//               <hr />
            
//              <div className='flex w-full pl-3'>
//              <h2 className='text-2xl mb-2 font- font-semibold pl-5'> {index + 1} {questions.question}</h2>
//              </div>

//              <div className='flex flex-col justify-center items-center'>
//               <ul className='m-3'>
//                 <li ref={option1} className='border border-black cursor-pointer m-2 w-[35vw] pl-4 py-3  text-xl' onClick={(e)=>{cheackans(e,1)}}>{questions.option1}</li>
//                 <li ref={option2} className='border border-black cursor-pointer m-2 w-[35vw] pl-4 py-3  text-xl' onClick={(e)=>{cheackans(e,2)}}>{questions.option2}</li>
//                 <li ref={option3} className='border border-black cursor-pointer m-2 w-[35vw] pl-4 py-3  text-xl' onClick={(e)=>{cheackans(e,3)}}>{questions.option3}</li>
//                 <li ref={option4} className='border border-black cursor-pointer m-2 w-[35vw] pl-4 py-3  text-xl' onClick={(e)=>{cheackans(e,4)}}>{questions.option4}</li>
//               </ul>
//             <button onClick={next} className='mt-5 mb-4 cursor-pointer bg-[#554f90] py-2 px-14 rounded-md text-white text-xl font-semibold hover:bg-blue-950'>Next</button>
//             <div className='text-[18px] mb-2'>{index + 1} of {data.length} Question</div>
//             </div> 

//           </div>
//       </div>
//     </>
//   )
// }

// export default Quiz























import React, { useRef, useState } from 'react'
import { data } from '../assets/data'
import './quiz.css'


function Quiz() {

  const [index, setIndex] = useState(0)
  let [questions, setQuestions] = useState(data[index])
  let [lock, setLock] = useState(false)
  let [score, setScore] = useState(0)
  let [result, setResult] = useState(false)
  

  // correct and wrong dono work
   let option1 = useRef(null);
   let option2 = useRef(null);
   let option3 = useRef(null);
   let option4 = useRef(null);

  let option_arry = [option1, option2, option3, option4];


  let cheackans = (e,ans)=>{
    if (lock === false) {
      
      if (questions.Ans === ans) {
          e.target.classList.add('correct')
         setLock(true);  
          setScore(prev => prev + 1);
      }
      else{
        e.target.classList.add('wrong')
        setLock(true);
        option_arry[questions.Ans -1].current.classList.add('correct');
      }

    }
  }

  const next = () => {
    if (lock === true) {
        
      if (index === data.length - 1) { 
        setResult(true); 
        return 0;
    }
    

        setIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            setQuestions(data[newIndex]);
            return newIndex;
        });
        setLock(false);
        option_arry.map((option)=> {
          option.current.classList.remove('correct');
          option.current.classList.remove('wrong');
        })
    }
}


   const reset = ()=>{
    setIndex(0);
    setQuestions(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
   }



  return (
    <>
    <div className='h-screen w-full flex justify-center items-center'>
          <div className='w-[40vw] border bg-white border-black min-h-32 flex justify-center flex-col items-center'>
             <h1 className='text-3xl mb-10 mt-5 font-bold'>Quiz App</h1> 
              <hr />
              {result ? <></> : <> <div className='flex w-full pl-3'>
             <h2 className='text-2xl mb-2 font-semibold pl-5'> {index + 1}{')'} {questions.question}</h2>
             </div>

             <div className='flex flex-col justify-center items-center'>
              <ul className='m-3'>
                <li ref={option1} className='border border-black cursor-pointer m-2 w-[35vw] pl-4 py-3  text-xl' onClick={(e)=>{cheackans(e,1)}}>{questions.option1}</li>
                <li ref={option2} className='border border-black cursor-pointer m-2 w-[35vw] pl-4 py-3  text-xl' onClick={(e)=>{cheackans(e,2)}}>{questions.option2}</li>
                <li ref={option3} className='border border-black cursor-pointer m-2 w-[35vw] pl-4 py-3  text-xl' onClick={(e)=>{cheackans(e,3)}}>{questions.option3}</li>
                <li ref={option4} className='border border-black cursor-pointer m-2 w-[35vw] pl-4 py-3  text-xl' onClick={(e)=>{cheackans(e,4)}}>{questions.option4}</li>
              </ul>
            <button onClick={next} className='mt-5 mb-4 cursor-pointer bg-[#554f90] py-2 px-14 rounded-md text-white text-xl font-semibold hover:bg-blue-950'>Next</button>
            <div className='text-[18px] mb-2'>{index + 1} of {data.length} Question</div>
            </div>
             </>}            
             {result ? <>
              <h2 className='text-[18px]'>You Scored: {score} out of {data.length}</h2>              
              <button onClick={reset} className='mt-5 mb-4 cursor-pointer bg-[#554f90] py-2 px-14 rounded-md text-white text-xl font-semibold hover:bg-blue-950'>Reset</button>
             </> : <></>}
             
          </div>
      </div>
    </>
  )
}

export default Quiz
