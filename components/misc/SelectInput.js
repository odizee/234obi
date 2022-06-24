import styles from './Styles.module.scss';
import caret_down from '../../assets/caret_down.png';
import Image from 'next/image';
import { useState } from 'react';

const SelectInput = ({ option, name, value, onChange }) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  //dropdown items
  const [itemsList, setItemsList] = useState([
    {
      name: 'Ezeani Village',
      value: 'Ezeani Village 1',
    },
    {
      name: 'Ezeani Village',
      value: 'Ezeani Village 2',
    },
    {
      name: 'Ezeani Village',
      value: 'Ezeani Village 3',
    },
    // {
    //   name: 'Ezeani Village',
    //   value: 'Ezeani Village',
    // },
  ]);

  console.log(itemsList);
  const [selectedItemIndex, setSelectedItemsIndex] = useState(null);

  return (
    <div>
      <div className={styles.dropdown}>
        <div
          className={`${styles.dropdown__selection} ${
            isDropDownVisible ? styles.visible : ''
          }`}
          onClick={(e) => {
            setIsDropDownVisible(!isDropDownVisible);
          }}
        >
          {' '}
          <p>
            {selectedItemIndex !== null
              ? itemsList[selectedItemIndex].name
              : 'Select'}
          </p>
        </div>
        {isDropDownVisible ? (
          <div className={styles.dropdown__item_holder}>
            {itemsList.map((item, index) => {
              return (
                <div
                  className={styles.dropdown_item}
                  key={item.value}
                  onClick={(e) => {
                    setSelectedItemsIndex(index);

                    setIsDropDownVisible(false);
                  }}
                >
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
