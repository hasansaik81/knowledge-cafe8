import React from 'react';

const Answer = () => {
    return (
        <div className='w-1/2 ' >
            <h3 className='text-red-500 text-xl'>1.how does work usestate?</h3>
            <p>The usestate work by handeling and managing state in your application .The first usestate takes initial value of the state  variable as its argument.the second  value set your state whick is why its always initiated as setstate.</p>
            <h3 className='text-red-500 text-xl'>2.what will be done useEffect data loading?</h3>
            <p>
                useEffect its provide way to manage side effics in functional components and can be used various scenarios where you need to be perform action when the component mount update or unmounts.

            </p>
            <h3 className='text-red-500 text-xl'>3.different between props and state?</h3>
            <p>props are used to pass data another components.state are used to  data pass local storage and local component cannot be onthe component </p>
            <h3 className='text-red-500 text-xl'>4.how does work rect ?</h3>
            <p>React relies on a virtual DOM, which is a copy of the actual DOM.</p>


        </div>
    );
};

export default Answer;