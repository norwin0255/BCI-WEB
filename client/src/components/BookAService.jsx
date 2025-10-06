import React, { useState } from 'react';
import SuccessModal from '../components/SuccessModal';

function BookAService() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState({});

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const [formData, setFormData] = useState({
        FullName: '',
        EmailAdd: '',
        Companyname: '',
        PhoneNum: '',
        Services: '',
        Product: '',
        ScheduleDate: '',
        ScheduleTime: '',
        Remarks: ''
    });

    const isEmptyOrWhitespace = (value) => {
        return !value || value.trim() === '';
    };

    const validate = () => {
        const newErrors = {};

        if (isEmptyOrWhitespace(formData.FullName)) { newErrors.FullName = 'Fullname is Required'; }
        if (isEmptyOrWhitespace(formData.EmailAdd)) { newErrors.EmailAdd = 'Email is Required'; }
        if (isEmptyOrWhitespace(formData.Companyname)) { newErrors.Companyname = 'Company Name is Required'; }
        if (isEmptyOrWhitespace(formData.PhoneNum)) { newErrors.PhoneNum = 'PhoneNum is Required'; }
        if (isEmptyOrWhitespace(formData.Services)) { newErrors.Services = 'Services is Required'; }
        if (isEmptyOrWhitespace(formData.Product)) { newErrors.Product = 'Product is Required'; }
        if (isEmptyOrWhitespace(formData.ScheduleDate)) { newErrors.ScheduleDate = 'Date is Required'; }
        if (isEmptyOrWhitespace(formData.ScheduleTime)) { newErrors.ScheduleTime = 'Time is Required'; }
        if (isEmptyOrWhitespace(formData.Remarks)) { newErrors.Remarks = 'Remarks is Required'; }

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
            const response = await fetch('http://192.168.10.18:5000/InquiriesPost/submitBookNow', {
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
                    FullName: '',
                    EmailAdd: '',
                    Companyname: '',
                    PhoneNum: '',
                    Services: '',
                    Product: '',
                    ScheduleDate: '',
                    ScheduleTime: '',
                    Remarks: ''
                });
                setIsChecked(false);
                setShowSuccess(true);
            } else {
                alert('Failed to submit inquiry');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting inquiry');
        }
    };

    const services = ['PREVENTIVE MAINTENANCE SERVICES', 'REFRIGERATION AND AC UNIT REPAIR', 'BODY AND COLLISION REPAIR']
    const product = [
        'REEFER SYSTEM TS 26 (12V)',
        'REEFER SYSTEM TS 26 (24V)',
        'REEFER SYSTEM TS 55 (12V)',
        'REEFER SYSTEM TS 55 (24V)',
        'PORTABLE AIRCON DL-1800 (12V)',
        'PORTABLE AIRCON DL-1800 (24V)',
        'PORTABLE AIRCON DL-2600F (12V)',
        'PORTABLE AIRCON DL-2600F (24V)',
        'PORTABLE AIRCON DL-2600FT (12V)',
        'PORTABLE AIRCON DL-2600FT (24V)']

    return (
        <>
            <div className="max-w-3xl mx-auto flex h-auto">
                <form action="#" method="POST" className="h-full mx-auto mt-10 w-full" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 flex w-full">
                        <div>
                            <label className="block text-sm/6 font-semibold text-gray-900">*Name {errors.FullName && <span className='text-red-500 font-normal'>{errors.FullName}</span>} </label>
                            <input
                                id="FullName"
                                type="text"
                                name="FullName"
                                placeholder='Full Name'
                                value={formData.FullName} onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>

                        <div className="">
                            <label className="block text-sm/6 font-semibold text-gray-900">*Email {errors.EmailAdd && <span className='text-red-500 font-normal'>{errors.EmailAdd}</span>} </label>
                            <input
                                id="EmailAdd"
                                type="email"
                                name="EmailAdd"
                                placeholder='Email Address'
                                value={formData.EmailAdd} onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                        <div className=''>
                            <label className="block text-sm/6 font-semibold text-gray-900">*Company Name {errors.Companyname && <span className='text-red-500 font-normal'>{errors.Companyname}</span>} </label>
                            <input
                                id="Companyname"
                                type="text"
                                name="Companyname"
                                placeholder='Company Name'
                                value={formData.Companyname} onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                        <div className="">
                            <label className="block text-sm/6 font-semibold text-gray-900">*Phone {errors.PhoneNum && <span className='text-red-500 font-normal'>{errors.PhoneNum}</span>} </label>
                            <input
                                id="PhoneNum"
                                type="text"
                                name="PhoneNum"
                                placeholder='Contact Number'
                                value={formData.PhoneNum}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                        <div className="">
                            <label className="block text-sm/6 font-semibold text-gray-900">*Service {errors.Services && <span className='text-red-500 font-normal'>{errors.Services}</span>} </label>
                            <div className="h-[38px]">
                                <select className="w-full h-full flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
                                    value={formData.Services}
                                    onChange={(e) => setFormData({ ...formData, Services: e.target.value })}>
                                    <option value="">{'--- Please choose an option ---'}</option>
                                    {services.map((services, index) => (
                                        <option key={index} value={services}>{services}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="">
                            <label className="block text-sm/6 font-semibold text-gray-900">*Product {errors.Product && <span className='text-red-500 font-normal'>{errors.Product}</span>} </label>
                            <div className="h-[38px]">
                                <select className="w-full h-full flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
                                    value={formData.Product}
                                    onChange={(e) => setFormData({ ...formData, Product: e.target.value })}>
                                    <option value="">{'--- Please choose an option ---'}</option>
                                    {product.map((product, index) => (
                                        <option key={index} value={product}>{product}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="h-full">
                            <label className="block text-sm/6 font-semibold text-gray-900">*Schedule </label>
                            <div className=" flex flex-row w-full gap-5">
                                <div className='w-full'>
                                    <label className="block text-sm/6 font-semibold text-gray-500">Date {errors.ScheduleTime && <span className='text-red-500 font-normal'>{errors.ScheduleTime}</span>} </label>
                                    <input
                                        className="items-center justify-center w-full h-[38px] flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
                                        type="date"
                                        value={formData.ScheduleDate}
                                        name="ScheduleDate"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='w-full h-full'>
                                    <label className="block text-sm/6 font-semibold text-gray-500">Time {errors.ScheduleTime && <span className='text-red-500 font-normal'>{errors.ScheduleTime}</span>} </label>
                                    <input
                                        className="items-center justify-center w-full h-[38px] flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
                                        name="ScheduleTime"
                                        value={formData.ScheduleTime}
                                        type="time"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="h-full">
                            <label className="block text-sm/6 font-semibold text-gray-900">*Remarks {errors.Remarks && <span className='text-red-500 font-normal'>{errors.Remarks}</span>} </label>
                            <div className="">
                                <textarea
                                    name="Remarks"
                                    rows="4"
                                    placeholder='Remarks'
                                    value={formData.Remarks}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mt-2.5' >
                        <label className='text-justify italic text-gray-600'>
                            * By submitting your contact information, you are allowing us to contact you through SMS, Email or Phone calls about our products and services. You also consent and agree to our privacy policy when you click on the 'Submit' button. Coolaire Consolidated, Inc. does not intentionally market to minors, hence, by submitting this request, you are confirming that you are of legal age. Coolaire understands the importance of your online privacy and your data will only be shared within the Coolaire Consolidated Inc and third-party vendors are excluded.
                        </label>
                    </div>
                    <div className='flex w-full justify-center gap-2'>
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                        <label>{' I accept the Terms and Conditions'}</label>
                    </div>
                    <div className="my-5 flex w-1/3 mx-auto h-full items-center justify-center">
                        <button type="submit" disabled={isChecked ? false : true} className={`${isChecked ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>SUBMIT</button>
                    </div>
                </form>
                <SuccessModal show={showSuccess} onClose={() => setShowSuccess(false)} />
            </div>

        </>
    )
}


export default BookAService;