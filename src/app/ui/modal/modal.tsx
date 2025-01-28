import styles from '@/app/ui/modal/modal.module.css'
import React from "react";
import { CloseOutlined } from '@ant-design/icons';
import { FloatButton} from 'antd';

interface ModalProps {
    setShowModal: (showFlg: boolean) => void;
    showFlg: boolean;
    src: string;
}

const Modal: React.FC<ModalProps> = (Props) =>　{
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
                            alt={Props.bookName} />
                        </div>
                    </div>
                </div>
              );
        }
    };

export default Modal;
