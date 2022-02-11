import styles from './MainContent.module.css';

const MainContent = ({ content }) => {
  return(
    <div className={styles.container}>
      {JSON.stringify(content)}
    </div>
  )
}

export default MainContent;