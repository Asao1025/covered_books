'use client'

import styles from '@/app/ui/pop/pop.module.css'
import Modal from '../modal/modal'
import React, {useState} from 'react'

const PopContent = (props)=>{
    const [showModal, setShowModal] = useState(false);
    const ShowModal = () => {
        setShowModal(true);
        }

    if(props.paddingLeft == true){
        return(
                <div className={styles.leftContent}>
                    <img src={props.img}
                    onClick={ShowModal}
                    alt="Sample Imageだよ" />
                    <Modal showFlg={showModal} setShowModal={setShowModal} src={props.img}/>
                </div>
                )
        } else {
            return (
                <div className={styles.rightContent}>
                    <img src={props.img}
                    onClick={ShowModal}
                    alt="Sample Imageだよ" />
                    <Modal showFlg={showModal} setShowModal={setShowModal} src={props.img}/>
                </div>
            )
        }
    }

export default PopContent
