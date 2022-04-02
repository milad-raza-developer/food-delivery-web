import React, { useState } from "react";
import './signup.css';
import Container from '../Components/Container'
import { auth, createUserWithEmailAndPassword, addDoc, userRef, restaurantsRef, storage, ref, uploadBytes, getDownloadURL } from '../Utils/firebase'
import { Form, Button, Upload, Alert, Radio } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [role, setRadio] = useState('user');
    const navigate = useNavigate();
    const onhandleuserName = (e) => {
        setUserName(e.target.value)
    }
    const onhandleEmail = (e) => {
        setEmail(e.target.value)
    }
    const onhandleCity = (e) => {
        setCity(e.target.value)
    }
    const onhandleCountry = (e) => {
        setCountry(e.target.value)
    }
    const onhandlePassword = (e) => {
        setPassword(e.target.value)
    }

    const onhandleRadio = e => {
        setRadio(e.target.value);
    };

    const normFile = (e) => {
        console.log('Upload event:', e);
        setImage(e && e.fileList)
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const uplodeUserImage = async (file) => {
        let userImage;
        try {
            const storageRef = ref(storage, file.name)
            const uplode = await uploadBytes(storageRef, file)
            console.log('file uploded')
            const imageUrl = await getDownloadURL(storageRef)
            userImage = imageUrl
        }
        catch (err) {
            console.log(err.message)
        }
        return userImage
    }





    const uplodeData = async () => {

        if (userName !== '' && email !== '' && city !== '' && country !== '' && password !== '' && role !== '' && image !== '') {

            const userImage = await uplodeUserImage(image[0].originFileObj)

            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    // Signed in 
                    let userObj = {
                        uid: user.user.uid,
                        userName,
                        email,
                        city,
                        country,
                        password,
                        userImage,
                        role
                    }

                    console.log('Signup successufully')

                    let collectionName;

                    if (role === 'restaurant') {
                        collectionName = restaurantsRef
                    }

                    else {
                        collectionName = userRef
                    }
                    addDoc(collectionName, userObj).then(() => {
                        setTimeout(() => {
                            setSuccess('')
                        }, 3000);
                        setSuccess(userObj.userName + ' your account has been created successfully')
                        // navigate('/resturantDashboard')
                    }).catch((err) => {
                        setTimeout(() => {
                            setError('')
                        }, 3000);
                        setError(err.message)
                        console.log(err)
                    })

                    // ...
                })
                .catch((err) => {
                    setTimeout(() => {
                        setError('')
                    }, 3000);
                    setError(err.message)
                    console.log(err)
                })
        }
        else {
            setError('Please fill the form correctly')
        }
    }


    return (
        <Container>
            <section className="signup" id="signup">

                <h3 className="sub-heading"> Signup now </h3>
                <h1 className="heading signupHeading"> free and fast </h1>
                <p className="errorBox">
                    {
                        error !== '' &&
                        <Alert message={error} type={'error'} />
                    }
                    {
                        success !== '' &&
                        <Alert message={success} type={'success'} />
                    }
                </p>
                <div className="form">

                    <div className="inputBox">
                        <div className="input">
                            <span>your name or restaurant<req> * </req></span>
                            <input type="text" placeholder="enter your name or restaurant" name="userName" value={userName} onChange={onhandleuserName} />
                        </div>
                        <div className="input">
                            <span>your email<req> * </req></span>
                            <input type="email" placeholder="enter your email" name="email" value={email} onChange={onhandleEmail} />
                        </div>
                    </div>
                    <div className="inputBox">
                        <div className="input">
                            <span>your city<req> * </req></span>
                            <input type="text" placeholder="enter city" name="city" value={city} onChange={onhandleCity} />
                        </div>
                        <div className="input">
                            <span>country<req> * </req></span>
                            <input type="test" placeholder="enter country" name="country" value={country} onChange={onhandleCountry} />
                        </div>
                    </div>
                    <div className="inputBox">
                        <div className="input">
                            <span>password<req> * </req></span>
                            <input type="password" placeholder="create your password" name="password" value={password} onChange={onhandlePassword} />
                        </div>

                        <div className="roleInput">
                            <span className="roleLabel">role<req> * </req></span>
                            <Radio.Group onChange={onhandleRadio} value={role}>
                                <Radio defaultChecked value={'user'}>User</Radio>
                                <Radio value={'restaurant'}>Restaurant</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    {/* <div className="inputBox">
                        <div className="input">
                            <span>your address</span>
                            <textarea name="" placeholder="enter your address" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="input">
                            <span>your message</span>
                            <textarea name="" placeholder="enter your message" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div> */}
                    <div className="inputBox">
                        <div className="uplodeInput">
                            <span className="uplodeLabel">uplode<req> * </req></span>
                            <Form.Item
                                name="upload"
                                label="Upload"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                extra=""
                            >
                                <Upload name="logo" action="/upload.do" listType="picture">
                                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                                </Upload>
                            </Form.Item>
                        </div>
                    </div>

                    <input type="submit" value="Signup now" className="btn signup-btn" onClick={uplodeData} />

                </div>

            </section>
        </Container>
    )
}

export default Signup