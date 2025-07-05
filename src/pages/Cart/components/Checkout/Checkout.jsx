import InputCustom from '@components/InputCommon2/Input';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import cls from 'classnames';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import RightBody from '@pages/Cart/components/Checkout/RightBody';
import { createOrder } from '@/apis/orderService';
import { useNavigate } from 'react-router-dom';
import { StepperContext } from '@contexts/StepperProvider';
import { SideBarContext } from '@contexts/SideBarProvider';
import { deleteCart } from '@/apis/cartService';

const CN_BASE = 'https://countriesnow.space/api/v0.1';
function Checkout() {
    const dataOptions = [
        { value: 'USA', label: 'United States' },
        { value: 'CAN', label: 'Canada' },
        { value: 'MEX', label: 'Mexico' }
    ];

    const { container, title, coupon, leftBody, rightBody, row, row2Column } =
        styles;

    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const navigate = useNavigate();
    const { setCurrentStep } = useContext(StepperContext);

    const { currentStep } = useContext(StepperContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const formRef = useRef();

    // console.log(errors);

    const handleExternalSubmit = () => {
        formRef.current.requestSubmit();
    };

    const onSubmit = async (data) => {
        try {
            const res = await createOrder(data);
            setCurrentStep(3);
            navigate(
                `/cart?id=${res.data.data._id}&totalAmount=${res.data.data.totalAmount}`
            );
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(() => {
    //     if (currentStep === 2) {
    //         axios.get(`/api/cart?userId=${userId}`).then((res) => {
    //             setListProductCart(res.data?.cart || []);
    //         });
    //     }
    // }, [currentStep]);

    useEffect(() => {
        axios.get(`${CN_BASE}/countries/iso`).then((res) =>
            setCountries(
                res.data.data.map((c) => ({
                    value: c.name,
                    label: c.name
                }))
            )
        );
    }, []);

    // useEffect(() => {
    //     if (!watch('country')) return;

    //     if (
    //         watch('country') === 'Vietnam' &&
    //         !localStorage.getItem('listCities')
    //     ) {
    //         axios
    //             .get('https://provinces.open-api.vn/api/?depth=2')
    //             .then((res) => {
    //                 localStorage.setItem(
    //                     'listCities',
    //                     JSON.stringify(res.data)
    //                 );

    //                 setCities(
    //                     res.data.data.map((item) => ({
    //                         label: item.name,
    //                         value: item.codename
    //                     }))
    //                 );
    //             });

    //         return;
    //     }

    //     if (localStorage.getItem('listCities')) {
    //         const data = JSON.parse(localStorage.getItem('listCities'));
    //         setCities(
    //             data.map((item) => ({
    //                 label: item.name,
    //                 value: item.codename
    //             }))
    //         );
    //     }
    // }, [watch('country')]);

    useEffect(() => {
        const selectedCountry = watch('country');
        if (!selectedCountry) return;

        const loadCitiesFromLocal = () => {
            const data = JSON.parse(localStorage.getItem('listCities'));
            if (data) {
                setCities(
                    data.map((item) => ({
                        label: item.name,
                        value: item.codename
                    }))
                );
            }
        };

        if (selectedCountry === 'Vietnam') {
            const cached = localStorage.getItem('listCities');
            if (!cached) {
                axios
                    .get('https://provinces.open-api.vn/api/?depth=2')
                    .then((res) => {
                        localStorage.setItem(
                            'listCities',
                            JSON.stringify(res.data)
                        );
                        setTimeout(() => {
                            loadCitiesFromLocal(); // đảm bảo gọi sau khi localStorage đã lưu xong
                        }, 0);
                    });
            } else {
                loadCitiesFromLocal();
            }
        } else {
            // Nếu là quốc gia khác, có thể setCities([]) hoặc logic tương ứng
            setCities([]);
        }
    }, [watch('country')]);

    useEffect(() => {
        if (!watch('cities')) return;

        if (localStorage.getItem('listCities')) {
            const data = JSON.parse(localStorage.getItem('listCities'));
            const statesCustom = data
                .find((item) => item.codename === watch('cities'))
                .districts.map((item) => ({
                    label: item.name,
                    value: item.codename
                }));

            setStates(statesCustom);
        }
    }, [watch('cities')]);

    return (
        <div className={container}>
            <div className={leftBody}>
                <p className={coupon}>
                    Have a coupon? <span>Click here to enter</span>
                </p>

                <p className={title}>BILLING DETAILS</p>

                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cls(row, row2Column)}>
                        <InputCustom
                            label={'First Name'}
                            type={'text'}
                            isRequired
                            register={register('firstName', {
                                required: true,
                                maxLength: 25
                            })}
                            isError={errors.firstName}
                        />
                        <InputCustom
                            label={'Last Name'}
                            type={'text'}
                            isRequired
                            register={register('lastName', {
                                required: true,
                                maxLength: 25
                            })}
                            isError={errors.lastName}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'Company Name (optional)'}
                            type={'text'}
                            register={register('companyName')}
                        />
                    </div>

                    <div>
                        <InputCustom
                            label={'Country / Region'}
                            dataOptions={countries}
                            isRequired
                            register={register('country', {
                                required: true
                            })}
                            isError={errors.country}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'Street address'}
                            type={'text'}
                            isRequired
                            register={register('street', {
                                required: true
                            })}
                            isError={errors.street}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'apartment'}
                            type={'text'}
                            isShowLabel={false}
                            register={register('apartment')}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'Town / City'}
                            dataOptions={cities}
                            isRequired
                            register={register('cities', { required: true })}
                            isError={errors.cities}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'State'}
                            dataOptions={states}
                            isRequired
                            register={register('state', {
                                required: true
                            })}
                            isError={errors.state}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'Phone'}
                            type={'text'}
                            isRequired
                            register={register('phone', {
                                required: true
                            })}
                            isError={errors.phone}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'ZIP Code'}
                            type={'text'}
                            isRequired
                            register={register('zipCode', {
                                required: true
                            })}
                            isError={errors.zipCode}
                        />
                    </div>

                    <div className={row}>
                        <InputCustom
                            label={'Email Address'}
                            type={'text'}
                            isRequired
                            register={register('email', {
                                required: true
                            })}
                            isError={errors.email}
                        />
                    </div>
                </form>
            </div>

            <RightBody handleExternalSubmit={handleExternalSubmit} />
        </div>
    );
}

export default Checkout;
