import React from 'react';
import './Factorization.css';

const tex = String.raw`\[a{x^2} + bx + c\]`

const Factorization = () => {
	return (
		<div className='w-100 notes w-90-ns br2'>
        <div className='testing'>
          <h1>Factorization</h1>
        </div>
        <div className='testing'>
          <h3>{`Factorizing Trinomials`}</h3>
        </div>
        <h3>{tex}</h3>
        <p>{`a, b and c are constants. To solve Trinomials, use the quadratic equation.`}</p>
        <h3>{String.raw`\[x = \frac{{ - b \pm \sqrt {{b^2} - 4ac} }}{{2a}}\]`}</h3>
        <p className=" br2 w-60-ns center alert alert-danger" role="alert">{`Note: The + and - signs indicates that there are two solutions`}</p>
        <p className='f4 underline'>Summarized steps to solving equations</p>
        <div className='step'>
          <dt className="dib b">1. Transposing:</dt>
          <dd className="dib ml0 gray">Every variable that moves across the equal sign changes it's sign</dd>
          <p className='example'>Example: {String.raw`\[{x^2} = 4x + 8\]`}</p>
          <p>Transposed: {String.raw`\[{x^2} - 4x - 8 = 0\]`}</p>
          <p className='i'>Note how {String.raw`\[ + 4x\]`} and {String.raw`\[ + 8\]`} changed to {String.raw`\[ - 4x\]`} and {String.raw`\[ - 8 \]`} </p>
        </div>
        <div className='step'>
          <dt className="dib b">2. Multiplying out brackets:</dt>
          <dd className="dib ml0 gray">A variable outside the brackets multiplies all the variables in the bracktes</dd>

          <p className='example'>Example: {String.raw`\[x(x + 1)\]`}</p>
          <p>variable {String.raw`\[ x \]`} will multiply the two variables {String.raw`\[ ( x \]`}  and {String.raw`\[ 1 ) \]`} inside the brackets: {String.raw`\[{x^2} + x\]`}</p>
      
          <p className='example'>Example Two: {String.raw`\[(x + 1)(x - 1)\]`}</p>
          <p className='i'>Each variable from one brackets must multiply every variable in the second brackets:</p>
          <p>{String.raw`\[x\]`} and {String.raw`\[ + 1\]`} from the first brackets {String.raw`\[(x + 1)\]`} will multiply {String.raw`\[x\]`} and {String.raw`\[ - 1\]`} from the second brackets {String.raw`\[(x - 1)\]`}</p>
          <p className='i'>Result</p>
          <p className=''>{String.raw`\[{x^2} - x + x - 1\]`}</p>
          <p className=''>= {String.raw`\[{x^2} - 1\]`}</p>
          <p className='i'></p>
        </div>

        <div className='step'>
          <dt className="dib b">3. Simplifying square roots:</dt>
          <dd className="dib ml0 gray">A square root cancels a square and vice-versa</dd>
          <p className='example'>Example: {String.raw`\[\sqrt {x + 1} \; = \;4x + 1\]`}</p>
          <p>1. Cancel the square root by squaring both sides of the equation</p>
          <p>{String.raw`\[{(\sqrt {x + 1} )^2} = {(4x + 1)^2}\]`}</p>
          <p className='i'>Result</p>
          <p className='i'>{String.raw`\[x + 1 = (4x + 1)(4x + 1)\]`}</p>
          <p className=''>Apply <strong>step 2: Multiplying out brackets</strong> to the right hand side of the equation</p>
          <p className='i'>Result</p>
          <p className='i'>{String.raw`\[x + 1 = 16{x^2} + 4x + 4x + 1\]`}</p>
          <p className='i'>{String.raw`\[x + 1 = 16{x^2} + 8x + 1\]`}</p>
          <p className=''>Apply <strong>step 1: Transposing</strong> to the above equation</p>
          <p className='i'>Result</p>
          <p className='i'>{String.raw`\[16{x^2} + 8x + 1 - x - 1\]`}</p>
          <p className='i'>{String.raw`\[16{x^2} + 7x\]`}</p>
        </div>
        <div>
          <button className='pa3 br2'>Take a Quiz</button>
        </div>
      </div>
	)
}

export default Factorization;