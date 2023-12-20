import React, { useState } from 'react';

const Form1 = () => {
    const [formData, setFormData] = useState({
        data: {
            q0: '',
            // ... other form data
        },
    });
    const [data, setData] = useState(0);

    // Generate an array of options from 1 to 500
    const pulleyOptions = Array.from({ length: 500 }, (_, index) => (index + 1).toString());
    console.log(pulleyOptions)

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
    };

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-4xl font-bold text-center mb-8">Fault Pulley Prediction</h1>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="text-2xl">
                         Select Pulley Id
                        <select
                            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            name="q0"
                            value={formData.data.q0}
                            onChange={handleInputChange}
                        >
                            <option value="">Select...</option>
                            {pulleyOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                {/* Additional labels and inputs go here */}
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

export default Form1;
