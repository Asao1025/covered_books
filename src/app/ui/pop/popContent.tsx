'use client'

import styles from '@/app/ui/pop/pop.module.css'
import Modal from '../modal/modal'
import React, {useState} from 'react'

interface PopContentProps {
    img: string;
    bookName: string;
    paddingLeft: boolean;
    link: string;
}

const PopContent: React.FC<PopContentProps> = (Props)=>{
    const [showModal, setShowModal] = useState(false);
    const ShowModal = () => {
        setShowModal(true);
        }

    if(Props.paddingLeft == true){
        return(
                <div className={styles.leftContent}>
                    <img src={Props.img}
                    onClick={ShowModal}
                    alt={Props.bookName}/>
                    <Modal showFlg={showModal} setShowModal={setShowModal}
                           src={Props.img}
                           link={Props.link}
                           bookName={Props.bookName}
                           />
                </div>
                )
        } else {
            return (
                <div className={styles.rightContent}>
                    <img src={Props.img}
                    onClick={ShowModal}
                    alt={Props.bookName}/>
                    <Modal showFlg={showModal} setShowModal={setShowModal}
                           src={Props.img}
                           link={Props.link}
                           bookName={Props.bookName}/>
                </div>
            )
        }
    }

export default PopContent
