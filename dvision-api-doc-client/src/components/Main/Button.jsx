import { memo, useState } from "react";
import styles from './Button.module.css';

const Button = memo(({ name, api, list, setContent }) => {

  const [click, setClick] = useState(false);
  const isCategory = list && list.length > 0;

  const onClick = () => {
    if(list) { // 카테고리일 시
      setClick(!click);
    } else { // api이름일시
      setContent(api.id);
    }
  }
  
  return (
    <div className={isCategory ? click ? styles.containerClick : styles.container : styles.containerApi}>
      <div className={isCategory ? click ? styles.nameClick : styles.name : styles.apiname} onClick={onClick} >{name}</div>
      { click && list && list.map(v => <Button key={v.category + v.name} name={v.name} api={v} setContent={setContent}/>) }
    </div>
  )
})

export default Button;