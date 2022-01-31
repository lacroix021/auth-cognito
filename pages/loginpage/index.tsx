import React, { useState, useEffect } from 'react';
import styles from "./styles.module.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Formik, Form, Field, ErrorMessage } from "formik";


export default function LoginPage(ssr = true) {
    const [formSend, setFormSend] = useState(false);
    const [register, setRegister] = useState(false);

    useEffect(() => {

        console.log("este es el estado nuevo: " + register);
    }, [register]);


    const services = [
        { service: "Your Dashoboard" },
        { service: "Your Application" },
        { service: "Your Client" },
        { service: "Your Admin" },
        { service: "Your Proyect" }
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };




    return <div className={styles.authmain}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col12}>
                    <nav className={styles.navbar}>
                        <a href="#" className={styles.navBarBrand}>Brand Name</a>
                        <ul className={styles.navbarNav}>
                            <li className={styles.liItem}><a href="#">Documentation</a></li>
                            <li className={styles.liItem}><a href="#">SignUp</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.col8}>
                    <div className={styles.detail}>
                        <h2>Everithing</h2>
                        <h2>you need for</h2>
                        <h2>
                            <Carousel
                                arrows={false}
                                responsive={responsive}
                                autoPlay={true}
                                ssr={ssr}
                                infinite={true}
                                autoPlaySpeed={3000}
                                className={styles.carousel}
                                swipeable={false}
                            >
                                {services.map((t, i) => <div key={i} className={styles.carouselItem}>{t.service}</div>)}
                            </Carousel>
                        </h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                    </div>
                </div>
                <div className={styles.col4}>
                    <div className={styles.card}>
                        {!register ? <div className={styles.header}>
                            <p className={styles.lead}>Login to your Account</p>
                        </div>
                            :
                            <div className={styles.header}>
                                <p className={styles.lead}>Create Account</p>
                            </div>}

                        <div className={styles.body}>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: ''
                                }}
                                validate={(values) => {
                                    let errores: any = {};
                                    //validacion mail
                                    if (!values.email) {
                                        errores.email = "Put Your Email";
                                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                                        errores.email = "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";
                                    }

                                    if (!values.password) {
                                        errores.password = "Put Your Password!";
                                    }

                                    return errores;
                                }}
                                onSubmit={(values, { resetForm }) => {
                                    resetForm();
                                    console.log("formulario enviado");
                                    setFormSend(true);
                                    setTimeout(() => setFormSend(false), 5000);
                                }}
                            >
                                {({ errors }) => (
                                    <Form className={styles.containerItems}>
                                        {!register ?
                                            <div>
                                                <Field
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder={!errors.email ? "email@email.com" : errors.email}
                                                    className={styles.input}
                                                />
                                            </div>
                                            :
                                            <div>
                                                <Field
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    placeholder="username"
                                                    className={styles.input}
                                                />
                                            </div>}

                                        <div >
                                            <Field
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder={!errors.password ? "password" : errors.password}
                                                className={styles.input}
                                            />
                                        </div>
                                        {!register ?
                                            null
                                            :
                                            <div >
                                                <Field
                                                    type="password"
                                                    id="password"
                                                    name="Retype-password"
                                                    placeholder="confirm password"
                                                    className={styles.input}
                                                />
                                            </div>}
                                        {!register ?
                                            null
                                            :
                                            <div>
                                                <Field
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="email@email.com"
                                                    className={styles.input}
                                                />
                                            </div>}

                                        {!register ?
                                            <div className={styles.checkbox}>
                                                <Field
                                                    type="checkbox"
                                                    id="activar"
                                                    name="checkbox"
                                                    placeholder=""
                                                    className={styles.box}
                                                />
                                                <label htmlFor="activar"><span>Remember Me</span></label>
                                            </div>
                                            :
                                            null}
                                        {!register ?
                                            <div className={styles.buttonForm}>
                                                <button type="submit">LOGIN</button>
                                            </div>
                                            :
                                            <div className={styles.buttonForm}>
                                                <button type="submit">CREATE ACCOUNT</button>
                                            </div>}
                                        {!register ?
                                            <div className={styles.forgot}>
                                                <a href="#">Forgot your password?</a>
                                            </div> : null}
                                        {!register ?
                                            <div className={styles.register}>
                                                dont have an account? <a onClick={() => setRegister(true)}>Register</a>
                                            </div>
                                            :
                                            <div className={styles.register}>
                                                have an account? <a onClick={() => setRegister(false)}>Login</a>
                                            </div>}
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

