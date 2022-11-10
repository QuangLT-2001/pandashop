import React from 'react';
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet';
const Meta = ({ image, description, url, title, titlePage }) => {
     return (
          <Helmet htmlAttributes>
               <html lang="en" />
               <title>
                    {titlePage}
               </title>
               <meta
                    property='og:image'
                    content={image}
               />
               <meta
                    property="og:description"
                    content={description}
               />
               <meta
                    property="og:url"
                    content={url}
               />
               <meta property="og:title" content={title} />
          </Helmet>
     );
}
Meta.propTypes = {
     image: PropTypes.string,
     description: PropTypes.string,
     title: PropTypes.string,
     url: PropTypes.string
}
export default Meta;