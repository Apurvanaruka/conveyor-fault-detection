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
        <div className="container mx-auto my-8">
            <h1 className="text-4xl font-bold text-center mb-8">Fault Pulley Prediction</h1>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                {/* ... Your form input fields ... */}
                <div className="mb-4">
                    <label className="text-2xl">
                        1. Select Machine Type
                        <input
                            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            type="text"
                            name="q0"
                            value={formData.data.q0}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <label className='text-2xl' >
                    2 .Enter Belt Life (hrs)
                    <br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"

                        type="text"
                        name="q1"
                        value={formData.data.q1}
                        onChange={handleInputChange}
                    />
                </label  >
                <br />

                <label className='text-2xl' >
                    3. Select Belt Material
                    <br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q2"
                        value={formData.data.q2}
                        onChange={handleInputChange}
                    />
                </label  >
                <br />
                <label className='text-2xl'>
                    4. Enter Motor Speed (rpm) <br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q3"
                        value={formData.data.q3}
                        onChange={handleInputChange}
                    />
                </label  >
                <br />

                <label className='text-2xl' >
                    5. operating temperature  (°C)<br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q4"
                        value={formData.data.q4}
                        onChange={handleInputChange}
                    />
                </label  >
                <br />

                <label className='text-2xl' >
                    6. Enter ZSS Vibration (mm/s) <br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q5"
                        value={formData.data.q5}
                        onChange={handleInputChange}
                    />
                </label  >
                <br />

                <label className='text-2xl' >
                    7. Enter BSSS value (dB)
                    <br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q6"
                        value={formData.data.q6}
                        onChange={handleInputChange}
                    />
                </label  >
                <br />
                <label className='text-2xl' >
                    8. Enter Belt Width (mm)<br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q7"
                        value={formData.data.q7}
                        onChange={handleInputChange}
                    />
                </label  >
                <br />

                <label className='text-2xl' >
                    9. Tension (N)  <br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q8"
                        value={formData.data.q8}
                        onChange={handleInputChange}
                    /> 
                </label  >
                <br />

                <label className='text-2xl' >
                    10. Alignment  <br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q9"
                        value={formData.data.q9}
                        onChange={handleInputChange}
                    />
                </label  >
                <br />
                <label className='text-2xl' >
                    11. Enter Motor Load (kW) <br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q10"
                        value={formData.data.q10}
                        onChange={handleInputChange}
                    />
                </label  >
                <br />

                <label className='text-2xl' >
                    12. Belt Thickness (mm)<br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q11"
                        value={formData.data.q11}
                        onChange={handleInputChange}
                    /> 
                </label  >
                <br />

                <label className='text-2xl' >
                    13. Lubricant Type <br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q12"
                        value={formData.data.q12}
                        onChange={handleInputChange}
                    />
                </label  >
                <br />

                <label className='text-2xl' >
                    14. Lubricant Frequency (months)
                    <br />
                    <input className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q13"
                        value={formData.data.q13}
                        onChange={handleInputChange}
                    />
                </label >
                <br />

                <label className='text-2xl'>
                    15. Lubricant level (%)<br />
                    <input
                        className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        name="q14"
                        value={formData.data.q14}
                        onChange={handleInputChange}
                    />
                </label>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div className="mt-8">
                <h1>{data}</h1>
            </div>
        </div>
    );
};

export default MyForm;
