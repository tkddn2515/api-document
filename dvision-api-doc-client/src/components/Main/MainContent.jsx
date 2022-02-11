import styles from "./MainContent.module.css";
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

const MainContent = ({ content }) => {
	const GET_API = gql`
		query GetApi($id: Int!) {
			getApi(id: $id) {
				category
				name
				method
				url
				query
				body
			}
		}
	`;

	const { data } = useQuery(GET_API, {
		variables: { id: content ? content : 0 },
	});

	const [api, setApi] = useState();

	useEffect(() => {
		if (data && data.getApi) {
			console.log(data.getApi);
			setApi(data.getApi);
		}
	}, [data]);

	return (
		<>
			<div className={styles.container}>
				{!content && <div>음슴</div>}
				{api && (
					<>
						<div className={styles.name}>{api.name}</div>
						<div className={styles.contentContainer}>
							<div className={styles.title}> Method </div>
							<div className={styles.content}>{api.method}</div>
							<br />
							<br />
							<br />
							<br />
							<div className={styles.title}> Url </div>
							<div className={styles.content}>{api.url}</div>
							{api.query && (
								<>
									<br />
									<br />
									<br />
									<br />
									<div className={styles.title}> Query </div>
									<div className={styles.content}>{api.query}</div>
								</>
							)}
							{api.body && (
								<>
									<br />
									<br />
									<br />
									<br />
									<div className={styles.title}> Body </div>
									<div className={styles.content}>{api.body}</div>
								</>
							)}
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default MainContent;
