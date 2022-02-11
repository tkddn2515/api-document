import { useEffect, useState } from "react";
import Button from "./Button";
import styles from './MainApiList.module.css';

const MainApiList = ({ apiList, setContent }) => {

  const [apiArray, setApiArray] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    if (apiList) {
      sortApiList();
    }
  }, [apiList]);

  const sortApiList = () => {
		let sortApiList = [...apiList];
		sortApiList.sort((a, b) => {
			const a_c = a.category.toLowerCase();
			const b_c = b.category.toLowerCase();
			const a_n = a.name.toLowerCase();
			const b_n = b.name.toLowerCase();
			if (a_c < b_c) {
				return -1;
			} else if (a_c === b_c) {
				if (a_n < b_n) {
					return -1;
				} else if (a_n === b_n) {
					return 0;
				} else {
					return 1;
				}
			} else {
				return 1;
			}
		});

		let newApiArray = [];

		sortApiList.forEach((v) => {
			const category = v.category;
			if (newApiArray[category]) {
				newApiArray[category] = [...newApiArray[category], v];
			} else {
				newApiArray[category] = [v];
			}
		});
		setApiArray(newApiArray);
		setKeys(Object.keys(newApiArray));
	};

	return (
		<div className={styles.container}>
			{keys.map((v, idx) => <Button key={v} name={v} list={apiArray[v]} setContent={setContent} />)}
		</div>
	);
};

export default MainApiList;
