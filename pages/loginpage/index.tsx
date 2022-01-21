import React, { useState } from 'react';
import styles from "./styles.module.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Formik, Form, Field } from "formik";


export default function LoginPage(ssr = true) {
    const [formSend, setFormSend] = useState(false)


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
                        <div className={styles.header}>
                            <p className={styles.lead}>Login to your Account</p>
                        </div>
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

                                        <div className={styles.inputCont}>
                                            <label htmlFor="email">E-mail</label>
                                            <Field
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder=" email@email.com"
                                                className={styles.input}
                                            />
                                            {!errors.email ? <span className={styles.noError}></span> : <span className={styles.error}>{errors.email}</span>}

                                        </div>
                                        <div className={styles.inputMessageCont}>
                                            <label htmlFor="password">Password</label>
                                            <Field
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="*************"
                                                className={styles.input}
                                            />
                                            {!errors.password ? <span className={styles.noError}></span> : <span className={styles.error}>{errors.password}</span>}
                                        </div>
                                        <div className={styles.buttonForm}>
                                            <button type="submit">Login</button>
                                            {formSend ? <p className={styles.exito}>Formulario enviado con exito!</p> : <p>  </p>}
                                        </div>
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
