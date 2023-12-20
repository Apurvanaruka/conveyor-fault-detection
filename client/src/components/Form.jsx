// import { useState } from 'react';


// const Data = {
//     "data": {
//         "q0": 18, "q1": "Business", "q2": "Female",
//         "q3": 3.30, "q4": 5, "q5": 0, "q6": "Average",
//         "q7": "Moderate", "q8": "Average", "q9": "Low",
//         "q10": "Married", "q11": "Never", "q12": "Occasionally",
//         "q13": "No", "q14": "No", "q15": 5, "q16": "Moderate", "q17": 18,
//         "q18": "Off-Campus"
//     }
// }


// // {
// //     "data" : { "q0" : 8,"q1":"Industrial Robot","q2":490,"q3":"Rubber","q4":"2022-04-13","q5":4237,"q6":50.910510220023895,"q7":0.36782329229136157,"q8":103.08162657847643,"q9":0,"q10":117.1350220476453,"q11":1135.3218739878444,"q12":"Bad","q13":30.08322339413842,"q14":16.61629241909455,"q15":"Grease","q16":2,"q17":83.60789007952809
// //     }}
// async function postData(jsonData) { 

//     // const jsonData = {
//     //     "data" : { "q0" : 8,"q1":"Industrial Robot","q2":490,"q3":"Rubber","q4":"2022-04-13","q5":4237,"q6":50.910510220023895,"q7":0.36782329229136157,"q8":103.08162657847643,"q9":0,"q10":117.1350220476453,"q11":1135.3218739878444,"q12":"Bad","q13":30.08322339413842,"q14":16.61629241909455,"q15":"Grease","q16":2,"q17":83.60789007952809
//     //     }
//     // };

//     try {
//         const response = await fetch('http://127.0.0.1:8000/api/user/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json', // Use application/json for JSON data
//                 // Include any additional headers if needed
//             },
//             body: JSON.stringify(jsonData),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         // Handle the response data
//         console.log('POST request successful:', data);
//         return data
//     } catch (error) {
//         // Handle errors
//         console.error('Error making POST request:', error.message);
//     }
// }





// const MyForm = () => {
//     // Define state variables to store form data
//     const [formData, setFormData] = useState({
//         "data" : {
//             'q0': '',
//             'q1': '',
//             'q2': '',
//             'q3': '',
//             'q4': '',
//             'q5': '',
//             'q6': '',
//             'q7': '',
//             'q8': '',
//             'q9': '',
//             'q10': '',
//             'q11': '',
//             'q12': '',
//             'q13': '',
//             'q14': '',
//             'q15': '',

//         }
//     });
//     const [ data, setData ] = useState(0);

//     // Handle form input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };
//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Perform actions with the form data, e.g., send it to a server
//         // console.log('Form data submitted:', formData);
//         // console.log(formData);
//         const temp = postData(formData);

//         setData(temp.score);
//         console.log(formData);
//     };



//     return (
//         <div className='m-40' key={1}>
//             <h1 className='text-6xl m-10'>Fault Pulley Prediction</h1>
//             <div className='m-10'>

//                 <form onSubmit={handleSubmit}>
//                     <label className='text-2xl'  >
//                         1. Select Machine Type
//                         <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q0"
//                             value={formData.data.q0}
//                             onChange={handleInputChange}
//                         /> 
//                     </label  >
//                     <br />

//                     <label className='text-2xl' >
//                         2 .Enter Belt Life
//                         <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q1"
//                             value={formData.data.q1}
//                             onChange={handleInputChange}
//                         />hrs
//                     </label  >
//                     <br />

//                     <label className='text-2xl' >
//                         3. Select Belt Material
//                         <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q2"
//                             value={formData.data.q2}
//                             onChange={handleInputChange}
//                         />
//                     </label  >
//                     <br />
//                     <label className='text-2xl' >
//                         4. Enter Motor Speed <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q3"
//                             value={formData.data.q3}
//                             onChange={handleInputChange}
//                         />(rpm)
//                     </label  >
//                     <br />

//                     <label className='text-2xl' >
//                         5. operating temperature <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q4"
//                             value={formData.data.q4}
//                             onChange={handleInputChange}
//                         /> (°C)
//                     </label  >
//                     <br />

//                     <label className='text-2xl' >
//                         6. Enter ZSS Vibration <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q5"
//                             value={formData.data.q5}
//                             onChange={handleInputChange}
//                         />(mm/s)
//                     </label  >
//                     <br />

//                     <label className='text-2xl' >
//                         7. Enter BSSS value
//                         <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q6"
//                             value={formData.data.q6}
//                             onChange={handleInputChange}
//                         />(dB)
//                     </label  >
//                     <br />
//                     <label className='text-2xl' >
//                         8. Enter Belt Width <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q7"
//                             value={formData.data.q7}
//                             onChange={handleInputChange}
//                         />(mm)
//                     </label  >
//                     <br />

//                     <label className='text-2xl' >
//                         9. Tension   <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q8"
//                             value={formData.data.q8}
//                             onChange={handleInputChange}
//                         /> (N)
//                     </label  >
//                     <br />

//                     <label className='text-2xl' >
//                         10. Alignment  <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q9"
//                             value={formData.data.q9}
//                             onChange={handleInputChange}
//                         />
//                     </label  >
//                     <br />
//                     <label className='text-2xl' >
//                         11. Enter Motor Load <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q10"
//                             value={formData.data.q10}
//                             onChange={handleInputChange}
//                         />(kW)
//                     </label  >
//                     <br />

