import React from 'react';
import styles from './ComfortsBlock.module.scss';

interface IProps {
    type: string,
    description: string,
};

export const ComfortsBlock = ({comforts}: {comforts: IProps[]}) => {
  return (
    <div className={styles["comforts-list"]}>
        {
            comforts.map((item: IProps) => <div className="comfort-item">
                {item.type} ____ {item.description}
            </div>)
        }
        
    </div>
  )
}
