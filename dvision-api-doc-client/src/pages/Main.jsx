import React, { useState } from 'react'
import { useQuery, gql } from "@apollo/client";

import MainHeader from '../components/Main/MainHeader';
import MainApiList from '../components/Main/MainApiList';
import MainContent from '../components/Main/MainContent';



const Main = () => {
  
  const GET_API_LIST = gql`
		query GetApiList {
      getApiList {
        id
        category
        name
      }
    }
	`;

  const { data } = useQuery(GET_API_LIST);
  const [content, setContent] = useState();

  return(
    <>
      <MainHeader />
      <MainApiList apiList={ data ? data.getApiList : null} setContent={setContent}/>
      <MainContent content={content}/>
    </>
  )
}

export default Main;