import { Helmet } from "react-helmet";

//SEO component for defining headers
export const SEO = ({ title, description, meta = [] }) => {
	return (
		<Helmet
			title={title}
			htmlAttributes={{ lang: "en" }}
			meta={[
				{
					name: `description`,
					content: description,
				},
				...meta,
			]}
		/>
	);
};

export default SEO;
