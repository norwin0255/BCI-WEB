import {useState } from 'react';
import SuccessModal from '../components/SuccessModal';

export default function ContactUsInput() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        FName: '',
        LName: '',
        Company: '',
        Email: '',
        PhoneNumber: '',
        Message: ''
    });

     const isEmptyOrWhitespace = (value) => {
        return !value || value.trim() === '';
    };

    const validate = () => {
        const newErrors = {};
        if (isEmptyOrWhitespace(formData.FName)) {newErrors.FName = 'First Name is Required';}
        if (isEmptyOrWhitespace(formData.LName)) {newErrors.LName = 'Last Name is Required';}
        if (isEmptyOrWhitespace(formData.Company)) {newErrors.Company = 'Company Name is Required';}
        if (isEmptyOrWhitespace(formData.Email)) {newErrors.Email = 'Email Name is Required';}
        if (isEmptyOrWhitespace(formData.PhoneNumber)) {newErrors.PhoneNumber = 'Phone Number is Required';}
        if (isEmptyOrWhitespace(formData.Message)) {newErrors.Message = 'Message is Required';}
        return newErrors;
    };

    const handleChange = (e) => {
        //setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Clear errors on input change
        setErrors({
            ...errors,
            [e.target.name]: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        try {
            const response = await fetch('http://192.168.10.18:5000/InquiriesPost/submitInquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                // alert('Inquiry submitted successfully!');
                console.log(result);
                console.log(formData);
                setFormData({
                    FName: '',
                    LName: '',
                    Company: '',
                    Email: '',
                    PhoneNumber: '',
                    Message: ''
                });
                setShowSuccess(true);
            } else {
                alert('Failed to submit inquiry');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting inquiry');
        }
    };

    return (
        <>
            <form action="#" method="POST" className="mx-auto mt-10 max-w-xl sm:mt-15" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 flex w-full">
                    <div>
                        <label className="block text-sm/6 font-semibold text-gray-900">First name {errors.FName && <span className='text-red-500 font-normal'>{errors.FName}</span>} </label>
                        <div className="mt-2.5">
                            <input id="firstname" type="text" name="FName" placeholder='First Name' value={formData.FName} onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm/6 font-semibold text-gray-900">Last name {errors.LName && <span className='text-red-500 font-normal'>{errors.LName}</span>} </label>
                        <div className="mt-2.5">
                            <input id="lastname" type="text" name="LName" placeholder='Last Name' value={formData.LName} onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm/6 font-semibold text-gray-900">Company {errors.Company && <span className='text-red-500 font-normal'>{errors.Company}</span>} </label>
                        <div className="mt-2.5">
                            <input id="company" type="text" name="Company" placeholder='Company Name' value={formData.Company} onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm/6 font-semibold text-gray-900">Email {errors.Email && <span className='text-red-500 font-normal'>{errors.Email}</span>} </label>
                        <div className="mt-2.5">
                            <input id="email" type="email" name="Email" placeholder='Email' value={formData.Email} onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm/6 font-semibold text-gray-900">Phone number {errors.PhoneNumber && <span className='text-red-500 font-normal'>{errors.PhoneNumber}</span>} </label>
                        <div className="mt-2.5">
                            <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <input id="phone-number" type="text" name="PhoneNumber" placeholder="+63" value={formData.PhoneNumber} onChange={handleChange}
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2 h-full">
                        <label className="block text-sm/6 font-semibold text-gray-900">Message {errors.Message && <span className='text-red-500 font-normal'>{errors.Message}</span>} </label>
                        <div className="mt-2.5">
                            <textarea id="message" name="Message" rows="4" placeholder='Remarks' value={formData.Message} onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
                        </div>
                    </div>
                </div>
                <div className="my-5 flex w-full h-full items-center justify-center">
                    <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
                </div>
            </form>

            <SuccessModal show={showSuccess} onClose={() => setShowSuccess(false)} />
        </>
    )
}