//                     <label className='text-2xl' >
//                         12. Belt Thickness <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q11"
//                             value={formData.data.q11}
//                             onChange={handleInputChange}
//                         /> (mm)
//                     </label  >
//                     <br />

//                     <label className='text-2xl' >
//                         13. Lubricant Type <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q12"
//                             value={formData.data.q12}
//                             onChange={handleInputChange}
//                         />
//                     </label  >
//                     <br />

//                     <label className='text-2xl' >
//                         14. Lubricant Frequency
//                         <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q13"
//                             value={formData.data.q13}
//                             onChange={handleInputChange}
//                         />(months)
//                     </label  >
//                     <br />
//                     <label className='text-2xl' >
//                         15. Lubricant level <br />
//                         <input className='bg-gray-200'
//                             type="text"
//                             name="q14"
//                             value={formData.data.q14}
//                             onChange={handleInputChange}
//                         />(%)
//                     </label  >
//                     <br />


//                     <button type="submit" className='bg-blue-500 p-2 m-2' >Submit</button>
//                 </form>

//             </div>
//             <div key={2}>
//                 {console.log(data)}
//                 <h1>{data}</h1>
//             </div>
//         </div>

//     );
// };

// export default MyForm;

import { useState } from 'react';

const MyForm = () => {
    const initialFormData = {
        data: {
            q0: '',
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: '',
            q11: '',
            q12: '',
            q13: '',
            q14: '',
            q15: '',
        },
    };

    const [formData, setFormData] = useState(initialFormData);
    const [data, setData] = useState(0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            data: {
                ...formData.data,
                [name]: value,
            },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const temp = await postData(formData);
            setData(temp.score);
            console.log('Form data submitted:', formData);
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

    const postData = async (jsonData) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('POST request successful:', data);
            return data;
        } catch (error) {
            console.error('Error making POST request:', error.message);
            throw error;
        }
    }

    return (
        <div className='m-40' key={1}>
            <h1 className='text-6xl m-10'>Fault Pulley Prediction</h1>
            <div className='m-10'>
                <form onSubmit={handleSubmit}>
                    <label className='text-2xl'  >
                        1. Select Machine Type
                        <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q0"
                            value={formData.data.q0}
                            onChange={handleInputChange}
                        />
                    </label  >
                    <br />

                    <label className='text-2xl' >
                        2 .Enter Belt Life
                        <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q1"
                            value={formData.data.q1}
                            onChange={handleInputChange}
                        />hrs
                    </label  >
                    <br />

                    <label className='text-2xl' >
                        3. Select Belt Material
                        <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q2"
                            value={formData.data.q2}
                            onChange={handleInputChange}
                        />
                    </label  >
                    <br />
                    <label className='text-2xl' >
                        4. Enter Motor Speed <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q3"
                            value={formData.data.q3}
                            onChange={handleInputChange}
                        />(rpm)
                    </label  >
                    <br />

                    <label className='text-2xl' >
                        5. operating temperature <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q4"
                            value={formData.data.q4}
                            onChange={handleInputChange}
                        /> (°C)
                    </label  >
                    <br />

                    <label className='text-2xl' >
                        6. Enter ZSS Vibration <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q5"
                            value={formData.data.q5}
                            onChange={handleInputChange}
                        />(mm/s)
                    </label  >
                    <br />

                    <label className='text-2xl' >
                        7. Enter BSSS value
                        <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q6"
                            value={formData.data.q6}
                            onChange={handleInputChange}
                        />(dB)
                    </label  >
                    <br />
                    <label className='text-2xl' >
                        8. Enter Belt Width <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q7"
                            value={formData.data.q7}
                            onChange={handleInputChange}
                        />(mm)
                    </label  >
                    <br />

                    <label className='text-2xl' >
                        9. Tension   <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q8"
                            value={formData.data.q8}
                            onChange={handleInputChange}
                        /> (N)
                    </label  >
                    <br />

                    <label className='text-2xl' >
                        10. Alignment  <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q9"
                            value={formData.data.q9}
                            onChange={handleInputChange}
                        />
                    </label  >
                    <br />
                    <label className='text-2xl' >
                        11. Enter Motor Load <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q10"
                            value={formData.data.q10}
                            onChange={handleInputChange}
                        />(kW)
                    </label  >
                    <br />

                    <label className='text-2xl' >
                        12. Belt Thickness <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q11"
                            value={formData.data.q11}
                            onChange={handleInputChange}
                        /> (mm)
                    </label  >
                    <br />

                    <label className='text-2xl' >
                        13. Lubricant Type <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q12"
                            value={formData.data.q12}
                            onChange={handleInputChange}
                        />
                    </label  >
                    <br />

                    <label className='text-2xl' >
                        14. Lubricant Frequency
                        <br />
                        <input className='bg-gray-200'
                            type="text"
                            name="q13"
                            value={formData.data.q13}
                            onChange={handleInputChange}
                        />(months)
                    </label >
                    <br />

                    <label className='text-2xl'>
                        15. Lubricant level <br />
                        <input
                            className='bg-gray-200'
                            type="text"
                            name="q14"
                            value={formData.data.q14}
                            onChange={handleInputChange}
                        /> (%)
                    </label>
                <br />

                    <button type="submit" className='bg-blue-500 p-2 m-2'>
                        Submit
                    </button>
                </form>
            </div>

        </div>

    );
};

export default MyForm;
