import styles from '@/app/ui/modal/modal.module.css'
import React from "react";
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, FloatButton} from 'antd';

interface ModalProps {
    setShowModal: (showFlg: boolean) => void;
    showFlg: boolean;
    src: string;
    link: string;
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
                        <div>
                            <Button className={styles.modalCartButton}
                                    type="primary" size="large"
                                    icon={<SearchOutlined />}
                                    href={Props.link} target="_blank" rel="noopener noreferrer">
                                    この本を見てみる
                            </Button>
                        </div>
                    </div>
                </div>
              );
        }
    };

export default Modal;
