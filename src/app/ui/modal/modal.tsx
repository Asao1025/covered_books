import styles from '@/app/ui/modal/modal.module.css'
import React from "react";
import { CloseOutlined } from '@ant-design/icons';
import { FloatButton} from 'antd';

const Modal = (Props) =>　{
    const closeModal = () => {
        Props.setShowModal(false);
        }
    if (!Props.showFlg) {
        return null;
    } else {
        return (
                <div className={styles.modalBack}>
                    <div className={styles.modalContent}>
                        <FloatButton className={styles.modalCloseButton}
                            icon={<CloseOutlined />}
                            onClick={closeModal}/>
                        <div className={styles.modalImg}>
                            <img
                            src={Props.src}
                            alt="Sample Imageだよ" />
                        </div>
                        <div className={styles.modalText}>
                            ここに説明文を記載する<br/>
                        </div>
                    </div>
                </div>
              );
        }
    };

export default Modal;
